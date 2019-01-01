import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import './index.css';
import { render } from 'react-dom';
import { getStore, history } from './store';

import App from './containers/App/App';

const store = getStore();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Fragment>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="*" component={() => <div>Страница не найдена</div>} />
        </Switch>
      </Fragment>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
