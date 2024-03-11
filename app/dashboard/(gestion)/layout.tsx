'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function LayoutUsuarios() {
  const name = usePathname().split('/').pop()
  return (
    <header className='flex w-full h-10 items-center justify-between'>
      <h1 className='text-primary md:text-2xl font-semibold'>Gestión {name}</h1>
      <nav className='flex justify-end items-center gap-2 md:gap-5'>
        <Link
          href='/dashboard/usuarios'
          className={`px-2 py-1 rounded-lg text-center font-medium  md:w-24
            ${
              name === 'usuarios'
                ? 'bg-primary/40 text-indigo-500'
                : 'bg-gray-200 text-primary'
            }`}>
          Usuarios
        </Link>
        <Link
          href='/dashboard/roles'
          className={`px-2 py-1 rounded-lg text-center font-medium  md:w-24
          ${
            name === 'roles'
              ? 'bg-primary/40 text-indigo-500'
              : 'bg-gray-200 text-primary'
          }`}>
          Roles
        </Link>
      </nav>
    </header>
  )
}
