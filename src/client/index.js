import React from 'react';
import { render } from 'react-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import App from './App';
import { configureStore } from './configure-store';
import history from '../utils/history'

const store = configureStore(window.__PRELOADED_STATE__);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
