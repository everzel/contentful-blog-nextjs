import { NextRequest, NextResponse } from 'next/server';

export default function setPathMiddleware(request: NextRequest) {
  const headers = new Headers(request.headers);

  headers.set('x-current-path', request.nextUrl.pathname);

  return NextResponse.next({ headers });
}
