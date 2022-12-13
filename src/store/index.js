import thunk from 'redux-thunk'
import createDebounce from 'redux-debounced'
import HomeReducer from '../reducers/HomeReducer'
import { createStore, applyMiddleware, compose } from 'redux'

//  init middleware
const middleware = [thunk, createDebounce()]

//  Dev Tools
const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose

//  Create store
const store = createStore(HomeReducer, {}, composeEnhancers(applyMiddleware(...middleware)))

export { store }