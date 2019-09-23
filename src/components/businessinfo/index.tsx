import * as React from "react";

import "./style.scss";

import Select from "./components/select";
import NaijaIcon from "./components/icons/naija";
import BusinessType from "./components/businesstype";

import { ReactComponent as TipIcon } from "./components/icons/tip-icon.svg";

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

const NameTip = () => (
  <div className="business-tip">
    <TipIcon />
    <div>
      If your business is registered, please ensure that the <br />
      business name provided is the same name on your <br /> registration
      documents.
    </div>
  </div>
);

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
          <div className="form-control name-control">
            <NameTip />
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
            <BusinessType
              businessOption={businessOption}
              handleBusinessSelected={this.handleBusinessSelected}
            />
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
