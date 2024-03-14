'use client'

import { PlusIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Suspense } from 'react'

export default function LayoutUsuarios({
  children
}: {
  children: React.ReactNode
}) {
  const name = usePathname().split('/').pop()
  return (
    <>
      <header className='flex h-10 w-full items-center justify-between'>
        <div className='flex flex-col items-start gap-2 max-md:mt-8 md:flex-row'>
          <h1 className='font-semibold text-primary md:text-2xl'>
            Gestión {name === 'users' ? 'de Usuarios' : 'de Roles'}
          </h1>
          <Link
            href={`/dashboard/${name}/create`}
            className='flex items-center justify-center rounded-lg bg-primary p-2 shadow-lg transition hover:scale-110 hover:bg-hoverPrimary'
            aria-label={`Create a new ${name === 'users' ? 'user' : 'rol'}`}>
            <PlusIcon className='size-5 text-white' />
          </Link>
        </div>
        <nav className='flex items-center justify-end gap-2 md:gap-5'>
          <Link
            href='/dashboard/users'
            className={`select-none rounded-lg px-2 py-1 text-center  font-medium transition hover:scale-105 md:w-24
            ${
              name === 'users'
                ? 'bg-primary/40 text-indigo-500'
                : 'bg-gray-200 text-primary'
            }`}
            aria-label='Go to users management'>
            Usuarios
          </Link>
          <Link
            href='/dashboard/roles'
            className={`select-none rounded-lg px-2 py-1 text-center  font-medium transition hover:scale-105 md:w-24
          ${
            name === 'roles'
              ? 'bg-primary/40 text-indigo-500'
              : 'bg-gray-200 text-primary'
          }`}
            aria-label='Go to roles management'>
            Roles
          </Link>
        </nav>
      </header>
      <main className='mt-5 flex w-full flex-col items-center'>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </main>
    </>
  )
}
