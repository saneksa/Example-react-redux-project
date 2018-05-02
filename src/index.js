import React from 'react';
import {Route, Switch} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import {Provider} from 'react-redux' 
import './index.css';
import {getStore} from "./store";
import {render} from 'react-dom'

import {ConnectedApp} from './containers/App';

const store = getStore();

render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" component={ConnectedApp}/>
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root'));
