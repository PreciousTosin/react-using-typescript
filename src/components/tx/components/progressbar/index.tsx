import React, { FunctionComponent, useState, useEffect, useRef } from "react";

import "./index.scss";

interface ProgressBarProps {}

const ProgressBar = (props: ProgressBarProps) => {
  const { start, stop, stopAnimation } = props;
  const [width, setWidth] = useState(1);

  const animationRef = useRef<number>();
  const maxValueRef = useRef(100);
  const maxFPSRef = useRef(60);
  const frameCountRef = useRef(0);
  const frameRateRef = useRef(30);
  let increment = 1;
  let progress = 0;
  let timeStamp;

  useEffect(() => {
    animateBar();
    // if (start) animateBar();
    // startAnimation(frame);
    // animationRef.current = requestAnimationFrame(animateBar);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  function frame() {
    let difference = Date.now();
    if (timeStamp !== null) difference = Date.now() - timeStamp;
    // if (difference > 20) return;
    console.log("Time", difference);
    // console.log("CALLED FRAME PROGRESS", progress, width);
    console.log("CANCELLING", progress > 100);
    if (progress > 100) {
      // console.log('CANCELLING', progress <= maxValueRef.current);
      cancelAnimationFrame(animationRef.current);
      return;
    } else {
      progress = progress + increment;
      console.log("CALLED FRAME", progress);
      // console.log("FPS", frameCountRef.current, maxFPSRef.current, frameRateRef.current);

      /* frameCountRef.current++;
      if (frameCountRef.current >= Math.round(
        maxFPSRef.current / frameRateRef.current
    )) {
      setWidth(prevState => prevState + increment);
      frameCountRef.current = 0;
    } */
      // if (difference < 20) setWidth(prevState => prevState + increment);
      // if (difference < 20 || progress >= maxValueRef.current)
      // setWidth(progress);
      setWidth(prevState => prevState + increment);
      timeStamp = Date.now();
    }
  }

  function animateBar() {
    frame();
    // console.log('ANIMATION: ', animationRef);
    if (progress < maxValueRef.current)
      animationRef.current = requestAnimationFrame(animateBar);
    // console.log('ANIMATION: ', animationRef);
  }

  return (
    <div className="progress-meter">
      <span style={{ width: `${width}%` }} />
    </div>
  );
};

export default ProgressBar;
