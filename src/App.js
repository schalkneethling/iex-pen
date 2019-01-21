import React from "react";
import { render } from "react-dom";
import RenderSampleBlock from "./RenderSampleBlock";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>IEx - Pen</h1>
        <RenderSampleBlock
          html="&lt;h1>It Works!&lt;/h1>"
          css="body { box-sizing: border-box; }"
          js="function turnRed() { document.querySelector('h1').style.color = 'red'; } turnRed();"
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
