import { fetchFilteredUser } from '@/app/lib/data'
import { FilteredUser, User } from '@/app/lib/definitions'
import Filters from '@/app/ui/dashboard/filters'
import UsersTable from '@/app/ui/dashboard/gestion/usuarios/table'
import Pagination from '@/app/ui/dashboard/pagination'
import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Usuarios',
  description: 'Usuarios page'
}

export default async function UsuariosPage({
  searchParams
}: {
  searchParams?: {
    query?: string
    page?: number
    items?: number
  }
}) {
  'use server'

  const query = searchParams?.query || ''
  const itemsPerPage = Number(searchParams?.items) || 5
  const page = Number(searchParams?.page)

  const fetchUsers = (await fetchFilteredUser()) as User[]

  let users = fetchUsers.map(user => {
    return {
      ...user,
      document: `${user.idtype}: ${user.idnumber}`
    }
  }) as FilteredUser[]
  if (query) {
  }
  const totalPages = Math.ceil(users.length / itemsPerPage)
  const currentPage = page > 0 && page <= totalPages ? page : 1

  return (
    <>
      <div className='flex w-full flex-col items-end justify-between gap-2 lg:flex-row'>
        <Filters />
      </div>
      <div className='mt-5 min-w-full rounded-lg bg-background p-2'>
        <UsersTable
          users={users}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />
      </div>
      <div className='mt-5 flex w-full justify-center'>
        <Pagination totalPages={totalPages} />
      </div>
    </>
  )
}
