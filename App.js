const parent = React.createElement(
  "div",
  {},
  React.createElement("div", {}, [
    React.createElement("h1", {}, "Im h1 tag"),
    React.createElement("h2", {}, "Im h2 tag"),
  ])
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello from React"
// );
const r = ReactDOM.createRoot(document.getElementById("root"));
r.render(parent);
// r.render(heading);
