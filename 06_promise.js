const { renderToPipeableStream } = require("react-server-dom-webpack/server");

const App = () => [
  "hello",
  new Promise((resolve) => setTimeout(() => resolve("delayed"), 1000)),
];

renderToPipeableStream(App()).pipe(process.stdout);

/*
0:["hello","$@1"] // first only this was sent // $@1 tells react that there is more to come
1:"delayed" // this was sent after 1 sec
*/

// by std, promises cannot be serialized, but rsc makes it possible by sending in the output of the promise once resolved in the stream to the client

// this is similar to how react suspense works
