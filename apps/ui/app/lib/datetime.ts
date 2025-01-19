import { TZDate } from '@date-fns/tz'
import { addMinutes, format } from 'date-fns'

const tz = 'Asia/Tokyo'

/**
 * YYYY-MM-DD HH:mm:ss 形式の文字列を UTC として解釈して指定されたタイムゾーンの文字列にして返す
 * @param input
 * @param formatStr
 * @returns
 */
export const formatDateTime = (
  input: string,
  formatStr = 'yyyy-MM-dd HH:mm',
) => {
  const isoString = `${input.replace(' ', 'T')}Z`
  const utcDate = new TZDate(isoString, 'utc')
  const tzDate = utcDate.withTimeZone(tz)
  return format(tzDate, formatStr)
}

/**
 * DB に保存するために UTC 基準の文字列に変換する
 * @param date
 * @param timezoneOffset
 * @returns
 */
export const serializeDateTime = (
  dateStr: string | Date,
  timezoneOffset: number,
) => {
  return format(
    new TZDate(addMinutes(dateStr, timezoneOffset), 'utc'),
    'yyyy-MM-dd HH:mm:ss',
  )
}
