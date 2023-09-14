import { useState, useCallback } from 'react';
import { Child } from './Child';

export const Father = () => {

  const numbers = [ 2, 4, 6, 8, 10 ];
  const [ value, setValue ] = useState( 0 );

  const increment = useCallback(
    ( number ) => {
      setValue( ( value ) => value + number )
    },
    [],
  )
  


  return (
    <div>
      <h1>Father</h1>
      <p> Total: { value } </p>

      <hr />

      {
        numbers.map(( number ) => (
          <Child 
            key={ number }
            number={ number }
            increment={ increment }
          />
        ))
      }
      {/* <Child /> */}
    </div>
  )
}
