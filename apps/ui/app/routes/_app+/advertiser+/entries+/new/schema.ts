import { z } from 'zod'

export const campaignFormSchema = z.object({
  name: z.string().nonempty(),
  type: z.literal('CPM'),
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
  dailyBudget: z.number().int().positive(),
  totalBudget: z.number().int().positive(),
})

export type CampaignFormData = z.infer<typeof campaignFormSchema>
