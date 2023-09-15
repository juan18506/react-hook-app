import { describe, it, expect, vi, afterEach } from 'vitest';
import { screen, render, fireEvent, cleanup } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';
import { useCounter, useFetch } from '../../src/hooks';

vi.mock( '../../src/hooks/useFetch' );
vi.mock( '../../src/hooks/useCounter' );

describe('Tests in <MultipleCustomHooks />', () => {

  const mockIncrement = vi.fn();

  useCounter.mockReturnValue({ 
    counter: 1, 
    increment: mockIncrement,
  });

  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  it('should show default component', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render( <MultipleCustomHooks /> );
    
    expect( screen.getByText('Loading...') ).toBeTruthy();
    expect( screen.getByText('MultipleCustomHooks') ).toBeTruthy();

    const nextButton = screen.getByRole('button', { name: 'Next Pokemon' });
    expect( nextButton.disabled ).toBeTruthy();
  });

  it('should show a pokemon', () => {
    useFetch.mockReturnValue({
      data: { id: 1, name: 'Bulbasaur' },
      isLoading: false,
      hasError: null,
    });

    render( <MultipleCustomHooks /> );

    expect( screen.getByText('Bulbasaur') ).toBeTruthy();
    expect( screen.getByText('1') ).toBeTruthy();

    const nextButton = screen.getByRole('button', { name: 'Next Pokemon' });
    expect( nextButton.disabled ).toBeFalsy();
  });

  it('should call increment function', () => {
    useFetch.mockReturnValue({
      data: { id: 1, name: 'Bulbasaur' },
      isLoading: false,
      hasError: null,
    });

    render( <MultipleCustomHooks /> );

    const nextButton = screen.getByRole('button', { name: 'Next Pokemon' });
    fireEvent.click( nextButton );

    expect( mockIncrement ).toHaveBeenCalled()
  });
});
