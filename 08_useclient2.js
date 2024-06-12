const { createElement } = require("react");
const { renderToPipeableStream } = require("react-server-dom-webpack/server");
// this registers a handler for the use client directive
require("react-server-dom-webpack/node-register")();
const { createFromNodeStream } = require("react-server-dom-webpack/client");
const { PassThrough } = require("node:stream");

const Counter = require("./Counter.js");

const App = () =>
  createElement(
    "div",
    null,
    createElement("h1", null, "Hello!"),
    createElement(Counter)
  );

// this would be automatically be produced by a bundler
const manifest = {
  [`file://${__dirname}/Counter.js`]: {
    // here it is the file name so that the client can import this from the server
    id: "./Counter.js",
    chunks: ["./Counter.js"],
    name: "default",
    async: true,
  },
};

// this is a hack by daishi
const config = {
  "./Counter.js": { default: {} },
};

const passthrough = new PassThrough();
renderToPipeableStream(createElement(App), manifest).pipe(passthrough);
createFromNodeStream(passthrough, config).then((x) =>
  console.dir(x, { depth: 4 })
);

/*
// this shows the react tree
{
  '$$typeof': Symbol(react.element),
  type: 'div',
  key: null,
  ref: null,
  props: {
    children: [
      {
        '$$typeof': Symbol(react.element),
        type: 'h1',
        key: null,
        ref: null,
        props: { children: 'Hello!' },
        _owner: null,
        _store: {}
      },
      {
        '$$typeof': Symbol(react.element),
        type: {
          '$$typeof': Symbol(react.lazy),
          _payload: [Promise],
          _init: [Function: readChunk]
        },
        key: null,
        ref: null,
        props: {},
        _owner: null,
        _store: {}
      }
    ]
  },
  _owner: null,
  _store: {}
}
*/
