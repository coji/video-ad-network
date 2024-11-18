import { TZDate } from '@date-fns/tz'
import { format } from 'date-fns'

const tz = 'Asia/Tokyo'

export const formatDateTime = (utc: string, formatStr = 'yyyy-MM-dd HH:mm') => {
	const date = new TZDate(utc, 'UTC').withTimeZone(tz)
	return format(date, formatStr)
}
