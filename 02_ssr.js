const { createElement } = require("react");
const { renderToPipeableStream } = require("react-dom/server");

const App = () => createElement("h1", null, "Hello!");

// rsc and ssr are different, rsc and ssr both run on server but rsc does not produce html like ssr
renderToPipeableStream(createElement(App)).pipe(process.stdout);

/* 
<h1>Hello!</h1>
*/
