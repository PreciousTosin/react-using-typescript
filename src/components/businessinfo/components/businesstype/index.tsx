import * as React from "react";
// import * as content from "../../../../../custom";

import { ReactComponent as RegisterIcon } from "../icons/registered-icon.svg";
import { ReactComponent as StarterIcon } from "../icons/individual-icon.svg";

import "./style.scss";

interface BusinessTypeProps {
  businessOption: string;
  handleBusinessSelected(e: any): void;
}

const Registered = () => {
  return (
    <React.Fragment>
      <div className="icon">
        <RegisterIcon />
      </div>
      <div className="content">Registered</div>
      <div className="sub-content">
        A registered business with a corporate bank account.
      </div>
    </React.Fragment>
  );
};

const Starter = () => {
  return (
    <React.Fragment>
      <div className="icon">
        <StarterIcon />
      </div>
      <div className="content">Individual</div>
      <div className="sub-content">
        An unregistered business e.g freeelancers and sole traders.
      </div>
    </React.Fragment>
  );
};

const BusinessType = (props: BusinessTypeProps) => {
  const { businessOption, handleBusinessSelected } = props;
  return (
    <React.Fragment>
      <label className="form-control-label">
        What type of business do you run?
      </label>
      <input
        value="starter"
        id="starterBus"
        className="form-control-input"
        type="radio"
        checked={businessOption === "starter"}
        onChange={handleBusinessSelected}
      />
      <label
        className="form-control-label business-type-label"
        htmlFor="starterBus"
      >
        <Starter />
      </label>
      <input
        value="registered"
        id="registeredBus"
        className="form-control-input"
        type="radio"
        checked={businessOption === "registered"}
        onChange={handleBusinessSelected}
      />

      <label
        className="form-control-label business-type-label"
        htmlFor="registeredBus"
      >
        <Registered />
      </label>
    </React.Fragment>
  );
};

export default BusinessType;
