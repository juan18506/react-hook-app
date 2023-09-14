import { useTodos } from '../hooks';
import { TodoAdd, TodoList } from './';

export const TodoApp = () => {
  const { todos, todosCount, pendingTodosCount, handleNewTodo, handleRemoveTodo, handleToggleTodo } = useTodos()

  return (
    <>
      <h1>TodoApp { todosCount }, <small>pending: { pendingTodosCount }</small> </h1>
      <hr />

      <div className="row">
        <div className="col col-7">
          <TodoList 
            todos={ todos } 
            onRemoveTodo={ handleRemoveTodo }
            onToggleTodo={ handleToggleTodo }
          />
        </div>

        <div className="col-5">
          <h4>Add TODO</h4>
          <hr />
          <TodoAdd onNewTodo={ handleNewTodo } />
        </div>
      </div>
    </>
  )
}
