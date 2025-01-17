import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import * as React from 'react'
import type { DateRange } from 'react-day-picker'
import { Button } from '~/components/ui'
import { Calendar } from '~/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover'
import { cn } from '~/lib/utils'

interface DatePickerWithRangeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  defaultValues?: DateRange
  names?: { from?: string; to?: string }
}
export function DatePickerWithRange({
  defaultValues,
  className,
  names,
  id,
  ...rest
}: DatePickerWithRangeProps) {
  const [date, setDate] = React.useState<DateRange | undefined>(defaultValues)

  return (
    <div className={cn('grid gap-2', className)} {...rest}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id={id}
            variant={'outline'}
            className={cn(
              'w-[300px] justify-start text-left font-normal',
              !date && 'text-muted-foreground',
              className,
            )}
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'yyyy年M月d日')} -{' '}
                  {format(date.to, 'yyyy年M月d日')}
                </>
              ) : (
                format(date.from, 'yyyy年M月d日')
              )
            ) : (
              <span>期間を選択</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>

      {names && (
        <>
          <input
            type="hidden"
            name={names.from}
            value={date?.from ? format(date.from, 'yyyy-MM-dd') : ''}
          />
          <input
            type="hidden"
            name={names.to}
            value={date?.to ? format(date.to, 'yyyy-MM-dd') : ''}
          />
        </>
      )}
    </div>
  )
}
