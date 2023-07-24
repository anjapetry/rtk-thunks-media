import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

export function useThunk(thunk) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
  
    const runThunk = useCallback((arg) => { // useCallback to memoize the function and prevent unnecessary re-renders
      setIsLoading(true); // set loading to true before dispatching the thunk
      dispatch(thunk(arg)) // dispatch the thunk with the argument passed to the hook
        .unwrap() // unwrap the returned promise to get the result/error of the thunk action
        .catch((err) => setError(err)) // catch any errors and set the error state 
        .finally(() => setIsLoading(false)); // set loading to false after the thunk is done executing
    }, [dispatch, thunk]);
  
  
    return [runThunk, isLoading, error];
  }