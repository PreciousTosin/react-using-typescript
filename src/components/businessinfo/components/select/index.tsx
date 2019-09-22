import * as React from "react";

import "./style.scss";

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: ""
    };

    this.onChangeSelected = this.onChangeSelected.bind(this);
  }

  componentDidMount() {
    const { options } = this.props;
    this.setState({
      selected: options[0].value
    });
  }

  onChangeSelected(e) {
    const { onChange } = this.props;
    const { target } = e;
    const { value } = target;
    this.setState({ selected: value });
    onChange(value);
  }

  render() {
    const { selected } = this.state;
    const { options } = this.props;

    return (
      <div className="select-wrapper">
        <div className="select" tabIndex={1}>
          {options.map(option => {
            return (
              <React.Fragment key={option.value}>
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
                  <span className="option-icon">{option.svg}</span>
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
