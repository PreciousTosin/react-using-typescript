import * as React from "react";
//@ts-ignore
import { Collapse } from "react-collapse";
import cx from "classnames";

import "./index.scss";

const useState = React.useState;

const ReactAccordion = () => {
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
          toggle 2
        </button>

        <Collapse
          isOpened={state.isOpen2}
          theme={{
            collapse: `collapse collapse-gradient ${
              state.isOpen2 ? "collapse-active" : ""
            }`
          }}
          transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
          aria-hidden={state.isOpen2 ? "false" : "true"}
          elementType="article"
          render={(collapseState) => (
            <React.Fragment>
              <div className="content">
                <div>{collapseState}</div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                <img
                  className="image"
                  alt="random"
                  src="https://source.unsplash.com/user/erondu/500x200"
                />
                <button onClick={() => toggle(2)} className="button">
                  close
                </button>
              </div>
            </React.Fragment>
          )}
        />
      </div>
    </div>
  );
};

export default ReactAccordion;
