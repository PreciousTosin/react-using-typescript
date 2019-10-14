import React, { FunctionComponent, useEffect, useRef, useState } from "react";

import ProgressBar from "./components/progressbar";

import "./index.scss";

// const Bar = forwardRef((props, ref) => <ProgressBar ref={ref} />);

const Tx: FunctionComponent = props => {
  const [animate, setAnimation] = useState(false);
  const progressbar = useRef<Element>(null);

  function animateBar() {
    console.log("PROGRESS", progressbar);
    setAnimation(true);
  }

  function stopAnimation() {
    setAnimation(false);
  }

  return (
    <div className="tx-container">
      <h4>TXS</h4>
      <div>{animate && <ProgressBar />}</div>
      <button onClick={animateBar}>ANIMATE</button>
      <div>
        <button onClick={stopAnimation}>REMOVE ANIMATION</button>
      </div>
    </div>
  );
};

export default Tx;
