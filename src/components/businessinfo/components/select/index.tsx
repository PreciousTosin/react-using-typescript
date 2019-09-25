import * as React from "react";

import "./style.scss";

interface Props {
  selected: string;
  onChange(value: string): void;
  name: string;
  options: Array<{ label: string; value: string; svg?: any }>;
}

interface State {
  selected: string;
}

class Select extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      selected: ""
    };

    this.onChangeSelected = this.onChangeSelected.bind(this);
  }

  componentDidMount() {}

  checkOption() {}

  onChangeSelected(e) {
    const { onChange } = this.props;
    const { target } = e;
    const { value } = target;
    onChange(value);
  }

  render() {
    // const { selected } = this.state;
    const { selected, options = [] } = this.props;

    if (options && options.length > 0) {
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
                    <span className="option-icon">
                      {option.svg ? option.svg : null}
                    </span>
                    {option.label}
                  </label>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div className="select-wrapper">
          <div className="select" tabIndex={1}>
            <React.Fragment>
              <input
                className="options-select"
                id="placeholder-select"
                name="selectors"
                type="radio"
                value="select"
                checked={true}
              />
              <label htmlFor="placeholder-select" className="option">
                Select.....
              </label>
            </React.Fragment>
          </div>
        </div>
      );
    }
  }
}

export default Select;
