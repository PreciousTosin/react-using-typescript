import React from "react";

const ExpandCollapse = () => {
  return (
    <nav className="menu js-menu">
      <div className="menu__contents js-menu-contents">
        <button className="menu__toggle js-menu-toggle">
          <h1 className="menu__title js-menu-title">Menu</h1>
        </button>
        <ul className="menu__items">
          <li className="menu__item">Menu item 1</li>
          <li className="menu__item">Menu item 2</li>
          <li className="menu__item">Menu item 3</li>
          <li className="menu__item">Menu item 4</li>
        </ul>
      </div>
    </nav>
  );
};

export default ExpandCollapse;
