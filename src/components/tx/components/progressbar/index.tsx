import React, { FunctionComponent, useState, useEffect } from "react";

import "./index.scss";

const ProgressBar: FunctionComponent = props => {
  const [width, setWidth] = useState(1);

  let animation;
  let progress = 1;

  useEffect(() => {
    animateBar();
    // startAnimation(frame);
  }, []);

  function frame() {
    // console.log("CALLED FRAME");
    if (progress >= 100) {
      cancelAnimationFrame(animation);
    } else {
      progress = progress + 3;
      console.log("CALLED FRAME", progress);
      setWidth(prevState => prevState + 3);
    }
  }

  function animateBar() {
    frame();
    animation = requestAnimationFrame(animateBar);
  }

  return (
    <div className="progress-meter">
      <span style={{ width: `${width}%` }} />
    </div>
  );
};

export default ProgressBar;
