import { describe, it, expect, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { MainApp } from '../../src/09-useContext/MainApp';
import { MemoryRouter } from 'react-router-dom';

describe('Tests in <MainApp />', () => {

  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  it('should show HomePage', () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    expect( screen.getByText('HomePage') ).toBeTruthy();
  });

  it('should show LoginPage', () => {
    render(
      <MemoryRouter initialEntries={ ['/login'] }>
        <MainApp />
      </MemoryRouter>
    );

    expect( screen.getByText('LoginPage') ).toBeTruthy();
  });

  it('should show AboutPage', () => {
    render(
      <MemoryRouter initialEntries={ ['/about'] }>
        <MainApp />
      </MemoryRouter>
    );

    expect( screen.getByText('AboutPage') ).toBeTruthy();
  });
});
