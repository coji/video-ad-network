import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
dayjs.extend(timezone)

const tz = 'Asia/Tokyo'

/**
 * YYYY-MM-DD HH:mm:ss 形式の文字列を UTC として解釈して指定されたタイムゾーンの文字列にして返す
 * @param input
 * @param formatStr
 * @returns
 */
export const formatDateTime = (
  input: string,
  formatStr = 'YYYY-MM-DD HH:mm',
) => {
  return dayjs.utc(input).tz(tz).format(formatStr)
}

/**
 * Converts a date to UTC-based string for database storage
 *
 * @throws {Error} If the date string is invalid
 * @param date
 * @param timezoneOffset
 * @returns {string} Date string in 'YYYY-MM-DD HH:mm:ss' format
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

  return dayjs(dateStr)
    .add(timezoneOffset, 'minute')
    .utc()
    .format('YYYY-MM-DD HH:mm:ss')
}
