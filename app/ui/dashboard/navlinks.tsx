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

const links = [
  {
    title: 'Inicio',
    url: ['/dashboard'],
    icon: 'HomeIcon',
    submodules: false
  },
  {
    title: 'Gestión',
    url: ['/dashboard/usuarios', '/dashboard/roles'],
    icon: 'UserIcon',
    submodules: false
  }
]

const icons = {
  HomeIcon: HomeIcon,
  DocumentTextIcon: DocumentTextIcon,
  UserIcon: UserIcon,
  ChartBarIcon: ChartBarIcon
}

export default function NavLinks() {
  const pathname = usePathname()
  return (
    <nav className='flex w-full flex-col items-start justify-center gap-[3px]'>
      {links.map(link => {
        const principalUrl = link.url[0]
        const Icon = icons[link.icon as keyof typeof icons]
        return (
          <Link
            key={principalUrl}
            href={principalUrl}
            className={`group/navlink relative flex w-full select-none flex-row items-center justify-start gap-2 rounded-lg p-3 transition
            ${
              link.url.includes(pathname)
                ? `bg-primary/25 font-semibold text-indigo-500 ${styles.activeLink}`
                : 'text-primary hover:bg-background'
            }`}>
            <Icon className='size-5 transition group-hover/navlink:scale-110' />
            {link.title}
          </Link>
        )
      })}
    </nav>
  )
}
