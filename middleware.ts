import { NextRequest, NextResponse } from 'next/server'
import { Module } from '@/app/lib/definitions'

export default function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value

  if (!token) return NextResponse.redirect(new URL('/', req.url))

  const modules = req.cookies.get('modules')?.value
  if (!modules) return NextResponse.redirect(new URL('/', req.url))
  const userRoutes = JSON.parse(modules)
    .map((module: Module) => module.url)
    .flat()

  if (!userRoutes?.includes(req.nextUrl.pathname))
    return NextResponse.redirect(new URL('/dashboard', req.url))

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*']
}
