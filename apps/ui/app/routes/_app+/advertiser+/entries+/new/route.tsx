import { getFormProps, getInputProps, useForm } from '@conform-to/react'
import { getZodConstraint, parseWithZod } from '@conform-to/zod/v4'
import {
  FileVideoIcon,
  GoalIcon,
  GroupIcon,
  PlusIcon,
  XIcon,
} from 'lucide-react'
import { Form, Link, useNavigation } from 'react-router'
import { dataWithError, dataWithSuccess } from 'remix-toast'
import { z } from 'zod/v4'
import { DatePickerWithRange } from '~/components/date-picker-with-range'
import { FieldError } from '~/components/field-error'
import { MediaFileDropInput } from '~/components/media-file-drop-input'
import {
  Button,
  HStack,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Stack,
} from '~/components/ui'
import { requireOrgUser } from '~/services/auth.server'
import { db } from '~/services/db.server'
import type { Route } from './+types/route'
import { submitEntries } from './mutations.server'
import { getAdvertiserByOrganizationId } from './queries.server'

export const schema = z.object({
  tzOffset: z.number().int().min(-720).max(840),

  campaignName: z.string().max(200),
  campaignStartAt: z.string({ error: '開始日は必須です' }).date(),
  campaignEndAt: z.string({ error: '終了日は必須です' }).date(),
  campaignBudget: z.number().int().min(0),
  campaignBudgetType: z.union([z.literal('UNLIMITED'), z.literal('TOTAL')]),
  campaignDeliveryPace: z.literal('ASMUCHASPOSSIBLE'),

  adGroupName: z.string().max(200),
  adGroupBidPriceCpm: z.number().int().positive(),
  adGroupFrequencyCapImpression: z.number().int().positive(),
  adGroupFrequencyCapWindow: z.number().int().min(1).max(100),
  adGroupFrequencyCapUnit: z.union([
    z.literal('DAY'),
    z.literal('HOUR'),
    z.literal('MINUTE'),
  ]),

  adName: z.string().max(200),
  adType: z.union([z.literal('video'), z.literal('audio')]),
  adMediaFile: z
    .file({ error: 'ファイルを選択してください' })
    .max(100 * 1024 * 1024, '最大 100MB までのファイルを選択してください')
    .refine(
      (file) =>
        file.type.startsWith('video/') || file.type.startsWith('audio/'),
      '動画または音声ファイルを選択してください',
    ),
  adDuration: z.number().int().positive(),
  adMimeType: z.string(),
  adWidth: z.number().int().positive().optional(),
  adHeight: z.number().int().positive().optional(),
  adDescription: z.string().max(1000).optional(),
  adClickThroughUrl: z.url().startsWith('https://'),

  companionBanners: z.array(
    z.object({
      mediaFile: z
        .file({ error: 'ファイルを選択してください' })
        .max(100 * 1024 * 1024, '最大 100MB までのファイルを選択してください')
        .refine(
          (file) => file.type.startsWith('image/'),
          '画像ファイルを選択してください',
        ),
      width: z.number().int().positive(),
      height: z.number().int().positive(),
      mimeType: z.string(),
    }),
  ),
})

export async function action(args: Route.ActionArgs) {
  const orgUser = await requireOrgUser(args)
  const { request } = args
  const submission = await parseWithZod(await request.formData(), { schema })
  if (submission.status !== 'success') {
    return { lastResult: submission.reply() }
  }

  const kysely = db()
  const advertiser = await getAdvertiserByOrganizationId(
    kysely,
    orgUser.session.activeOrganizationId,
  )
  if (!advertiser) {
    throw dataWithError(null, '広告主情報が見つかりませんでした', {
      status: 422, // Unprocessable Entity
    })
  }

  const entries = await submitEntries(kysely, advertiser.id, submission.value)

  return dataWithSuccess(
    { lastResult: submission.reply({ resetForm: true }) },
    {
      message: '新規入稿が完了しました',
      description: `キャンペーン: ${entries.campaign.name} の入稿が完了しました`,
    },
  )
}

