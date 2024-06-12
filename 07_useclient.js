const { createElement } = require("react");
const { renderToPipeableStream } = require("react-server-dom-webpack/server");
// this registers a handler for the use client directive
require("react-server-dom-webpack/node-register")();

const Counter = require("./Counter.js");

const App = () =>
  createElement(
    "div",
    null,
    createElement("h1", null, "Hello!"),
    createElement(Counter)
  );

// this would be automatically produced by a bundler
const manifest = {
  [`file://${__dirname}/Counter.js`]: {
    id: "<id>",
    chunks: ["<chunk>"],
    name: "default",
    async: true,
  },
};

renderToPipeableStream(createElement(App), manifest).pipe(process.stdout);

/*
1:I{"id":"<id>","chunks":["<chunk>"],"name":"default","async":false}
0:["$","div",null,{"children":[["$","h1",null,{"children":"Hello!"}],["$","$L1",null,{}]]}]
*/
