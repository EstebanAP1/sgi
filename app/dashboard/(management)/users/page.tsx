import { fetchFilteredUser } from '@/app/lib/data'
import { FilteredUser, User } from '@/app/lib/definitions'
import Filters from '@/app/ui/dashboard/filters'
import UsersTable from '@/app/ui/dashboard/management/users/table'
import Pagination from '@/app/ui/dashboard/pagination'
import { Metadata } from 'next'

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

  const users = fetchUsers.map(user => {
    const { idtype, idnumber, name, email, created_at } = user
    return {
      document: `${idtype} ${idnumber}`,
      name,
      email,
      created_at
    }
  })
  const filteredUsers = users.filter(user => {
    const sw = Object.values(user).map(data =>
      data.toString().toLowerCase().includes(query.toLowerCase())
    )
    if (!sw.includes(true)) return
    return user
  }) as FilteredUser[]
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)
  const currentPage = page > 0 && page <= totalPages ? page : 1

  return (
    <>
      <div className='flex w-full flex-col items-center justify-between gap-2 lg:flex-row lg:items-end'>
        <Filters />
      </div>
      <div className='mt-5 min-w-full rounded-lg bg-background p-2'>
        <UsersTable
          users={filteredUsers}
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
