import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Roles',
  description: 'Roles page'
}

export default function RolesPage() {
  return (
    <section className='flex h-full w-full items-center justify-center'>
      <h1>Roles page</h1>
    </section>
  )
}