export default function NewCampaign({ actionData }: Route.ComponentProps) {
  const navigation = useNavigation()
  const [form, fields] = useForm({
    lastResult: actionData?.lastResult,
    defaultValue: {
      campaignBudgetType: 'UNLIMITED',
      campaignDeliveryPace: 'ASMUCHASPOSSIBLE',
      adGroupFrequencyCapWindow: 5,
      adGroupFrequencyCapUnit: 'MINUTE',
      adGroupFrequencyCapImpression: 1,
    },
    constraint: getZodConstraint(schema),
    onValidate: ({ formData }) => parseWithZod(formData, { schema }),
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  })
  const companionBanners = fields.companionBanners.getFieldList()

  return (
    <div>
      <h1 className="text-2xl font-bold">新規入稿</h1>
      <Form
        method="POST"
        encType="multipart/form-data"
        {...getFormProps(form)}
        className="grid max-w-2xl grid-cols-1 place-items-start gap-4 md:grid-cols-[auto_1fr] md:gap-x-32 md:gap-y-8 md:py-4"
      >
        {/* キャンペーン */}
        <HStack>
          <GoalIcon size="16" />
          <div>キャンペーン</div>
        </HStack>

        <Stack gap="lg">
          <Stack>
            <Label htmlFor={fields.campaignName.id}>キャンペーン名</Label>
            <Input
              {...getInputProps(fields.campaignName, { type: 'text' })}
              key={fields.campaignName.key}
              placeholder="キャンペーン名を入力"
            />
            <FieldError id={fields.campaignName.errorId}>
              {fields.campaignName.errors}
            </FieldError>
          </Stack>

          <Stack>
            <Label htmlFor="campaign_period">期間</Label>
            <DatePickerWithRange
              id="campaign_period"
              className="w-full"
              names={{
                from: fields.campaignStartAt.name,
                to: fields.campaignEndAt.name,
              }}
              onSelect={(range) => {
                if (range) {
                  // タイムゾーンオフセットを更新
                  form.update({
                    name: fields.tzOffset.name,
                    value: new Date().getTimezoneOffset(),
                  })
                }
              }}
            />
            <FieldError id={fields.campaignStartAt.errorId}>
              {fields.campaignStartAt.errors}
            </FieldError>
            <FieldError id={fields.campaignEndAt.errorId}>
              {fields.campaignEndAt.errors}
            </FieldError>

            {/* タイムゾーンオフセット */}
            <input
              {...getInputProps(fields.tzOffset, { type: 'hidden' })}
              key={fields.tzOffset.key}
            />
          </Stack>

          <div className="grid w-full grid-cols-2 gap-4">
            <Stack>
              <Label htmlFor={fields.campaignBudget.id}>予算</Label>
              <HStack>
                <Input
                  {...getInputProps(fields.campaignBudget, { type: 'text' })}
                  key={fields.campaignBudget.key}
                  className="flex-1"
                />
                <div className="text-sm">円</div>
              </HStack>
              <FieldError id={fields.campaignBudget.errorId}>
                {fields.campaignBudget.errors}
              </FieldError>
            </Stack>

            <Stack>
              <Label htmlFor={fields.campaignBudgetType.id}>予算タイプ</Label>
              <Select
                name={fields.campaignBudgetType.name}
                defaultValue={fields.campaignBudgetType.initialValue}
              >
                <SelectTrigger id={fields.campaignBudgetType.id}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="UNLIMITED">無制限</SelectItem>
                  <SelectItem value="TOTAL">トータル予算</SelectItem>
                </SelectContent>
              </Select>
              <FieldError id={fields.campaignBudgetType.errorId}>
                {fields.campaignBudgetType.errors}
              </FieldError>
            </Stack>

            <Stack className="col-span-2">
              <Label htmlFor={fields.campaignDeliveryPace.id}>配信ペース</Label>
              <Select
                name={fields.campaignDeliveryPace.name}
                defaultValue={fields.campaignDeliveryPace.initialValue}
              >
                <SelectTrigger id={fields.campaignDeliveryPace.id}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ASMUCHASPOSSIBLE">なるべく多く</SelectItem>
                </SelectContent>
              </Select>
              <FieldError id={fields.campaignDeliveryPace.errorId}>
                {fields.campaignDeliveryPace.errors}
              </FieldError>
            </Stack>
          </div>
        </Stack>

        {/* 広告グループ */}
        <HStack>
          <GroupIcon />
          <div>広告グループ</div>
        </HStack>

        <Stack gap="lg">
          <Stack>
            <Label htmlFor={fields.adGroupName.id}>広告グループ名</Label>
            <Input
              {...getInputProps(fields.adGroupName, { type: 'text' })}
              key={fields.adGroupName.key}
              placeholder="広告グループ名を入力"
            />
            <FieldError id={fields.adGroupName.errorId}>
              {fields.adGroupName.errors}
            </FieldError>
          </Stack>

          <Stack>
            <Label htmlFor={fields.adGroupFrequencyCapWindow.id}>
              フリークエンシーキャップ
            </Label>
            <HStack>
              <Input
                {...getInputProps(fields.adGroupFrequencyCapWindow, {
                  type: 'text',
                })}
                key={fields.adGroupFrequencyCapWindow.key}
                className="w-14"
              />
              <Select
                name={fields.adGroupFrequencyCapUnit.name}
                defaultValue={fields.adGroupFrequencyCapUnit.initialValue}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="DAY">日</SelectItem>
                  <SelectItem value="HOUR">時間</SelectItem>
                  <SelectItem value="MINUTE">分</SelectItem>
                </SelectContent>
              </Select>
              <div>に</div>
              <Input
                {...getInputProps(fields.adGroupFrequencyCapImpression, {
                  type: 'text',
                })}
                key={fields.adGroupFrequencyCapImpression.key}
                className="w-14"
              />
              <div className="flex-shrink-0">回まで</div>
            </HStack>

            <FieldError id={fields.adGroupFrequencyCapWindow.errorId}>
              {fields.adGroupFrequencyCapWindow.errors}
            </FieldError>

            <FieldError id={fields.adGroupFrequencyCapImpression.errorId}>
              {fields.adGroupFrequencyCapImpression.errors}
            </FieldError>

            <FieldError id={fields.adGroupFrequencyCapUnit.errorId}>
              {fields.adGroupFrequencyCapUnit.errors}
            </FieldError>
          </Stack>

          <Stack className="md:col-span-2">
            <Label htmlFor={fields.adGroupBidPriceCpm.id}>入札価格 (CPM)</Label>
            <HStack>
              <Input
                {...getInputProps(fields.adGroupBidPriceCpm, { type: 'text' })}
                key={fields.adGroupBidPriceCpm.key}
              />
              <div className="text-sm">円</div>
            </HStack>
            <FieldError id={fields.adGroupBidPriceCpm.errorId}>
              {fields.adGroupBidPriceCpm.errors}
            </FieldError>
          </Stack>
        </Stack>

        {/* 広告 */}
        <HStack>
          <FileVideoIcon />
          <div>広告</div>
        </HStack>

        <Stack gap="lg">
          <Stack>
            <Label htmlFor={fields.adName.id}>広告名</Label>
            <Input
              {...getInputProps(fields.adName, { type: 'text' })}
              key={fields.adName.key}
            />
            <FieldError id={fields.adName.errorId}>
              {fields.adName.errors}
            </FieldError>
          </Stack>

          <Stack>
            <Label htmlFor={fields.adMediaFile.id}>
              広告クリエイティブ (動画または音声ファイル)
            </Label>
            <MediaFileDropInput
              key={fields.adMediaFile.key}
              id={fields.adMediaFile.id}
              name={fields.adMediaFile.name}
              type={['video', 'audio']}
              onMetadataReady={(file, type, metadata) => {
                form.update({
                  name: fields.adType.name,
                  value: type,
                })
                form.update({
                  name: fields.adDuration.name,
                  value: metadata.duration?.toFixed(0),
                })
                form.update({
                  name: fields.adMimeType.name,
                  value: file.type,
                })
                form.update({
                  name: fields.adWidth.name,
                  value: metadata.width,
                })
                form.update({
                  name: fields.adHeight.name,
                  value: metadata.height,
                })
                form.update({
                  name: fields.adDescription.name,
                  value: `${file.name.replace(/\.[^.]+$/, '')} (${metadata.duration?.toFixed(0)}秒)`,
                })
              }}
            />
            <input
              {...getInputProps(fields.adType, { type: 'hidden' })}
              key={fields.adType.key}
            />
            <FieldError id={fields.adMediaFile.errorId}>
              {fields.adMediaFile.errors}
            </FieldError>

            <div className="grid w-full grid-cols-2 place-items-end items-center gap-2">
              <Label htmlFor={fields.adMimeType.id}>MIME タイプ</Label>
              <Input
                {...getInputProps(fields.adMimeType, { type: 'text' })}
                key={fields.adMimeType.key}
                className="w-full"
              />
              {fields.adMimeType.errors && (
                <FieldError
                  id={fields.adMimeType.errorId}
                  className="col-span-2"
                >
                  {fields.adMimeType.errors}
                </FieldError>
              )}

              <Label htmlFor={fields.adDuration.id}>再生時間</Label>
              <HStack>
                <Input
                  {...getInputProps(fields.adDuration, {
                    type: 'text',
                  })}
                  key={fields.adDuration.key}
                />
                <div className="text-sm">秒</div>
              </HStack>

              {fields.adDuration.errors && (
                <FieldError
                  id={fields.adDuration.errorId}
                  className="col-span-2"
                >
                  {fields.adDuration.errors}
                </FieldError>
              )}

              {fields.adType.value === 'video' && (
                <>
                  <Label htmlFor={fields.adWidth.id}>width</Label>
                  <HStack>
                    <Input
                      {...getInputProps(fields.adWidth, {
                        type: 'text',
                      })}
                      key={fields.adWidth.key}
                    />
                    <div className="text-sm">px</div>
                  </HStack>

                  {fields.adWidth.errors && (
                    <FieldError
                      id={fields.adWidth.errorId}
                      className="col-span-2"
                    >
                      {fields.adWidth.errors}
                    </FieldError>
                  )}

                  <Label htmlFor={fields.adHeight.id}>height</Label>
                  <HStack>
                    <Input
                      {...getInputProps(fields.adHeight, {
                        type: 'text',
                      })}
                      key={fields.adHeight.key}
                    />
                    <div className="text-sm">px</div>
                  </HStack>

                  {fields.adHeight.errors && (
                    <FieldError
                      id={fields.adHeight.errorId}
                      className="col-span-2"
                    >
                      {fields.adHeight.errors}
                    </FieldError>
                  )}
                </>
              )}
            </div>
          </Stack>

          <Stack>
            <Label htmlFor={fields.adClickThroughUrl.id}>
              クリックスルーURL
            </Label>
            <Input
              {...getInputProps(fields.adClickThroughUrl, {
                type: 'text',
              })}
              key={fields.adClickThroughUrl.key}
              placeholder="https://"
            />
            <FieldError id={fields.adClickThroughUrl.errorId}>
              {fields.adClickThroughUrl.errors}
            </FieldError>
          </Stack>

          <Stack>
            <Label htmlFor={fields.adDescription.id}>広告説明メモ</Label>
            <Input
              {...getInputProps(fields.adDescription, { type: 'text' })}
              key={fields.adDescription.key}
            />
            <FieldError id={fields.adDescription.errorId}>
              {fields.adDescription.errors}
            </FieldError>
          </Stack>

          {companionBanners.map((companionBanner, index) => {
            const cbFields = companionBanner.getFieldset()
            return (
              <Stack key={companionBanner.key}>
                <Label>コンパニオンバナー {index + 1}</Label>

                <HStack full align="top">
                  <Stack>
                    <Stack>
                      <Label htmlFor={cbFields.mediaFile.id}>
                        バナー画像ファイル
                      </Label>
                      <MediaFileDropInput
                        key={cbFields.mediaFile.key}
                        id={cbFields.mediaFile.id}
                        name={cbFields.mediaFile.name}
                        type="image"
                        onMetadataReady={(file, _type, metadata) => {
                          form.update({
                            name: cbFields.width.name,
                            value: metadata.width,
                          })
                          form.update({
                            name: cbFields.height.name,
                            value: metadata.height,
                          })
                          form.update({
                            name: cbFields.mimeType.name,
                            value: file.type,
                          })
                        }}
                      />
                      <FieldError id={cbFields.mediaFile.errorId}>
                        {cbFields.mediaFile.errors}
                      </FieldError>

                      <div className="grid w-full grid-cols-2 place-items-end items-center gap-2">
                        <Label htmlFor={cbFields.mimeType.id}>
                          MIME タイプ
                        </Label>
                        <Input
                          {...getInputProps(cbFields.mimeType, {
                            type: 'text',
                          })}
                          key={cbFields.mimeType.key}
                          className="w-full"
                        />
                        {cbFields.mimeType.errors && (
                          <FieldError
                            id={cbFields.mimeType.errorId}
                            className="col-span-2"
                          >
                            {cbFields.mimeType.errors}
                          </FieldError>
                        )}
                        <Label htmlFor={cbFields.width.id}>width</Label>
                        <HStack>
                          <Input
                            {...getInputProps(cbFields.width, {
                              type: 'text',
                            })}
                            key={cbFields.width.key}
                          />
                          <div className="text-sm">px</div>
                        </HStack>

                        {cbFields.width.errors && (
                          <FieldError
                            id={cbFields.width.errorId}
                            className="col-span-2"
                          >
                            {cbFields.width.errors}
                          </FieldError>
                        )}

                        <Label htmlFor={cbFields.height.id}>height</Label>
                        <HStack>
                          <Input
                            {...getInputProps(cbFields.height, {
                              type: 'text',
                            })}
                            key={cbFields.height.key}
                          />
                          <div className="text-sm">px</div>
                        </HStack>

                        {cbFields.height.errors && (
                          <FieldError
                            id={cbFields.height.errorId}
                            className="col-span-2"
                          >
                            {cbFields.height.errors}
                          </FieldError>
                        )}
                      </div>
                    </Stack>
                  </Stack>

                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    onClick={() => {
                      form.remove({
                        name: fields.companionBanners.name,
                        index,
                      })
                    }}
                  >
                    <XIcon />
                  </Button>
                </HStack>
              </Stack>
            )
          })}

          <Button
            type="button"
            variant="link"
            onClick={() => {
              form.insert({
                name: fields.companionBanners.name,
              })
            }}
          >
            <PlusIcon />
            コンパニオンバナーを追加
          </Button>
        </Stack>

        <HStack className="w-full justify-end md:col-span-2">
          <Button type="button" variant="link" asChild>
            <Link to="..">キャンセル</Link>
          </Button>
          <Button type="submit" disabled={navigation.state === 'submitting'}>
            まとめて新規入稿
          </Button>
        </HStack>
      </Form>
    </div>
  )
}
