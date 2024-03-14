'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChangeEvent } from 'react'
import { useDebouncedCallback } from 'use-debounce'

export default function Filters() {
  const pathname = usePathname()
  return (
    <>
      <SelectItems pathname={pathname} />
      <Search placeholder='Buscar' pathname={pathname} />
    </>
  )
}

function SelectItems({ pathname }: { pathname: string }) {
  const { replace } = useRouter()
  const searchParams = useSearchParams()
  const itemsPerPage = Number(searchParams.get('items')) || 5

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams)
    params.set('items', e.target.value)
    replace(`${pathname}?${params.toString()}`)
  }
  return (
    <div className='flex flex-col items-center justify-center'>
      <label className='mb-2 block text-sm font-medium text-primary'>
        Listar por página
        <select
          id='itemsPerPage'
          name='itemsPerPage'
          className='block w-full cursor-pointer select-none rounded-lg border border-gray-400 bg-background p-2.5 text-sm text-primary outline-none focus:border-indigo-600 focus:ring-indigo-500'
          defaultValue={itemsPerPage}
          onChange={handleChange}>
          <option value='5'>5</option>
          <option value='8'>8</option>
          <option value='10'>10</option>
        </select>
      </label>
    </div>
  )
}

const WAIT_BETWEEN_CHANGE = 300
function Search({
  placeholder,
  pathname
}: {
  placeholder: string
  pathname: string
}) {
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)

    params.set('page', '1')

    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }

    replace(`${pathname}?${params.toString()}`)
  }, WAIT_BETWEEN_CHANGE)

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='relative flex h-full w-full'>
        <label className='flex'>
          <input
            onChange={e => handleSearch(e.target.value)}
            type='text'
            id='search'
            name='search'
            defaultValue={searchParams.get('query')?.toString()}
            className='peer w-full rounded-lg rounded-r-none border border-r-0 border-gray-300 px-3 py-2 text-gray-500 focus:border-indigo-600 focus:outline-none'
            aria-label='Search'
          />
          <span className='flex cursor-pointer items-center justify-center rounded-lg rounded-l-none border border-l-0 border-gray-300 px-3 py-2 text-primary peer-focus:border-indigo-600 peer-focus:text-indigo-700'>
            <MagnifyingGlassIcon className='size-4' />
          </span>
        </label>
      </div>
    </div>
  )
}
