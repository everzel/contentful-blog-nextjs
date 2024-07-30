import { NextRequest, NextResponse } from 'next/server';
import setPathMiddleware from '@/middlewares/setPathMiddleware/setPathMiddleware';

export function middleware(request: NextRequest): NextResponse {
  return setPathMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
