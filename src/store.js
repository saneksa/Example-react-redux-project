import {createStore, applyMiddleware, combineReducers} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import {data} from './reducers/countReduce'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import {routerReducer} from 'react-router-redux'
import logger from 'redux-logger'
import {routerMiddleware} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory();

const enhancer = composeWithDevTools(applyMiddleware(routerMiddleware(history), promise, thunk, logger)
)
const rootReducer  = combineReducers({
    routerReducer,
    data

});

export const getStore = function() {
    return createStore(
        rootReducer,
        enhancer
    );
};
