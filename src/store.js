import {createStore, applyMiddleware, combineReducers} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import {data} from './reducer/countReduce'
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
