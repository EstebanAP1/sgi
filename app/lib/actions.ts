import z from 'zod'

export const loginSchema = z.object({
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
}

const userRoutes = ['/dashboard', '/dashboard/usuarios', '/dashboard/roles']

export async function authenticate(prevState: State, formData: FormData) {
  try {
    const validation = loginSchema.safeParse(Object.fromEntries(formData))
    if (!validation.success)
      return { errors: validation.error.flatten().fieldErrors, message: null }

    // TODO: Enviar credenciales al endpoint.

    const token = '1234'
    const routesString = userRoutes.join(',')

    document.cookie = `token=${token};samesite`
    document.cookie = `routes=${routesString};samesite`

    return { message: 'Success!' }
  } catch (error) {
    // TODO: Aquí van error logs.
    return { message: 'Database error: Failed to log in!' }
  }
}
