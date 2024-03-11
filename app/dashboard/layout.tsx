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
      <div className='flex h-screen w-full'>
        <div
          className={`flex ${active && styles.parentSidenav}`}
          onClick={() => setActive(false)}></div>
        <SideNav active={active} />
        <main className='w-full flex flex-col px-5 py-3 gap-6'>
          <header className='w-full flex justify-between lg:justify-end items-center bg-white h-16 shadow-lg rounded-lg px-5 text-primary'>
            <button
              className='flex justify-center items-center lg:hidden'
              onClick={() => setActive(!active)}>
              <Bars3Icon className='size-6' />
            </button>
            <div className='flex justify-center items-center gap-2'>
              <p className='text-center text-primary font-semibold text-xs md:text-base'>
                Esteban Alejandro Padilla Padilla
              </p>
              <div className='size-8 md:size-10 bg-gray-300 rounded-full'></div>
            </div>
          </header>
          <section
            className={`bg-white h-screen w-full p-5 rounded-lg shadow-lg overflow-y-auto ${styles.scrollbar}`}>
            {children}
          </section>
        </main>
      </div>
    </>
  )
}
