import { Input, Label } from '~/components/ui'

export const AdForm = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="creative-name">広告名</Label>
        <Input id="creative-name" placeholder="広告名を入力" />
      </div>

      <div className="space-y-2">
        <Label>音声ファイル</Label>
        <div className="rounded-lg border-2 border-dashed p-6 text-center">
          <p className="text-gray-500">
            クリックまたはドラッグ&ドロップで音声ファイルをアップロード
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <Label>コンパニオンバナー</Label>
        <div className="rounded-lg border-2 border-dashed p-6 text-center">
          <p className="text-gray-500">300x250サイズの画像をアップロード</p>
        </div>
      </div>
    </div>
  )
}
