import { Input, Label, RadioGroup, RadioGroupItem } from '~/components/ui'

export const AdGroupForm = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="adgroup-name">広告グループ名</Label>
        <Input id="adgroup-name" placeholder="広告グループ名を入力" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="media-category">対象メディアカテゴリ</Label>
        <RadioGroup defaultValue="news" className="flex gap-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="news" id="news" />
            <Label htmlFor="news">ニュース</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="entertainment" id="entertainment" />
            <Label htmlFor="entertainment">エンタメ</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="fq-cap">FQキャップ設定</Label>
        <div className="flex gap-4">
          <Input
            id="fq-cap-num"
            type="number"
            placeholder="回数"
            className="w-32"
          />
          <select className="w-32 rounded-md border border-gray-200 p-2">
            <option>HOUR</option>
            <option>DAY</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="cpm">入札価格 (CPM)</Label>
        <div className="relative">
          <Input id="cpm" type="number" placeholder="CPMを入力" />
          <span className="absolute right-3 top-2.5 text-gray-500">円</span>
        </div>
      </div>
    </div>
  )
}
