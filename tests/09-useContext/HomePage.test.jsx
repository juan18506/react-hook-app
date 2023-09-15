import { describe, it, expect, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { HomePage } from '../../src/09-useContext/HomePage';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('Tests in <HomePage />', () => {

  const user = {
    id: 1,
    name: 'Juan',
  };

  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  it('should show component without user', () => {
    render( 
     <UserContext.Provider value={{ user: null, }}>
      <HomePage />
     </UserContext.Provider> 
    );
    
    const preTag = screen.getByLabelText('pre');
    expect( preTag.innerHTML ).toBe( 'null' );
  });

  it('should show component with user', () => {
    render( 
     <UserContext.Provider value={{ user }}>
      <HomePage />
     </UserContext.Provider> 
    );

    const preTag = screen.getByLabelText('pre');
    expect( preTag.innerHTML ).toContain( user.name );
    expect( preTag.innerHTML ).toContain( user.id.toString() );
  });
});
