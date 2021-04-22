import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

const Animation = () => {
  return (
    <div className="animation-home">
      <div className="back-button">
        <Link to="/">Back to Home</Link>
      </div>

      <div className="animation-playground">
        <p>Animation sublinks or links</p>
      </div>
    </div>
  );
};

export default Animation;
