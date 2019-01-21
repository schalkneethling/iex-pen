import React from "react";

class Button extends React.Component {
  handleButtonClick() {
    let tryItButton = document.querySelector(".try-it");
    if (tryItButton) {
      tryItButton.classList.add("hide");
    }
    window.__CPEmbed(".codepen-iex");
  }
  render() {
    return (
      <button type="button" className="try-it" onClick={this.handleButtonClick}>
        Try it now!
      </button>
    );
  }
}

export default Button;
