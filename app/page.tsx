import LoginForm from '@app/ui/login/login-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login'
}

export default function Home() {
  return (
    <main className='flex min-h-screen items-start justify-center px-5 lg:items-center'>
      <section className='mt-10 flex flex-col items-center justify-center gap-5 rounded-xl bg-white px-10 py-8 shadow-lg lg:mt-0'>
        <div className='h-28 w-28 rounded-full bg-black'></div>
        <h1 className='mb-5 text-center font-semibold md:text-2xl'>
          Sistema de Gestión Interna
        </h1>
        <LoginForm />
      </section>
    </main>
  )
}
