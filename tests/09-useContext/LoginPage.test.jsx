import { describe, it, expect, afterEach, vi } from 'vitest';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import { LoginPage } from '../../src/09-useContext/LoginPage';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('Tests in <LoginPage />', () => {

  const contextTestValues = {
    user: null,
    setUser: vi.fn(),
  }

  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  it('should show component without user', () => {
    render( 
      <UserContext.Provider value={ contextTestValues }>
       <LoginPage />
      </UserContext.Provider> 
    );
    
    const preTag = screen.getByLabelText('pre');
    expect( preTag.innerHTML ).toBe( 'null' );
  });

  it('should call setuser on button click', () => {
    render( 
      <UserContext.Provider value={ contextTestValues }>
       <LoginPage />
      </UserContext.Provider> 
    );
    
    const button = screen.getByRole('button');
    fireEvent.click( button );

    expect( contextTestValues.setUser ).toHaveBeenCalledWith({
      id: 123, 
      name: 'Juan', 
      email: 'juan@gmail.com' 
    });
  });
});
