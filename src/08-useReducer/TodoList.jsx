import PropTypes from 'prop-types';
import { TodoItem } from './'

export const TodoList = ({ todos = [], onRemoveTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
    {
      todos.map(( todo ) => (
        <TodoItem 
          key={ todo.id } 
          todo={ todo } 
          onRemoveTodo={ onRemoveTodo }
          onToggleTodo={ onToggleTodo }
        />
      ))
    }
  </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
}