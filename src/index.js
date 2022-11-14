import React from "react";
import ReactDom from "react-dom";

// stateless functional component
// always return JSX

function Greeting() {
  return <div>This is Dylan yoooooooo</div>;
}

ReactDom.render(<Greeting />, document.getElementById("root"));

export default Greeting;
