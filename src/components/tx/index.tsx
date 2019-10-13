import React, { FunctionComponent, useEffect, useRef, forwardRef } from "react";

import ProgressBar from "./components/progressbar";

import "./index.scss";

const Bar = forwardRef((props, ref) => <ProgressBar ref={ref} />);

const Tx: FunctionComponent = props => {
  const progressbar = useRef<Element>(null);

  function animate() {
    console.log("PROGRESS", progressbar);
  }
  return (
    <div className="tx-container">
      <h4>TXS</h4>
      <div>
        <Bar />
      </div>
      <button onClick={animate}>ANIMATE</button>
    </div>
  );
};

export default Tx;
