import React from "react";
import { connect } from "react-redux";
import startLogin from "../actions/auth";
const Login = (props) => {
  return (
    <div>
      <nav
        className=" pl-3 navbar  "
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="navbar-item">
            <h3 className="title is-3 ">Savver</h3>
          </div>
        </div>
      </nav>
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <div class="columns is-vcentered">
              <div class="column is-6 loginmain">
                <h1 className="title is-size-1-desktop ">
                  Start tracking,
                  <span className="has-text-danger">Start Savving </span>
                </h1>
                <h2 className="subtitle is-size-3-desktop">
                  a better expense manager
                </h2>
                <button
                  className="button is-medium is-rounded has-background-danger has-text-white has-text-weight-semibold "
                  onClick={props.startLogin}
                >
                  Login
                </button>
              </div>
              <div class="column is-6 has-text-centered ">
                <figure class="image is-1by1">
                  <img src="img/wallet.svg" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(Login);
