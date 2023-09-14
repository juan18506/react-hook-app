import { useRef } from "react";
import { useLayoutEffect } from "react"

export const Pokemon = ({ id, name }) => {

  const pReg = useRef();

  useLayoutEffect(() => {
    console.log( pReg.current.getBoundingClientRect() );
  }, [name]);

  return (
    <blockquote 
      className="blockquote text-end"
      style={{ display: 'flex' }}
      ref={ pReg }
    >
      <p className="mb-1">{ name }</p>
      <footer className="blockquote-footer">{ id }</footer>
    </blockquote>
  )
}
