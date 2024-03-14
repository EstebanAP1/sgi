'use server'

import z from 'zod'
import { cookies } from 'next/headers'
import { permanentRedirect, redirect } from 'next/navigation'

const loginSchema = z.object({
  username: z
    .string({
      required_error: 'El necesario ingresar el usuario.'
    })
    .min(8, { message: 'El usuario debe tener mínimo 8 caracteres.' }),
  password: z
    .string({ required_error: 'Es necesario ingresar la contraseña.' })
    .min(8, { message: 'La contraseña debe tener al menos 8 caracteres.' })
})

type State = {
  errores?: {
    username?: string[]
    password?: string[]
  }
  message?: string | null
  success?: boolean | null
}

const userRoutes = ['/dashboard', '/dashboard/users', '/dashboard/roles']

export async function authenticate(prevState: State, formData: FormData) {
  try {
    const validation = loginSchema.safeParse(Object.fromEntries(formData))
    if (!validation.success)
      return {
        errors: validation.error.flatten().fieldErrors,
        message: null,
        success: false
      }

    // TODO: Send credentials to endpoint

    const token = '1234'
    const routesString = userRoutes.join(',')

    cookies().set('token', token)
    cookies().set('routes', routesString)
  } catch (error) {
    // TODO: Send error logs
    return { message: 'Database error: Failed to log in!' }
  }
  redirect('/dashboard')
}

export async function logout() {
  try {
    // TODO: Logout with endpoint
    cookies().delete('token')
    cookies().delete('routes')
  } catch (error) {
    // TODO: Error logs
    return { message: 'Database error: Failed to log out!' }
  }
  permanentRedirect('/')
}
