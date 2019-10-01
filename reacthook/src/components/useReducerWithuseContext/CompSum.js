import React, { useReducer } from 'react'
import CompA from './CompA'
import CompB from './CompB'
import CompD from './CompD'
import { initialState, reducer } from './Counter'
import CounterContext from './CounterContext'

function CompSum() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <CounterContext.Provider value={{counter: count, counterDispatch: dispatch}}>
            <div>
                <h3>CounterOne {count}</h3>
                <CompA />
                <CompB />
                <CompD />
            </div>
        </CounterContext.Provider>
    )
}

export default CompSum
