import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Home = (props: any) => {
  return (
    <div>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <Link to="/test">GO TO TEST</Link>
      </div>
      <button type="button" onClick={props.getUsers}>
        GET USERS
      </button>
      {/*<button type="button" onClick={getUsers}>GET USERS</button>*/}
    </div>
  );
};

const mapStateToProps = (state: any) => ({});
const mapDispatchToProps = (dispatch: any) => ({
  getUsers: () => dispatch({ type: "RECEIVE_USERS_SAGA" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
