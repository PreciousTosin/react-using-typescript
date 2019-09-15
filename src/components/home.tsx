import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { showToastBox, hideToastBox } from "../store/toast/actions";
// eslint-disable-next-line no-unused-vars
import { Toast } from "../store/toast/action-types";
import ToastBox from "../components/toast";

interface HomeProps {
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

  const toastPayload = {
    message: "Toast Displayed",
    boxType: "success"
  };

  return (
    <div>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <Link to="/test">GO TO TEST</Link>
      </div>
      <button type="button" onClick={getUsers}>
        GET USERS
      </button>
      <div>
        <button type="button" onClick={() => showToast(toastPayload)}>
          SHOW TOAST
        </button>
        <button type="button" onClick={hideToast}>
          HIDE TOAST
        </button>
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
  getUsers: () => dispatch({ type: "RECEIVE_USERS_SAGA" }),
  showToast: (payload: Toast) => dispatch(showToastBox(payload)),
  hideToast: () => dispatch(hideToastBox())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
