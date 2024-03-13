import { NextRequest, NextResponse } from 'next/server'

export default function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value

  if (!token) return NextResponse.redirect(new URL('/', req.url))

  const userRoutes = req.cookies.get('routes')?.value.split(',')
  if (!userRoutes?.includes(req.nextUrl.pathname))
    return NextResponse.redirect(new URL('/dashboard', req.url))

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*']
}
