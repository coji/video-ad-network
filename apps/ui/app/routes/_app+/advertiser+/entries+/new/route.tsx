import { ChevronRightIcon } from 'lucide-react'
import React, { useState } from 'react'
import { data, redirect, useNavigation, useSubmit } from 'react-router'
import { Button } from '~/components/ui'
import type { Route } from './+types/route'
import { AdForm, AdGroupForm, CampaignForm } from './components'
import { sessionStorage } from './session.server'

const STEPS = [
  { id: 'campaign', label: 'キャンペーン' },
  { id: 'adgroup', label: '広告グループ' },
  { id: 'ad', label: '広告' },
] as const
type Step = (typeof STEPS)[number]

export async function action({ request }: Route.ActionArgs) {
  const session = await sessionStorage.getSession(request.headers.get('Cookie'))
  const formData = await request.formData()

  const step = formData.get('step') as Step['id']
  const intent = formData.get('intent')

  // セッションからドラフトデータを取得
  const draftData = session.get('draftData') ?? {
    campaign: null,
    adgroup: null,
    ad: null,
  }

  if (intent === 'save_draft') {
    // 現在のステップのデータをセッションに保存
    const stepData = Object.fromEntries(formData)
    session.set('draftData', {
      ...draftData,
      [step]: stepData,
    })

    return data(
      { ok: true },
      {
        headers: { 'Set-Cookie': await sessionStorage.commitSession(session) },
      },
    )
  }

  if (intent === 'submit') {
    // すべてのデータが揃っていれば、DBに保存
    const { campaign, adgroup, ad } = draftData ?? {}

    // セッションをクリア
    session.unset('draftData')

    return redirect('/campaigns', {
      headers: { 'Set-Cookie': await sessionStorage.commitSession(session) },
    })
  }
}

// ローダー関数
export async function loader({ request }: Route.LoaderArgs) {
  const session = await sessionStorage.getSession(request.headers.get('Cookie'))
  const draftData = session.get('draftData') || {
    campaign: null,
    adgroup: null,
    ad: null,
  }

  return { draftData }
}

// コンポーネント
export default function NewCampaign({
  loaderData: { draftData },
  actionData,
}: Route.ComponentProps) {
  const navigation = useNavigation()
  const submit = useSubmit()

  const [currentStep, setCurrentStep] = useState<Step['id']>('campaign')

  return (
    <div>
      <h1 className="mb-2 text-2xl font-bold">まとめて新規入稿</h1>

      <div className="flex items-center rounded border bg-slate-200 p-1">
        {STEPS.map((step, index) => (
          <React.Fragment key={step.id}>
            <div
              className={`flex items-center ${
                currentStep === step.id
                  ? 'rounded bg-card font-medium text-blue-600'
                  : 'text-gray-500'
              }`}
            >
              <Button
                type="button"
                onClick={() => setCurrentStep(step.id)}
                variant="ghost"
                className="w-40"
              >
                <span>{index + 1}.</span>
                {step.label}
              </Button>
            </div>

            {index < STEPS.length - 1 && (
              <ChevronRightIcon className="mx-4 text-gray-400" />
            )}
          </React.Fragment>
        ))}
      </div>

      {currentStep === 'campaign' && (
        <CampaignForm defaultValue={draftData.campaign ?? undefined} />
      )}

      {currentStep === 'adgroup' && (
        <AdGroupForm defaultValues={draftData.adgroup} />
      )}

      {currentStep === 'ad' && <AdForm defaultValues={draftData.ad} />}

      {currentStep === 'ad' && (
        <button
          type="submit"
          name="intent"
          value="submit"
          disabled={navigation.state === 'submitting'}
        >
          入稿する
        </button>
      )}
    </div>
  )
}
