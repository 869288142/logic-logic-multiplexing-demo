import { useState } from 'react';
export default function useCounter (initialCount: number) {
    const [count, setCount] = useState(initialCount);
    const reset = () => setCount(initialCount)
    const increase = () => setCount(prevCount => prevCount + 1)
    const decrease = () => setCount(prevCount => prevCount - 1)
    return {
        count,
        reset,
        increase,
        decrease
    }
}