import * as React from "react";

import "./style.scss";

class SelectV2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="select-v2">
        <div className="">
          <ul className="select">
            <li className="option-v2">Nigeria</li>
            <li className="option-v2">Ghana</li>
            <li className="option-v2">Uganda</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SelectV2;
