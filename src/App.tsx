import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { AppState } from "./store/store";
import Test from "./components/test";
import getUsers from "./api/sagas/users/index";

import Home from "./components/home";
import BusinessInformation from "./components/businessinfo";
import Tx from "./components/tx";
import AnimationBox from "./components/animation";

// import "./api/sagas/index";

const TestComponent = () => <Test message="GO HOME" />;

interface AppProps {
  getUsers: typeof getUsers;
}

function App(props: AppProps) {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/test" component={TestComponent} />
        <Route path="/register" component={BusinessInformation} />
        <Route path="/tx" component={Tx} />
        <Route path="/animation" component={AnimationBox} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({});
const mapDispatchToProps = (dispatch: any) => ({
  getUsers: () => dispatch({ type: "RECEIVE_USERS" })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
