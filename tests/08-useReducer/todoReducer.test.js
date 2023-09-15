import { describe, it, expect } from 'vitest';
import { todoReducer } from '../../src/08-useReducer/todoReducer';

describe('Tests in todoReducer', () => {

  const initialState = [{
    id: 1,
    description: 'Demo Todo',
    done: false,
  }];

  it('should return initial state', () => {
    const newState = todoReducer( initialState, [] );
    expect( newState ).toBe( initialState );
  });

  it('should add todo', () => {
    const action = {
      type: '[TODO] Add Todo',
      payload: {
        id: 2,
        description: 'New Todo #2',
        done: false,
      }
    }

    const newState = todoReducer( initialState, action );
    expect( newState.length ).toBe( initialState.length + 1 );
    expect( newState ).toContain( action.payload );
  });

  it('should Remove todo', () => {
    const action = {
      type: '[TODO] Remove Todo',
      payload: 1,
    }
    
    const newState = todoReducer( initialState, action );
    
    expect( newState.length ).toBe( 0 );
  });

  it('should Toggle todo', () => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: 1,
    }

    const newState = todoReducer( initialState, action );
    expect( newState[0].done ).toBe( true );

    const newState2 = todoReducer( newState, action );
    expect( newState2[0].done ).toBe( false );
  });

  it('should not Toggle if payload is invalid', () => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: 5,
    }

    const newState = todoReducer( initialState, action );
    expect( newState ).toEqual( initialState );
  });
});
