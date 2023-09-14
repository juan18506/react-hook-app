import PropTypes from 'prop-types';

export const TodoItem = ({ todo, onRemoveTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span 
        className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : '' }`}
        onClick={ () => onToggleTodo( todo.id ) }
      >
        { todo.description }
      </span>

      <button 
        className="btn btn-danger" 
        onClick={ () => onRemoveTodo( todo.id ) }
      >
        Delete
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
}