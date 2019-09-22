import * as React from "react";

import "./style.scss";

import Select from "./components/select";
import NaijaIcon from "./components/icons/naija";

const optionsData = [
  {
    label: "Nigeria",
    value: "nigeria",
    svg: NaijaIcon
  },
  {
    label: "Kenya",
    value: "kenya",
    svg: NaijaIcon
  },
  {
    label: "Uganda",
    value: "uganda",
    svg: NaijaIcon
  }
];

class BusinessInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businessOption: ""
    };

    this.handleBusinessSelected = this.handleBusinessSelected.bind(this);
    this.handleCountrySelected = this.handleCountrySelected.bind(this);
  }

  handleBusinessSelected(e) {
    const { target } = e;
    const { value } = target;
    this.setState({
      businessOption: value
    });
  }

  handleCountrySelected(value) {
    console.log("COUNTRY SELECTED IS: ", value);
  }

  render() {
    // @ts-ignore
    const { businessOption } = this.state;
    return (
      <div className="business-info-wrapper">
        <h1>ENTER YOUR BUSINESS INFORMATION</h1>
        <form>
          <div className="form-control">
            <label className="form-control-label" htmlFor="companyName">
              Business/Company Name
            </label>
            <input
              name="name"
              id="companyName"
              className="form-control-input"
              type="text"
              placeholder="e.g Soles n Shades"
            />
          </div>
          <div className="form-control business-type">
            <label className="form-control-label">
              What type of business do you run?
            </label>
            <input
              value="registered"
              id="registeredBus"
              className="form-control-input"
              type="radio"
              checked={businessOption === "registered"}
              onChange={this.handleBusinessSelected}
            />

            <label className="form-control-label" htmlFor="registeredBus">
              REGISTERED
            </label>
            <input
              value="starter"
              id="starterBus"
              className="form-control-input"
              type="radio"
              checked={businessOption === "starter"}
              onChange={this.handleBusinessSelected}
            />
            <label className="form-control-label" htmlFor="starterBus">
              STARTER
            </label>
          </div>

          <div className="form-control">
            <label className="form-control-label" htmlFor="countrySelect">
              What country are you based in?
            </label>
            <select name="country" id="countrySelect">
              {/*<option value="nigeria">Nigeria</option>
              <option value="kenya">Kenya</option> */}
            </select>
          </div>

          <div className="form-control">
            <label className="form-control-label">select an option</label>
            <Select
              options={optionsData}
              name="country"
              onChange={this.handleCountrySelected}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default BusinessInformation;
