import { cn } from '~/lib/utils'

interface FieldErrorProps extends React.ComponentProps<'div'> {}
export const FieldError = ({
  children,
  className,
  ...rest
}: FieldErrorProps) => {
  return (
    <div className={cn(className, 'text-sm text-red-500')} {...rest}>
      {children}
    </div>
  )
}
