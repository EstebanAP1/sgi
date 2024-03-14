'use client'

import React, { useEffect, useState } from 'react'
import SideNav from '@/app/ui/dashboard/sidenav'
import { Bars3Icon } from '@heroicons/react/24/outline'
import styles from '@/app/ui/css/dashboard.module.css'

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (innerWidth < 1024) {
        setActive(active)
      } else {
        setActive(false)
      }
    }
    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [active])

  return (
    <>
      <div className='flex h-dvh w-full'>
        <div
          className={`flex ${active && styles.parentSidenav}`}
          onClick={() => setActive(false)}></div>
        <SideNav active={active} />
        <main className='flex w-full flex-col gap-6 px-5 py-3'>
          <header className='flex h-16 w-full items-center justify-between rounded-lg bg-white px-5 text-primary shadow-lg lg:justify-end'>
            <button
              className='flex items-center justify-center lg:hidden'
              onClick={() => setActive(!active)}
              aria-label='Switch sidenav'>
              <Bars3Icon className='size-6' />
            </button>
            <div className='flex items-center justify-center gap-2'>
              <p className='text-center text-xs font-semibold text-primary md:text-base'>
                Esteban Alejandro Padilla Padilla
              </p>
              <div className='size-8 rounded-full bg-gray-300 md:size-10'></div>
            </div>
          </header>
          <section
            className={`h-full w-full overflow-y-auto rounded-lg bg-white p-5 shadow-lg ${styles.scrollbar}`}>
            {children}
          </section>
        </main>
      </div>
    </>
  )
}
