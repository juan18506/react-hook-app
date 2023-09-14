import { memo } from 'react';


export const Small = memo(({ value }) => {
  console.log('me volvi a generar');

  return (
    <small>{ value }</small>
  )
})
