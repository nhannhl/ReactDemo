const redux = require('redux')

const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

const buyCake = () => {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

const buyIceCream = () => {
    return {
        type: BUY_ICECREAM,
        info: 'Buy ice cream action'
    }
}

const initialState = {
    numberOfCakes: 10,
    numberOfIceCreams: 20
}

// // (previousState, action) => newState
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE : 
            return {
                ...state, 
                numberOfCakes: state.numberOfCakes - 1
            }
        case BUY_ICECREAM :
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams - 1
            }
        default: 
            return state
    }
}

const store = createStore(reducer)
console.log('InitialState ', store.getState());
// const unsubcribe = store.subscribe(() => console.log('Update state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyCake())
store.dispatch(buyCake())
console.log('InitialState ', store.getState());
// unsubcribe()
