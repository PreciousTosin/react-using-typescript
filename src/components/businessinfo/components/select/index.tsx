import * as React from "react";

import "./style.scss";

const optionsData = [
  {
    label: "Web Design",
    value: "web design"
  },
  {
    label: "Web Development",
    value: "web development"
  },
  {
    label: "SEO",
    value: "seo"
  }
];

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
          {optionsData.map(option => {
            return (
              <React.Fragment>
                <input
                  className="options-select"
                  name="selectors"
                  type="radio"
                  id={option.value}
                  value={option.value}
                  onChange={this.onChangeSelected}
                  checked={selected === `${option.value}`}
                />
                <label htmlFor={option.value} className="option">
                  <span className="option-icon" />
                  {option.label}
                </label>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Select;
