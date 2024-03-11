import LoginForm from '@app/ui/login/login-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login'
}

export default function Home() {
  return (
    <main className='flex min-h-screen items-start justify-center lg:items-center px-5'>
      <section className='flex flex-col justify-center items-center bg-white px-10 py-8 mt-10 gap-5 rounded-xl shadow-lg lg:mt-0'>
        <div className='h-28 w-28 bg-black rounded-full'></div>
        <h1 className='md:text-2xl font-semibold text-center mb-5'>
          Sistema de Gestión Interna
        </h1>
        <LoginForm />
      </section>
    </main>
  )
}
