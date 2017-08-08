import express from 'express';
import { basePage } from './base-page';
import { renderApp } from './render-app';
import { configureStore } from '../client/configure-store';
import { getUser } from '../client/Git/api/user.api'

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/git/user/:username', (req, res) => {
    getUser(req.params.username).then(response => {

      const context = {};
      const store = configureStore({
        git: {
          user: response.data
        }
      });

      const { markup, styleTags } = renderApp(req.url, store, context);

      const finalState = store.getState();
      res.status(200).send(basePage(markup, styleTags, finalState));
    })
  })
  .get('/counter', (req, res) => {
    const context = {};
    const store = configureStore({ counter: 13 });

    const { markup, styleTags } = renderApp(req.url, store, context);

    const finalState = store.getState();
    res.status(200).send(basePage(markup, styleTags, finalState));
  })
  .get('*', (req, res) => {
    const context = {};
    // Compile an initial state
    const preloadedState = {};

    // Create a new Redux store instance
    const store = configureStore(preloadedState);

    const { markup, styleTags } = renderApp(req.url, store, context);

    // Grab the initial state from our Redux store
    const finalState = store.getState();

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(basePage(markup, styleTags, finalState));
    }
  });

export default server;
