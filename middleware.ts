import { NextRequest, NextResponse } from 'next/server'

const userRoutes = [
  '/dashboard',
  '/dashboard/usuarios',
  '/dashboard/roles',
  '/dashboard/settings',
  '/dashboard/notifications',
  '/dashboard/profile'
]

export default function middleware(req: NextRequest) {
  const token = req.cookies.get('token')
  if (req.nextUrl.pathname === '/' && !token) return
  if (!token) return NextResponse.redirect(new URL('/', req.url))
  if (!req.nextUrl.pathname.startsWith('/dashboard'))
    return NextResponse.redirect(new URL('/dashboard', req.url))
  if (!userRoutes.includes(req.nextUrl.pathname))
    return NextResponse.redirect(new URL('/dashboard', req.url))

  req.headers.set('Authorization', `Bearer ${token}`)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
}
