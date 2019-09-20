import * as React from "react";

import "./style.scss";

import Select from "./components/select";

class BusinessInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: ""
    };

    this.handleSelected = this.handleSelected.bind(this);
  }

  handleSelected(e) {
    const { target } = e;
    const { value } = target;
    this.setState({
      selectedOption: value
    });
  }

  render() {
    // @ts-ignore
    const { selectedOption } = this.state;
    return (
      <div className="business-info-wrapper">
        <h1>ENTER YOUR BUSINESS INFORMATION</h1>
        <form>
          <div className="form-control">
            <label htmlFor="companyName">Business/Company Name</label>
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
              checked={selectedOption === "registered"}
              onChange={this.handleSelected}
            />

            <label className="form-control-label" htmlFor="registeredBus">
              REGISTERED
            </label>
            <input
              value="starter"
              id="starterBus"
              className="form-control-input"
              type="radio"
              checked={selectedOption === "starter"}
              onChange={this.handleSelected}
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
              <option value="nigeria">Nigeria</option>
              <option value="kenya">Kenya</option>
            </select>
          </div>

          <div className="form-control">
            <label className="form-control-label">select an option</label>
            <Select />
          </div>
        </form>
      </div>
    );
  }
}

export default BusinessInformation;
