// import the react and react-dom libraries
import React from "react";
import ReactDOM from "react-dom";

// create a react component
const App = function() {
  return <div> Hi There</div>;
};
// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
