import { NextRequest, NextResponse } from 'next/server'

export default function middleware(req: NextRequest) {
  const token = req.cookies.get('token')

  if (req.nextUrl.pathname === '/' && !token) return NextResponse.next()

  if (!token) return NextResponse.redirect(new URL('/', req.url))

  if (!req.nextUrl.pathname.startsWith('/dashboard'))
    return NextResponse.redirect(new URL('/dashboard', req.url))

  const userRoutes = req.cookies.get('routes')?.value.split(',')
  if (!userRoutes?.includes(req.nextUrl.pathname))
    return NextResponse.redirect(new URL('/dashboard', req.url))

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)']
}
