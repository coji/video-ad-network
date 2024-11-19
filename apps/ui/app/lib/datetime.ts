import { TZDate } from '@date-fns/tz'
import { format } from 'date-fns'

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
