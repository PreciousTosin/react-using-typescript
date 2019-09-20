import * as React from "react";

import "./style.scss";

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "web design"
    };

    this.onChangeSelected = this.onChangeSelected.bind(this);
  }

  onChangeSelected(e) {
    const { target } = e;
    const { value } = target;
    this.setState({ selected: value });
  }

  render() {
    const { selected } = this.state;
    return (
      <div className="select-wrapper">
        <div className="select" tabIndex={1}>
          <input
            className="options-select"
            name="selectors"
            type="radio"
            id="opt1"
            value="web design"
            onChange={this.onChangeSelected}
            checked={selected === "web design"}
          />
          <label htmlFor="opt1" className="option">
            Web Design
          </label>
          <input
            className="options-select"
            name="selectors"
            type="radio"
            id="opt2"
            value="web development"
            onChange={this.onChangeSelected}
            checked={selected === "web development"}
          />
          <label htmlFor="opt2" className="option">
            Web Development
          </label>
          <input
            className="options-select"
            name="selectors"
            type="radio"
            id="opt3"
            value="seo"
            onChange={this.onChangeSelected}
            checked={selected === "seo"}
          />
          <label htmlFor="opt3" className="option">
            SEO
          </label>
          <input
            className="options-select"
            name="selectors"
            type="radio"
            id="opt5"
            value="graphic designer"
            onChange={this.onChangeSelected}
            checked={selected === "graphic designer"}
          />
          <label htmlFor="opt5" className="option">
            Graphic Designer
          </label>
          <input
            className="options-select"
            name="selectors"
            type="radio"
            id="opt6"
            value="video editor"
            onChange={this.onChangeSelected}
            checked={selected === "video editor"}
          />
          <label htmlFor="opt6" className="option">
            Video Editor
          </label>
        </div>
      </div>
    );
  }
}

export default Select;
