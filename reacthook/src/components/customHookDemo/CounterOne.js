import React from 'react'
import useCounter from './hooks/useCounter'

function CounterOne() {
    const [count, incrementCount, decrementCount, resetCount] = useCounter(0)

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    )
}

export default CounterOne
