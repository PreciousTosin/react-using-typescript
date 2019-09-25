import React, { Component } from "react";

import Checkbox from "../checkbox/index.js";

import "./style.css";

let caretIcon = (
  <svg
    x="0px"
    y="0px"
    width="284.929px"
    height="284.929px"
    viewBox="0 0 284.929 284.929"
  >
    <g>
      <path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441   L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082   c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647   c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z" />
    </g>
  </svg>
);

class SelectDropdown extends Component {
  constructor() {
    super();
  }

  render() {
    let { options, className } = this.props;

    return (
      <div className="SelectDropdown">
        <div className={"value-container" + (className ? " " + className : "")}>
          <div className="value">My Business</div>
          <div className="icon">{caretIcon}</div>
        </div>

        <div className="dropdown-container">
          <ul>
            {options.map(item => {
              return (
                <li>
                  <Checkbox /> <div className="name">{item.label}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default SelectDropdown;
