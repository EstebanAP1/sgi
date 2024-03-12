import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      className={clsx(
        'select-none rounded-xl bg-primary px-4 py-2 text-white outline-indigo-500 transition-all hover:bg-hoverPrimary',
        className
      )}
      {...rest}>
      {children}
    </button>
  )
}
