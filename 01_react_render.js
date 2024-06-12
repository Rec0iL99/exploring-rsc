const { createElement } = require("react");

const App = () => createElement("h1", null, "Hello!");

// this produces a JSX element or a react element
// now this is NOT serializable because for example type is of type function which cannot be serialized
console.log(createElement(App));

/*
{
  '$$typeof': Symbol(react.transitional.element),
  type: [Function: App],
  key: null,
  props: {},
  _owner: null,
  _store: {}
}
*/
