import * as React from "react";

import "./style.scss";

// import Select from "./components/select";
import BusinessType from "./components/businesstype";

import SelectV2 from "./components/select-v2";

import { ReactComponent as TipIcon } from "./components/icons/tip-icon.svg";
import { countryOptions, sizeOptions, userOptions } from "./data/options";

// const optionsData = [];

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

const UserTip = () => (
  <div className="business-tip">
    <TipIcon />
    <div>
      If you’re a developer or have developers on your <br />
      team, you can get easy access to our docs and API <br />
      keys on your dashboard.
    </div>
  </div>
);

interface State {
  selectedCountry: string;
  businessOption: string;
  selectedEmployeeSize: string;
  selectedUserType: string;
  disable: boolean;
}

class BusinessInformation extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      businessOption: "",
      selectedCountry: "",
      selectedEmployeeSize: "",
      selectedUserType: "",
      disable: true
    };

    this.handleBusinessSelected = this.handleBusinessSelected.bind(this);
    this.handleCountrySelected = this.handleCountrySelected.bind(this);
    this.handleSizeSelected = this.handleSizeSelected.bind(this);
    this.handleUserTypeSelected = this.handleUserTypeSelected.bind(this);
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
    this.setState({ selectedCountry: value });
  }

  handleSizeSelected(value) {
    console.log("EMPLOYEE SIZE IS: ", value);
    this.setState({ selectedEmployeeSize: value });
  }

  handleUserTypeSelected(value) {
    console.log("USER TYPE IS: ", value);
    this.setState({ selectedUserType: value });
  }

  render() {
    // @ts-ignore
    const { businessOption, disable } = this.state;
    return (
      <div className="business-info-wrapper">
        <h2>Tell us about your business</h2>
        <p>A few more things to help us set up your dashboard</p>
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
            <label className="form-control-label">
              Where is your business based
            </label>
            <SelectV2
              selected={this.state.selectedCountry}
              options={countryOptions}
              name="country"
              onChange={this.handleCountrySelected}
            />
          </div>

          <div className="form-control-inline">
            <div className="form-control">
              <label className="form-control-label">Business Size</label>
              <SelectV2
                selected={this.state.selectedEmployeeSize}
                name="size"
                options={sizeOptions}
                onChange={this.handleSizeSelected}
              />
            </div>

            <div className="form-control user-type-control">
              <UserTip />
              <label className="form-control-label">
                Are you a software developer?
              </label>
              <SelectV2
                selected={this.state.selectedUserType}
                name="size"
                options={userOptions}
                onChange={this.handleUserTypeSelected}
              />
            </div>
          </div>

          <div className="button-wrapper">
            <button
              className={disable ? "deactivated" : "activated"}
              disabled={disable}
              type="submit"
            >
              Proceed to my dashboard
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default BusinessInformation;
