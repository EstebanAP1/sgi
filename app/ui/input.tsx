import clsx from 'clsx'

export function Input({
  className,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={clsx(
        'w-full rounded-xl border-2 border-gray-400 bg-background px-4 py-[5px] text-primary outline-none focus:border-hoverPrimary',
        className
      )}
      {...rest}
    />
  )
}
