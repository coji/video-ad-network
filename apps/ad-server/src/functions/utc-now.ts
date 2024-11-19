import { format } from 'date-fns'

export const utcNow = (date?: Date) =>
	format(date ?? new Date(), 'yyyy-MM-dd HH:mm:ss')
