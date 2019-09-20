import * as React from "react";

import "./style.scss";

const NaijaIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="29"
    height="21"
    viewBox="0 0 29 21"
  >
    <g fill="none" fill-rule="nonzero">
      <path
        fill="#009A49"
        d="M3.2 20.922A3.21 3.21 0 0 1 0 17.703V3.22A3.21 3.21 0 0 1 3.2 0h6.4v20.922H3.2z"
      />
      <path fill="#EEE" d="M9.6 0h9.6v20.922H9.6z" />
      <path
        fill="#009A49"
        d="M25.6 20.922h-6.4V0h6.4a3.21 3.21 0 0 1 3.2 3.219v14.484a3.21 3.21 0 0 1-3.2 3.219"
      />
    </g>
  </svg>
);

function create(_elem) {
  const _createElem = document.createElement("" + _elem.tag + "");
  _createElem.innerHTML = _elem.content;

  //set attributes
  for (var keys in _elem.attr) {
    _createElem.setAttribute("" + keys + "", _elem.attr[keys]);
  }
  //set style
  for (let keys in _elem.style) {
    _createElem.setAttribute("" + keys + "", _elem.style[keys]);
  }
  //set events
  for (let keys in _elem.events) {
    _createElem.setAttribute("on" + keys, _elem.events[keys]);
  }
  return _createElem;
}

const optionsData = [
  {
    label: "Web Design",
    value: "web design",
    svg: NaijaIcon
  },
  {
    label: "Web Development",
    value: "web development",
    svg: NaijaIcon
  },
  {
    label: "SEO",
    value: "seo",
    svg: NaijaIcon
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
            const htmlElem = create(option.svg);
            console.log("ICON: ", option.svg);
            console.log("ICON: ", htmlElem);
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
                  <span
                    className="option-icon"
                    style={{
                      content: `url("data:image/svg+xml;utf8, ${
                        option.svg.props
                      }")`
                    }}
                  />
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
