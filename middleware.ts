import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Use environment variable for easier deployment control
  const UNDER_DEVELOPMENT = process.env.UNDER_DEVELOPMENT === 'true';
  
  // Don't redirect if already on under-development page or accessing static assets
  if (
    !UNDER_DEVELOPMENT ||
    request.nextUrl.pathname.startsWith('/under-development') ||
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/api') ||
    request.nextUrl.pathname.includes('.') // For static files like images, css, js
  ) {
    return NextResponse.next();
  }

  // Redirect to under-development page
  return NextResponse.redirect(new URL('/under-development', request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}