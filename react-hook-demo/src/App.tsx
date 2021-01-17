import { useEffect} from 'react';
import useCounter from './use/useCounter';
import './App.css';

function Counter({initialCount = 0}: { initialCount: number } ) {
  const { count, reset, decrease, increase }  = useCounter(initialCount)
  
  useEffect(() => {
    console.log('count changed!', count)
  }, [count])
  
  return (
    <>
      Count: {count}
      <button onClick={reset}>Reset</button>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </>
  );
}

export default Counter;
