import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    post: {},
    errorMsg: ''
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS' : 
            return {
                loading: false,
                post: action.payload,
                errorMsg: ''
            }
        case 'FETCH_ERROR' : 
            return {
                loading: false,
                post: action.payload,
                errorMsg: action.err
            }    
        default : 
            return state
    }
    
}

function DataFetchingTwo() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => dispatch({type: 'FETCH_SUCCESS', payload: response.data}))
            .catch(error =>dispatch({type: 'FETCH_ERROR', payload: {}, err: error.message}))
    }, [])

    return (
        <div>
            {state.loading ? 'Loading' : state.post.title}
            {state.errorMsg ? state.errorMsg : null}
        </div>
    )
}

export default DataFetchingTwo
