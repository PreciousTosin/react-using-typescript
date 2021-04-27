import * as React from "react";
//@ts-ignore
// import { Collapse } from "react-collapse";
import cx from "classnames";

import "./index.scss";

const useState = React.useState;

const CustomExpandCollapse = () => {
  const [state, setState] = useState({
    isOpen1: false,
    isOpen2: false,
    isOpen3: false,
    spy3: {}
  });
  const toggle = (index) => {
    let collapse = "isOpen" + index;

    setState((prevState) => ({
      ...prevState,
      [collapse]: !prevState[collapse]
    }));
  };

  return (
    <div className="channel-list">
      <div className="channel">
        <button
          className={cx("toggle", {
            "toggle-active": state.isOpen2
          })}
          onClick={() => toggle(2)}
        >
          custom expand
        </button>

        <div
          className={`collapse collapse-gradient ${
            state.isOpen2 ? "active" : ""
          }`}
        >
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <img
              className="image"
              alt="random"
              src="https://source.unsplash.com/user/erondu/500x200"
            />
            <button onClick={() => toggle(2)} className="button">
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomExpandCollapse;
