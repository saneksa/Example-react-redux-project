import {createStore, applyMiddleware, combineReducers} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import {data} from './reducers/countReduce'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import {routerReducer} from 'react-router-redux'

const rootReducer  = combineReducers({
    routerReducer,
    data

});

export const getStore = function() {
    return createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(promise, thunk)
        )
    );
};
