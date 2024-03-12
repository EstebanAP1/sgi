import Image from 'next/image'
import NavLinks from '@/app/ui/dashboard/navlinks'
import styles from '@/app/ui/css/dashboard.module.css'

export default function SideNav({ active }: { active: boolean }) {
  return (
    <aside
      className={`flex w-72 flex-col items-center justify-start gap-4 overflow-y-auto bg-white px-5 py-4 shadow-lg transition-all
      ${styles.sidenav}
      ${active && styles.sidenavOpen}`}>
      <NavLinks />
    </aside>
  )
}
