import React from 'react';
import {Route} from 'react-router-dom'
import {Provider} from 'react-redux' 
import {ConnectedRouter} from 'react-router-redux'
import './index.css';
import {getStore} from "./store";
import {render} from 'react-dom'
import {history} from './store'

import {ConnectedApp} from './containers/App';

const store = getStore();

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
                <Route path="/" component={ConnectedApp}/>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));
