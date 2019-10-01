import React, { useContext } from 'react'
import CounterContext from './CounterContext'

function CompA() {
    const counterContext = useContext(CounterContext)
    return (
        <div>
            <h4>CompA: {counterContext.counter}</h4>
            <button onClick={() => counterContext.counterDispatch('increment')}>Increment</button>
            <button onClick={() => counterContext.counterDispatch('decrement')}>Decrement</button>
            <button onClick={() => counterContext.counterDispatch('reset')}>Reset</button>
        </div>
    )
}

export default CompA