import { useCounter, useFetch } from '../hooks';
import { LoadingPokemon, Pokemon } from './';

export const MultipleCustomHooks = () => {
  
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }/`);

  return (
    <>
      <h1>MultipleCustomHooks</h1>
      <hr />

      {
        isLoading 
          ? <LoadingPokemon />
          : <Pokemon id={ data.id } name={ data.name } />
      }

      <button 
        className='btn btn-primary'
        disabled={ isLoading }
        onClick={ () => increment() }
      >
        Next Pokemon
      </button>
    </>
  )
}
