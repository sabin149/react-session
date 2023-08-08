// Integration Testing
import { render, fireEvent } from '@testing-library/react';
import Counter from '../Counter';
import { describe, expect, it } from 'vitest';

describe('Counter', () => {
  it('increments and decrements count correctly', () => {
    const { getByText, getByTestId } = render(<Counter />);

    const incrementButton = getByText('Increment');
    const decrementButton = getByText('Decrement');
    const countDisplay = getByTestId('count-display');

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);

    expect(countDisplay.textContent).toBe('Count: 1');
  });
});
