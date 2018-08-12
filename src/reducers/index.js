import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { combineReducers } from 'redux';
import github from './github';


const rootReducer = combineReducers({
    github,
})

export default function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
        )
    )
}
// this way we can acess the store where was necessary
//  store = configureStore();