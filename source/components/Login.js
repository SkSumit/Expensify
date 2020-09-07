import React from "react";
import { connect } from "react-redux";
import startLogin from "../actions/auth";
const Login = (props) => {
  return (
    <div>
      <button onClick={props.startLogin}>Login</button>
    </div>
  );
};
// export default Login;

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(Login);
