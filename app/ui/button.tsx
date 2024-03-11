import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      className={clsx(
        'px-4 py-2 bg-primary text-white rounded-xl hover:bg-hoverPrimary transition-all select-none',
        className
      )}
      {...rest}>
      {children}
    </button>
  )
}
