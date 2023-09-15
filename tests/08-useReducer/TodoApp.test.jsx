import { describe, it, expect, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer';
import { useTodos } from '../../src/hooks';

vi.mock( '../../src/hooks/useTodos' );

describe('Tests in <TodoApp />', () => {

  useTodos.mockReturnValue({
    todos: [
      { id: 1, description: 'Todo #1', done: false },
      { id: 2, description: 'Todo #2', done: true },
    ],
    todosCount: 2,
    pendingTodosCount: 1,
    handleRemoveTodo: vi.fn(),
    handleToggleTodo: vi.fn(),
    handleNewTodo: vi.fn(),
  })

  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  it('should show component correctly', () => {
    render( <TodoApp /> );
    
    expect( screen.getByText('Todo #1') ).toBeTruthy();
    expect( screen.getByText('Todo #2') ).toBeTruthy();
    expect( screen.getByRole('textbox') ).toBeTruthy();
  });
});
