import { describe, expect, it } from 'vitest';
import { NextRequest } from 'next/server';
import setPathMiddleware from '@/middlewares/setPathMiddleware';

describe('setPathMiddleware', () => {
  it('should set path', () => {
    const mockRequest = {
      headers: new Headers(),
      nextUrl: {
        pathname: '/test-path',
      },
    } as NextRequest;

    const actualResult = setPathMiddleware(mockRequest);

    expect(actualResult.headers.get('x-current-path')).toBe('/test-path');
  });
});
