import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inicio',
  description: 'Página de inicio'
}

export default function HomePage() {
  return (
    <section className='flex h-full w-full items-center justify-center'>
      <h1>Home page</h1>
    </section>
  )
}
