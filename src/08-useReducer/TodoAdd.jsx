import PropTypes from 'prop-types';
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {
  const { formState, handleInputChange, handleResetForm } = useForm({
    description: '',
  });
  
  const { description } = formState;
  
  const handleFormSubmit = ( event ) => {
    event.preventDefault();
    if ( description.length <= 1 ) return;

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    }

    onNewTodo( newTodo );
    handleResetForm()
  }

  return (
    <form onSubmit={ handleFormSubmit }>
      <input 
        type="text" 
        placeholder="description"
        name="description"
        className="form-control"
        value={ description }
        onChange={ handleInputChange }
      />

      <button 
        type="submit"
        className="btn btn-outline-primary mt-1"
      >
        Add
      </button>
    </form>
  )
}

TodoAdd.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
}