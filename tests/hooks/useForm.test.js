import { describe, it, expect } from 'vitest';
import { act ,renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('Tests in useForm', () => {
  const initialForm = {
    name: 'juan',
    email: 'juan@gmail.com',
  }

  it('should return default values', () => {
    const { result } = renderHook( () => useForm(initialForm) );
    expect( result.current ).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      handleInputChange: expect.any( Function ),
      handleResetForm: expect.any( Function ),
    });
  });

  it('should change form name', () => {
    const newName = 'pedro';
    const { result } = renderHook( () => useForm(initialForm) );
    const { handleInputChange } = result.current;

    act(() => {
      handleInputChange({ target: { name: 'name', value: newName } });
    });

    expect( result.current.name ).toBe( newName );
    expect( result.current.formState.name ).toBe( newName );
  });

  it('should reset form', () => {
    const newName = 'pedro';
    const { result } = renderHook( () => useForm(initialForm) );
    const { handleInputChange, handleResetForm } = result.current;

    act(() => {
      handleInputChange({ target: { name: 'name', value: newName } });
      handleResetForm();
    });

    expect( result.current.name ).toBe( initialForm.name );
    expect( result.current.formState.name ).toBe( initialForm.name );
  });
});
