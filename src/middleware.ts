import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Check if the request is for an admin route
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Allow access to the admin login page
    if (request.nextUrl.pathname === '/admin') {
      return NextResponse.next()
    }

    // Check for a custom auth token in the cookies
    const authToken = request.cookies.get('auth_token')
    
    if (!authToken || authToken.value !== 'admin_authenticated') {
      // Redirect to the admin login page if not authenticated
      return NextResponse.redirect(new URL('/admin', request.url))
    }
  }

  // Allow the request to continue
  return NextResponse.next()
}

// Specify which routes this middleware should run for
export const config = {
  matcher: '/admin/:path*',
}