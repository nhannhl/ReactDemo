import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 9
}
const reducer = (state, action) => {
    switch(action.type) {
        case 'increment' :
            return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrement' :
            return {...state, firstCounter: state.firstCounter - action.value}
        case 'reset' :
            return {...state, firstCounter: initialState.firstCounter}
        case 'second' :
            return {...state, secondCounter: state.secondCounter + 1}
        default :
            return state
    }
}

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h3>{count.firstCounter}</h3>
            <h3>{count.secondCounter}</h3>
            <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment 1</button>
            <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement 1</button>
            <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment 5</button>
            <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement 5</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            <button onClick={() => dispatch({type: 'second'})}>Increment seconCouter</button>
        </div>
    )
}

export default CounterTwo
