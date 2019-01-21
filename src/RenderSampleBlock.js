import React from "react";
import Button from "./Button";

const RenderSampleBlock = props => {
  return (
    <div
      className="codepen-iex"
      data-prefill
      data-default-tab="js,result"
      data-editable="true"
    >
      <pre data-lang="html" className="hide">
        <code>{props.html}</code>
      </pre>
      <pre data-lang="css" className="hide">
        <code>{props.css}</code>
      </pre>
      <pre data-lang="js">
        <code className="language-js">{props.js}</code>
      </pre>
      <Button />
    </div>
  );
};

export default RenderSampleBlock;
