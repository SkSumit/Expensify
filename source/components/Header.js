import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogOut } from "../actions/auth";

class Header extends Component {
  toggleNavbar = (e) => {
    document
      .querySelector(".navbar-burger.burger")
      .classList.toggle("is-active");
    document.querySelector(".navbar-menu").classList.toggle("is-active");
  };
  render() {
    return (
      <div>
        <nav
          className="navbar is-spaced is-primary"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <div className="navbar-item">
              <NavLink activeClassName="is-active" to="/dashboard">
                <h3 className="title is-3 has-text-white">Savver</h3>
              </NavLink>
            </div>

            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              onClick={this.toggleNavbar}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <button
                  className="button  is-rounded has-background-danger has-text-white has-text-weight-semibold "
                  onClick={this.props.startLogOut}
                >
                  LogOut
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
// const Header = (props) => {

// };

const mapDispatchToProps = (dispatch) => {
  return {
    startLogOut: () => dispatch(startLogOut()),
  };
};

export default connect(undefined, mapDispatchToProps)(Header);
