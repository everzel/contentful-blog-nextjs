import { describe, expect, it } from 'vitest';
import { formatDate } from '@/utils/formatDate';

describe('formatDate', () => {
  it('should return formatted date', () => {
    expect(formatDate('2024-07-26')).toBe('July 26, 2024');
  });
});
