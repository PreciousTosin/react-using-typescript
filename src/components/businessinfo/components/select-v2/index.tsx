import * as React from "react";

import { ReactComponent as DropdownIcon } from "../icons/drop-down-icon.svg";

import "./style.scss";

interface Props {
  selected: string;
  onChange(value: string): void;
  name: string;
  options: Array<{ label: string; value: string; svg?: any }>;
}

interface State {
  toggled: boolean;
}

class SelectV2 extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      toggled: false
    };

    this.toggleOptions = this.toggleOptions.bind(this);
    this.toggleOnBlur = this.toggleOnBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleOptions() {
    // console.log('TOGGLING.....');
    this.setState(prevState => ({
      toggled: !prevState.toggled
    }));
  }

  toggleOnBlur() {
    /*console.log("TOGGLING....."); */
    /*this.setState({
      toggled: false
    }); */
  }

  handleChange(e) {
    const { onChange } = this.props;
    const { target } = e;
    const { dataset } = target;
    const { value } = dataset;
    onChange(value);
  }

  render() {
    const { toggled } = this.state;
    const { selected, options = [] } = this.props;
    const SelectedOption = options.filter(
      option => option.value === selected
    )[0];
    return (
      <div
        className="select-v2"
        onClick={this.toggleOptions}
        onBlur={this.toggleOnBlur}
        tabIndex={1}
      >
        <div className="selected-wrapper">
          <div className="selected">
            {selected ? (
              <div className="option-v2">
                <div
                  className={`${SelectedOption.svg ? "option-v2-icon" : ""}`}
                >
                  {SelectedOption.svg ? <SelectedOption.svg /> : null}
                </div>
                <div>{SelectedOption.label}</div>
              </div>
            ) : (
              "Select..."
            )}
          </div>
          <div className={`dropdown-icon ${toggled ? "rotate-svg" : ""}`}>
            <DropdownIcon />
          </div>
        </div>
        <ul className={`select ${toggled ? "show-dropdown" : ""}`}>
          {options.map(option => {
            return (
              <li
                key={option.value}
                className="option-v2"
                data-value={option.value}
                onClick={this.handleChange}
              >
                <div className={`${option.svg ? "option-v2-icon" : ""}`}>
                  {option.svg ? <option.svg /> : null}
                </div>
                <div>{option.label}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SelectV2;
