"use client";

const { createElement, useState } = require("react");

const Counter = () => {
  const [count, setCount] = useState(0);

  return createElement(
    "div",
    null,
    createElement("span", null, "Count: " + count + " "),
    createElement("button", { onClick: () => setCount((c) => c + 1) }, "+1")
  );
};

module.export = Counter;
