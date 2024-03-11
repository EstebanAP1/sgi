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
  // {
  //   title: 'Administración',
  //   url: false,
  //   icon: 'ExampleIcon',
  //   submodules: [
  //     {
  //       title: 'Finazas',
  //       url: ['/dashboard/finanzas'],
  //       icon: 'ChartBarIcon'
  //     },
  //     {
  //       title: 'Example',
  //       url: ['/dashboard/example'],
  //       icon: 'DocumentTextIcon'
  //     }
  //   ]
  // }
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
    <nav className='flex flex-col justify-center items-start w-full gap-[3px]'>
      {links.map(link => {
        const principalUrl = link.url[0]
        const Icon = icons[link.icon as keyof typeof icons]
        return (
          <Link
            key={principalUrl}
            href={principalUrl}
            className={`group/navlink relative flex flex-row justify-start items-center w-full p-3 gap-2 transition-all rounded-lg select-none
            ${
              link.url.includes(pathname)
                ? `bg-primary/25 text-indigo-500 font-semibold ${styles.activeLink}`
                : 'text-primary hover:bg-background'
            }`}>
            <Icon className='w-5 group-hover/navlink:scale-110 transition-all' />
            {link.title}
          </Link>
        )
      })}
    </nav>
  )
}
