/* eslint react/prop-types: 'off' */
import * as React from "react";

import "./style.scss";

interface handlerFunc {
  (): object;
}

interface ToastBox {
  show: boolean;
  message: string;
  boxType: any;
  onClickHandler: handlerFunc;
}

const ToastBox = (props: ToastBox) => {
  let classString = null;
  const { show, message, boxType, onClickHandler } = props;
  if (show) {
    classString = `toastbox-content ${boxType} show`;
  } else {
    classString = `toastbox-content ${boxType}`;
  }

  return (
    <div className="toastbox-wrapper">
      <div className={`${classString}`}>
        <div
          role="button"
          tabIndex={0}
          onClick={onClickHandler}
          onKeyPress={onClickHandler}
        >
          {message}
        </div>
      </div>
    </div>
  );
};

export default ToastBox;
