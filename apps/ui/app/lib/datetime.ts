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
 * Converts a date to UTC-based string for database storage
 *
 * @throws {Error} If the date string is invalid
 * @param date
 * @param timezoneOffset
 * @returns {string} Date string in 'yyyy-MM-dd HH:mm:ss' format
 */
export const serializeDateTime = (
  dateStr: string | Date,
  timezoneOffset: number,
) => {
  if (typeof dateStr === 'string' && Number.isNaN(Date.parse(dateStr))) {
    throw new Error('Invalid date string provided')
  }
  if (typeof timezoneOffset !== 'number' || Math.abs(timezoneOffset) > 840) {
    throw new Error('Invalid timezone offset')
  }

  return format(
    new TZDate(addMinutes(dateStr, timezoneOffset), 'utc'),
    'yyyy-MM-dd HH:mm:ss',
  )
}
