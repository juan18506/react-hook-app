import { describe, it, expect } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Tests in useCounter', () => {

  it('should return default values', () => {
    const { result } = renderHook( () => useCounter() );
    const { counter, decrement, increment, reset } = result.current;

    expect( counter).toBe( 10 );
    expect( decrement ).toBeTypeOf( 'function' );
    expect( increment ).toBeTypeOf( 'function' );
    expect( reset ).toBeTypeOf( 'function' );
  });

  it('should return 100 as counter value', () => {
    const { result } = renderHook( () => useCounter(100) );
    const { counter } = result.current;

    expect( counter ).toBe( 100 );
  });

  it('should increment counter', () => {
    const { result } = renderHook( () => useCounter(100) );
    const { increment } = result.current;

    act(() => {
      increment();
      increment(2);
    })

    expect( result.current.counter ).toBe( 103 );
  });

  it('should decrement counter', () => {
    const { result } = renderHook( () => useCounter(100) );
    const { decrement } = result.current;

    act(() => {
      decrement();
      decrement(2);
    })

    expect( result.current.counter ).toBe( 97 );
  });

  it('should reset counter', () => {
    const { result } = renderHook( () => useCounter(100) );
    const { increment, reset } = result.current;

    act(() => {
      increment(3);
      increment(2);
      reset();
    })

    expect( result.current.counter ).toBe( 100 );
  });
});
