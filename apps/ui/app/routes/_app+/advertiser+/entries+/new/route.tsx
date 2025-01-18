import { getFormProps, getInputProps, useForm } from '@conform-to/react'
import { getZodConstraint, parseWithZod } from '@conform-to/zod'
import {
  FileVideoIcon,
  GoalIcon,
  GroupIcon,
  PlusIcon,
  XIcon,
} from 'lucide-react'
import { Form, Link, useNavigation } from 'react-router'
import { dataWithSuccess } from 'remix-toast'
import { z } from 'zod'
import { DatePickerWithRange } from '~/components/date-picker-with-range'
import { FieldError } from '~/components/field-error'
import { MediaFileDropInput } from '~/components/file-drop-input'
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
import type { Route } from './+types/route'

export const schema = z.object({
  campaignName: z.string().max(200),
  campaignStartAt: z.string({ required_error: '開始日は必須です' }).date(),
  campaignEndAt: z.string({ required_error: '終了日は必須です' }).date(),
  campaignBudget: z.number().int().min(0),
  campaignBudgetType: z.union([z.literal('UNLIMITED'), z.literal('TOTAL')]),
  campaignDeliveryPace: z.union([
    z.literal('ASMUCHASPOSSIBLE'),
    z.literal('EVENLY'),
  ]),

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
  adMediaFile: z
    .instanceof(File, {
      message: 'ファイルを選択してください',
    })
    .refine(
      (file) =>
        file.type.startsWith('video/') || file.type.startsWith('audio/'),
      {
        message: '動画または音声ファイルを選択してください',
      },
    ),

  adDescription: z.string().max(1000).optional(),

  companionBanners: z.array(
    z.object({
      mediaFile: z
        .instanceof(File, { message: 'ファイルを選択してください' })
        .refine((file) => file.type.startsWith('image/'), {
          message: '画像ファイルを選択してください',
        }),
      clickThroughUrl: z.string().url().optional(),
    }),
  ),
})

export async function action({ request }: Route.ActionArgs) {
  console.log('action')
  const submission = await parseWithZod(await request.formData(), { schema })
  if (submission.status !== 'success') {
    return { lastResult: submission.reply() }
  }

  console.log(submission.value)

  return dataWithSuccess(
    { lastResult: submission.reply() },
    {
      message: '新規入稿が完了しました',
      description: JSON.stringify(submission.value),
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
      <h1 className="text-2xl font-bold">まとめて新規入稿</h1>
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
            />
            <FieldError id={fields.campaignStartAt.errorId}>
              {fields.campaignStartAt.errors}
            </FieldError>
            <FieldError id={fields.campaignEndAt.errorId}>
              {fields.campaignEndAt.errors}
            </FieldError>
          </Stack>

          <div className="grid w-full grid-cols-2 gap-4">
            <Stack>
              <Label htmlFor={fields.campaignBudget.id}>予算</Label>
              <HStack>
                <Input
                  {...getInputProps(fields.campaignBudget, { type: 'text' })}
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
                  <SelectItem value="EVENLY">均等</SelectItem>
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
            <Input {...getInputProps(fields.adName, { type: 'text' })} />
            <FieldError id={fields.adName.errorId}>
              {fields.adName.errors}
            </FieldError>
          </Stack>

          <Stack>
            <Label htmlFor={fields.adMediaFile.id}>
              広告クリエイティブファイル
            </Label>
            <MediaFileDropInput
              id={fields.adMediaFile.id}
              name={fields.adMediaFile.name}
              type="audio"
            />
            <FieldError id={fields.adMediaFile.errorId}>
              {fields.adMediaFile.errors}
            </FieldError>
          </Stack>

          <Stack>
            <Label htmlFor={fields.adDescription.id}>広告説明メモ</Label>
            <Input {...getInputProps(fields.adDescription, { type: 'text' })} />
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
                        id={cbFields.mediaFile.id}
                        name={cbFields.mediaFile.name}
                        type="image"
                      />
                      <FieldError id={cbFields.mediaFile.errorId}>
                        {cbFields.mediaFile.errors}
                      </FieldError>
                    </Stack>

                    <Stack>
                      <Label htmlFor={cbFields.clickThroughUrl.id}>
                        クリックスルーURL
                      </Label>
                      <Input
                        {...getInputProps(cbFields.clickThroughUrl, {
                          type: 'text',
                        })}
                      />
                      <FieldError id={cbFields.clickThroughUrl.errorId}>
                        {cbFields.clickThroughUrl.errors}
                      </FieldError>
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
