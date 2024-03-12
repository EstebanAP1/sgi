import NavLinks from '@/app/ui/dashboard/navlinks'
import styles from '@/app/ui/css/dashboard.module.css'
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/outline'
import { logout } from '@/app/lib/actions'

export default function SideNav({ active }: { active: boolean }) {
  return (
    <aside
      className={`flex w-72 flex-col items-center justify-between gap-4 overflow-y-auto bg-white px-5 py-4 shadow-lg transition-all
      ${styles.sidenav}
      ${active && styles.sidenavOpen}`}>
      <NavLinks />
      <form action={logout} className='w-full'>
        <button className='group/navlink relative flex w-full select-none flex-row items-center justify-start gap-2 rounded-lg p-3 text-red-500 outline-none transition hover:bg-red-500/30'>
          <ArrowLeftStartOnRectangleIcon className='size-5 transition group-hover/navlink:scale-110' />
          Cerrar sesión
        </button>
      </form>
    </aside>
  )
}
