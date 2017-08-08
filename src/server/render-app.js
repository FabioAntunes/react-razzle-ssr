import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter, matchPath } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux'
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components'
import App from '../client/App';
import history from '../utils/history';

export const renderApp = (url, store, context) => {
  const sheet = new ServerStyleSheet()
  const markup = renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <StaticRouter context={context} location={url}>
            <App />
          </StaticRouter>
        </ConnectedRouter>
      </Provider>
    )
  );

  const styleTags = sheet.getStyleTags() // or sheet.getStyleElement()

  return {
    markup,
    styleTags
  }
}
