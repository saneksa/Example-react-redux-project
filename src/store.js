import {
  createStore, applyMiddleware, combineReducers, compose
} from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import countReducer from './store/CountStore/reducer';

export const history = createBrowserHistory();

const enhancer = compose(
  applyMiddleware(routerMiddleware(history), promise, thunk, logger),
  devToolsEnhancer()
);
const rootReducer = combineReducers({
  router: connectRouter(history),
  countReducer
});

export const getStore = () => createStore(rootReducer, enhancer);
