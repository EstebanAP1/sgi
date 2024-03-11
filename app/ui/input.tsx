import clsx from 'clsx'

export function Input({
  className,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={clsx(
        'w-full px-4 py-[5px] bg-background rounded-xl outline-none border-2 border-gray-400 text-primary focus:border-hoverPrimary',
        className
      )}
      {...rest}
    />
  )
}
