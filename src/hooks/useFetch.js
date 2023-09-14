import { useState, useEffect } from "react";

export const useFetch = ( url ) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });
  
  useEffect(() => {
    setState({
      ...state,
      isLoading: true,
    });

    const getFetch = async () => {
      const res = await fetch( url );
      const data = await res.json();
      

      setState({
        data,
        isLoading: false,
        hasError: null,
      });
    }

    getFetch();
  }, [ url ]);
  

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  }
}
