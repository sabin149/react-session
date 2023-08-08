// Unit Testing
import { calculateTotal } from 'utils/CalculateTotal';
import { describe, expect, it } from 'vitest';

describe('Calculate Total', () => {
  it('calculates the total sum correctly', () => {
    const numbers = [2, 4, 6, 8];
    const total = calculateTotal(numbers);
    expect(total).toBe(20);
  });
});
