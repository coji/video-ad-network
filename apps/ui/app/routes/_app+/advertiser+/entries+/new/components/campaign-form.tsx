import { getFormProps, getInputProps, useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import { Form, useNavigation } from 'react-router'
import {
  Button,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
} from '~/components/ui'
import { type CampaignFormData, campaignFormSchema } from '../schema'

export const CampaignForm = ({
  defaultValue = {
    name: '',
    type: 'CPM',
    startDate: '',
    endDate: '',
    dailyBudget: 0,
    totalBudget: 0,
  },
}: {
  defaultValue?: CampaignFormData
}) => {
  const [form, fields] = useForm({
    defaultValue,
    onValidate: ({ formData }) =>
      parseWithZod(formData, { schema: campaignFormSchema }),
  })
  const navigation = useNavigation()

  return (
    <Form method="POST" {...getFormProps(form)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor={fields.name.id}>キャンペーン名</Label>
        <Input
          {...getInputProps(fields.name, { type: 'text' })}
          placeholder="キャンペーン名を入力"
        />
      </div>

      <div className="space-y-2">
        <Label>課金タイプ</Label>
        <RadioGroup className="flex gap-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="CPM" id="cpm" />
            <Label htmlFor="cpm">CPM</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="CPC" id="cpc" />
            <Label htmlFor="cpc">CPC</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="period-start">開始日時</Label>
          <Input id="period-start" type="datetime-local" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="period-end">終了日時</Label>
          <Input id="period-end" type="datetime-local" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="daily-budget">1日予算</Label>
          <div className="relative">
            <Input
              id="daily-budget"
              type="number"
              placeholder="1日の予算上限"
            />
            <span className="absolute right-3 top-2.5 text-gray-500">円</span>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="total-budget">総予算</Label>
          <div className="relative">
            <Input id="total-budget" type="number" placeholder="総予算" />
            <span className="absolute right-3 top-2.5 text-gray-500">円</span>
          </div>
        </div>
      </div>

      <Button
        type="submit"
        name="intent"
        value="save_draft"
        disabled={navigation.state === 'submitting'}
      >
        下書き保存
      </Button>
    </Form>
  )
}
