const { renderToPipeableStream } = require("react-server-dom-webpack/server");

const App = () => ["hello", { num: 123 }];

renderToPipeableStream(App()).pipe(process.stdout);

/* 
0:["hello",{"num":123}]
*/

// rsc can handle not just jsx but other javascript std data
// this can also be done with JSON.stringify and JSON.parse whats special? see promise.js
// whats special? the key is the 0: which is id for chunks of data streamed in.
