const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()


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

const initialCake = {
    numberOfCakes: 10
}

const initialIceCream = {
    numberOfIceCreams: 20
}

// // (previousState, action) => newState
const reducerBuyCake = (state = initialCake, action) => {
    switch(action.type) {
        case BUY_CAKE : 
            return {
                ...state, 
                numberOfCakes: state.numberOfCakes - 1
            }
        default: 
            return state
    }
}

const reducerBuyIceCream = (state = initialIceCream, action) => {
    switch(action.type) {
        case BUY_ICECREAM : 
        return {
            ...state,
            numberOfIceCreams: state.numberOfIceCreams - 1
        }
        default: 
            return state
    }
}
const rootReducers = combineReducers({
    cake: reducerBuyCake,
    icecream: reducerBuyIceCream
})
const store = createStore(rootReducers, applyMiddleware(logger))
console.log('InitialState ', store.getState());
// const unsubcribe = store.subscribe(() => console.log('Update state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyCake())
store.dispatch(buyCake())
console.log('InitialState ', store.getState());
// unsubcribe()
