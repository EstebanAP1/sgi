import { FilteredUser } from '@/app/lib/definitions'
import { PencilIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default async function CertificadosTable({
  users,
  currentPage,
  itemsPerPage
}: {
  users: FilteredUser[]
  currentPage: number
  itemsPerPage: number
}) {
  let shownUsers = users
  if (currentPage === 1) {
    shownUsers = users.slice(currentPage - 1, itemsPerPage)
  }
  return (
    <>
      <div className='lg:hidden'>
        {shownUsers?.map((user, index) => {
          if (
            index < (currentPage - 1) * itemsPerPage ||
            index >= currentPage * itemsPerPage
          )
            return
          return (
            <div key={index} className='mb-2 w-full rounded-lg bg-white p-4'>
              <div className='flex items-center justify-between border-b pb-2'>
                <div className='flex flex-col items-start justify-center'>
                  <p className='font-medium'>
                    {user.name}{' '}
                    <span className='text-sm font-normal text-primary max-md:hidden'>
                      - {user.document}
                    </span>
                  </p>
                  <p className='text-sm font-medium text-primary md:hidden'>
                    {user.document}
                  </p>
                </div>
                <div className='flex items-center justify-center gap-2'>
                  <button className='rounded-lg bg-green-500/80 p-2 text-primary transition hover:scale-110'>
                    <ShieldCheckIcon className='size-5' />
                  </button>
                  <button className='rounded-lg bg-primary/80 p-2 text-primary transition hover:scale-110'>
                    <PencilIcon className='size-5' />
                  </button>
                </div>
              </div>
              <div className='flex items-center justify-between pt-2'>
                <div className='flex flex-col items-start justify-center'>
                  <p className='font-medium'>{user.email}</p>
                  <p className='text-sm text-primary'>{user.created_at}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <table className='hidden min-w-full text-primary lg:table'>
        <thead className='rounded-lg text-left font-normal'>
          <tr className='text-center'>
            <th scope='col' className='p-3'>
              Ddocumento
            </th>
            <th scope='col' className='p-3'>
              Nombre
            </th>
            <th scope='col' className='p-3'>
              Email
            </th>
            <th scope='col' className='p-3'>
              Fecha
            </th>
            <th scope='col' className='p-3'>
              Opciones
            </th>
          </tr>
        </thead>
        <tbody className='bg-white'>
          {shownUsers?.map((user, index) => {
            if (
              index < (currentPage - 1) * itemsPerPage ||
              index >= currentPage * itemsPerPage
            )
              return
            return (
              <tr
                key={index}
                className='w-full border-b py-3 text-center text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg'>
                <td className='px-3 py-4'>{user.document}</td>
                <td className='px-3 py-4'>{user.name}</td>
                <td className='px-3 py-4'>{user.email}</td>
                <td className='px-3 py-4'>{user.created_at}</td>
                <td className='flex items-center justify-center gap-2 px-3 py-2'>
                  <button className='rounded-lg bg-green-500/80 p-2 text-primary transition hover:scale-110'>
                    <ShieldCheckIcon className='size-4' />
                  </button>
                  <button className='rounded-lg bg-primary/80 p-2 text-primary transition hover:scale-110'>
                    <PencilIcon className='size-4' />
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
