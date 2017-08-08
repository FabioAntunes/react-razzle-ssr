import serialize from 'serialize-javascript';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

export const basePage = (markup, styles, finalState) =>
  `<!doctype html>
  <html lang="">
  <head>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta charSet='utf-8' />
    <title>Welcome to Razzle</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${styles}
    <script src="${assets.client.js}" defer></script>
  </head>
  <body>
    <div id="root">${markup}</div>
    <script>
      window.__PRELOADED_STATE__ = ${serialize(finalState)}
    </script>
  </body>
  </html>`
