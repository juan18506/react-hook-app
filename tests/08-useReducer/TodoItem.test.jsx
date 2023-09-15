import { describe, it, expect, afterEach, vi } from 'vitest';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

const onRemoveTodoMock = vi.fn();
const onToggleTodoMock = vi.fn();

describe('Tests in <TodoItem />', () => {
  const todo = {
    id: 1,
    description: 'todo 1',
    done: false,
  };
  
  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });  

  it('should match snapshot', () => {
    const { container } = render( 
      <TodoItem 
        todo={ todo } 
        onRemoveTodo={ onRemoveTodoMock } 
        onToggleTodo={ onToggleTodoMock } 
      /> 
    );

    expect( container ).toMatchSnapshot()
  });

  it('should show default values', () => {
    render( 
      <TodoItem 
        todo={ todo } 
        onRemoveTodo={ onRemoveTodoMock } 
        onToggleTodo={ onToggleTodoMock } 
      /> 
    );

    expect( screen.getByText(todo.description) ).toBeTruthy();
    expect( screen.getByText(todo.description).className ).not.toContain( 'text-decoration-line-through' );
    expect( screen.getByRole('button', { name: 'Delete' }) ).toBeTruthy();
  });

  it('should call onToggleTodo', () => {
    render( 
      <TodoItem 
        todo={ todo } 
        onRemoveTodo={ onRemoveTodoMock } 
        onToggleTodo={ onToggleTodoMock } 
      /> 
    );
    fireEvent.click( screen.getByText(todo.description) );

    expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );
  });

  it('should call onRemoveTodo', () => {
    render( 
      <TodoItem 
        todo={ todo } 
        onRemoveTodo={ onRemoveTodoMock } 
        onToggleTodo={ onToggleTodoMock } 
      /> 
    );
    fireEvent.click( screen.getByRole('button', { name: 'Delete' }) );

    expect( onRemoveTodoMock ).toHaveBeenCalledWith( todo.id );
  });

  it('should add a class if todo is done', () => {
    const todo = {
      id: 1,
      description: 'todo 1',
      done: true,
    };

    render( 
      <TodoItem 
        todo={ todo } 
        onRemoveTodo={ onRemoveTodoMock } 
        onToggleTodo={ onToggleTodoMock } 
      /> 
    );

    expect( screen.getByText(todo.description).className ).toContain( 'text-decoration-line-through' );
  });
});
