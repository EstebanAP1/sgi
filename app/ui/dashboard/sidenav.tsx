import Image from 'next/image'
import NavLinks from '@/app/ui/dashboard/navlinks'
import styles from '@/app/ui/css/dashboard.module.css'

export default function SideNav({ active }: { active: boolean }) {
  return (
    <aside
      className={`w-72 bg-white px-5 py-4 flex flex-col gap-4 justify-start items-center shadow-lg transition-all overflow-y-auto
      ${styles.sidenav}
      ${active && styles.sidenavOpen}`}>
      <NavLinks />
    </aside>
  )
}
