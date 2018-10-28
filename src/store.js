import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import countReducer from './store/CountStore/reducer';

export const history = createHistory();

const enhancer = composeWithDevTools(
  applyMiddleware(routerMiddleware(history), promise, thunk, logger)
);
const rootReducer = combineReducers({
  routerReducer,
  countReducer
});

export const getStore = () => createStore(rootReducer, enhancer);
