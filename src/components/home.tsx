import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { showToastBox, hideToastBox } from "../store/toast/actions";
// eslint-disable-next-line no-unused-vars
import { Toast } from "../store/toast/action-types";
import ToastBox from "../components/toast";

import { authenticate } from "../store/auth/actions";

import "./index.scss";

interface HomeProps {
  authenticate: typeof authenticate;
  toastBoxType: string;
  toastBoxMessage: string;
  toastBoxShow: boolean;
  getUsers(): object;
  showToast: typeof showToastBox;
  hideToast: typeof hideToastBox;
}

const Home = (props: HomeProps) => {
  const {
    toastBoxShow,
    toastBoxType,
    toastBoxMessage,
    getUsers,
    showToast,
    hideToast
  } = props;

  const userData = () => {
    return {
      username: "I DON'T KNOW"
    };
  };

  const userPayload = userData();

  const toastPayload = {
    message: "Toast Displayed",
    boxType: "success"
  };

  return (
    <div className="home">
      <div className="home-nav-links">
        <div>
          <Link to="/test">GO TO TEST</Link>
        </div>
        <div>
          <Link to="/register">REGISTER BUSINESS</Link>
        </div>
        <div>
          <Link to="/tx">Tx</Link>
        </div>
        <div>
          <Link to="/animation">Animations</Link>
        </div>
      </div>

      <div className="page-header">
        <h1>Hello Magic Stick</h1>
        <h2>Welcome to my personal playground for code testing!</h2>
      </div>

      <div className="test-animation-box">
        <div>
          <button type="button" onClick={getUsers}>
            GET USERS
          </button>
          <button type="button" onClick={() => props.authenticate(userPayload)}>
            AUTHENTICATE
          </button>
        </div>
        <div>
          <button type="button" onClick={() => showToast(toastPayload)}>
            SHOW TOAST
          </button>
          <button type="button" onClick={hideToast}>
            HIDE TOAST
          </button>
        </div>
      </div>

      <ToastBox
        show={toastBoxShow}
        message={toastBoxMessage}
        boxType={toastBoxType}
        onClickHandler={hideToast}
      />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  toastBoxShow: state.toastBox.show,
  toastBoxMessage: state.toastBox.message,
  toastBoxType: state.toastBox.boxType
});
const mapDispatchToProps = (dispatch: any) => ({
  authenticate: (payload: any) => dispatch(authenticate(payload)),
  getUsers: () => dispatch({ type: "RECEIVE_USERS_SAGA" }),
  showToast: (payload: Toast) => dispatch(showToastBox(payload)),
  hideToast: () => dispatch(hideToastBox())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
