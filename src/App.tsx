import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { AppState } from "./store/store";
import Test from "./components/test";
import { authenticate } from "./store/auth/actions";
import getUsers from "./api/sagas/users/index";

import Home from "./components/home";
import BusinessInformation from "./components/businessinfo";
import Tx from "./components/tx";

// import "./api/sagas/index";

const TestComponent = () => <Test message="GO HOME" />;

const userData = () => {
  return {
    username: "I DON'T KNOW"
  };
};

interface AppProps {
  authenticate: typeof authenticate;
  getUsers: typeof getUsers;
}

function App(props: AppProps) {
  const userPayload = userData();
  return (
    <div className="App">
      <button type="button" onClick={() => props.authenticate(userPayload)}>
        AUTHENTICATE
      </button>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/test" component={TestComponent} />
        <Route path="/register" component={BusinessInformation} />
        <Route path="/tx" component={Tx} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({});
const mapDispatchToProps = (dispatch: any) => ({
  authenticate: (payload: any) => dispatch(authenticate(payload)),
  getUsers: () => dispatch({ type: "RECEIVE_USERS" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
