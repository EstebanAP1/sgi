import LoginForm from '@/app/ui/login/login-form'
import { Metadata } from 'next'
import { cookies } from 'next/headers'
import { permanentRedirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Login | SGI'
}

export default async function Home() {
  'use server'
  const token = cookies().get('token')?.value
  if (token) permanentRedirect('/dashboard')

  return (
    <main className='flex min-h-screen items-start justify-center px-5 lg:items-center'>
      <section className='mt-10 flex flex-col items-center justify-center gap-5 rounded-xl bg-white px-10 py-8 shadow-lg lg:mt-0'>
        <div className='h-28 w-28 rounded-full bg-black'></div>
        <h1 className='mb-5 text-center font-semibold md:text-xl'>
          Sistema de Gestión Interna
        </h1>
        <LoginForm />
      </section>
    </main>
  )
}
