export const Base = ({ children }) => (
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Dev links</title>
      <link href="/public/styles.css" rel="stylesheet" />
      <script
        src="https://unpkg.com/htmx.org@1.9.12/dist/htmx.js"
        integrity="sha384-qbtR4rS9RrUMECUWDWM2+YGgN3U4V4ZncZ0BvUcg9FGct0jqXz3PUdVpU1p0yrXS"
        crossorigin="anonymous"
      ></script>
    </head>
    <body hx-boost="true" class="bg-gray-100 flex justify-center items-center">
      {children}
    </body>
  </html>
);
