import * as React from "react";
import { Link } from "react-router-dom";

import ExpandCollapse from "./css-expand-collapse";

import "./index.scss";

const Animation = () => {
  return (
    <div className="animation-home">
      <div className="back-button">
        <Link to="/">Back to Home</Link>
      </div>

      <div className="animation-playground">
        <p>Animation sublinks or links</p>

        <div>Animate expand and collapse example</div>
        <div>
          <ExpandCollapse />
        </div>
      </div>
    </div>
  );
};

export default Animation;
