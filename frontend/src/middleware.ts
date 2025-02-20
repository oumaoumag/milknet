import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

// Define allowed paths for each role
const roleRoutes = {
  consumer: ['/consumer', '/marketplace', '/orders'],
  farmer: ['/farmer', '/products', '/analytics'],
  distributor: ['/distributor', '/logistics', '/inventory'],
  public: ['/', '/login', '/register', '/about', '/contact']
}

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Allow public routes without authentication
  if (roleRoutes.public.some(route => path.startsWith(route))) {
    return NextResponse.next()
  }

  // Get user token from cookie
  const token = request.cookies.get('auth-token')?.value

  // Redirect to login if no token
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  try {
    // Verify token and extract role
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET!)
    )
    
    const userRole = payload.role as string

    // Check if user has access to the requested path
    if (!hasAccess(userRole, path)) {
      return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()
  } catch (error) {
    // Token verification failed
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

function hasAccess(role: string, path: string): boolean {
  const allowedPaths = roleRoutes[role as keyof typeof roleRoutes] || []
  return allowedPaths.some(allowedPath => path.startsWith(allowedPath))
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}