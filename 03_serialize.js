const { createElement } = require("react");
const { renderToPipeableStream } = require("react-server-dom-webpack/server");

const App = () => createElement("h1", null, "Hello!");

renderToPipeableStream(createElement(App)).pipe(process.stdout);

// known as rsc payload
/*
1:{"name":"App","env":"Server","owner":null}
0:D"$1"
0:["$","h1",null,{"children":"Hello!"},"$1"]
*/
