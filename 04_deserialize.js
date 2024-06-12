const { createElement } = require("react");
const { renderToPipeableStream } = require("react-server-dom-webpack/server");
// this is like the client receiving the stream from server
const { createFromNodeStream } = require("react-server-dom-webpack/client");
const { PassThrough } = require("node:stream");

const App = () => createElement("h1", null, "Hello!");

const passthrough = new PassThrough();
renderToPipeableStream(createElement(App)).pipe(passthrough);
// the client receives the stream and renders the component
createFromNodeStream(passthrough).then(console.log);
console.log(App()); // same output as above

// output is similar to what we have in the first file. Normal react render
/*
{
  '$$typeof': Symbol(react.element),
  type: 'h1',
  key: null,
  ref: null,
  props: { children: 'Hello!' },
  _owner: null,
  _store: {}
}
*/
