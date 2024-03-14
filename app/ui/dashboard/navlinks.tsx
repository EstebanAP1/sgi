'use client'

import {
  ChartBarIcon,
  DocumentTextIcon,
  HomeIcon,
  UserIcon
} from '@heroicons/react/24/solid'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '@/app/ui/css/dashboard.module.css'
import { getCookie } from 'cookies-next'
import { Module } from '@/app/lib/definitions'
import { useEffect, useState } from 'react'

const icons = {
  HomeIcon: HomeIcon,
  DocumentTextIcon: DocumentTextIcon,
  UserIcon: UserIcon,
  ChartBarIcon: ChartBarIcon
}

export default function NavLinks() {
  const pathname = usePathname()
  const [modules, setModules] = useState([] as Module[])

  useEffect(() => {
    const cookies = getCookie('modules')?.toString()
    if (!cookies) return
    setModules(JSON.parse(cookies))
  }, [])

  return (
    <nav className='flex w-full flex-col items-start justify-center gap-[3px]'>
      {modules?.map(module => {
        const principalUrl = module.url[0]
        const Icon = icons[module.icon as keyof typeof icons]
        return (
          <Link
            key={principalUrl}
            href={principalUrl}
            className={`group/navlink relative flex w-full select-none flex-row items-center justify-start gap-2 rounded-lg p-3 transition
            ${
              module.url.includes(pathname)
                ? `bg-primary/25 font-semibold text-indigo-500 ${styles.activeModule}`
                : 'text-primary hover:bg-background'
            }`}>
            <Icon className='size-5 transition group-hover/navlink:scale-110' />
            {module.title}
          </Link>
        )
      })}
    </nav>
  )
}
