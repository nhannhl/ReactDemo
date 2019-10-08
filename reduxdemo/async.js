const redux = require('redux')
const axios = require('axios')
const thunkMiddleware = require('redux-thunk').default


const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

const FETCH_REQUEST = 'FETCH_REQUEST'
const FETCH_SUCCESS = 'FETCH_SUCCESS'
const FETCH_ERROR = 'FETCH_ERROR'

const initialData = {
    loading: false,
    data: [],
    errors: ''
}

const fetchRequest = () => {
    return {
        type: FETCH_REQUEST
    }
}

const fetchSuccess = (users) => {
    return {
        type: FETCH_SUCCESS,
        payload: users
    }
}

const fetchError = (error) => {
    return {
        type: FETCH_ERROR,
        error: error
    }
}

const reducer = (state = initialData, action) => {
    switch(action.type) {
        case FETCH_REQUEST : 
            return {
                ...state,
                loading: true
            }
        case FETCH_SUCCESS : 
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }
        case FETCH_ERROR : 
            return {
                ...state,
                loading: false,
                data: [],
                error: action.errors
            }
    }
}

const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const users = res.data.map(user => user.id)
                dispatch(fetchSuccess(users))
            })
            .catch(err => {
                dispatch(fetchError(err.message))
            })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
const unsubcribe = store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUsers())
