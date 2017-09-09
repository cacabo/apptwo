import React, { Component } from "react";
import firebase from "firebase";

class NavbarNavigation extends Component {
  constructor(props) {
    super(props);
  }

  logout() {
    console.log("logging you out!");
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful
        window.location = '/';
      })
      .catch(error => {
        // An error happened.
        alert(error.message);
      });
  }

  render() {
    return (
      <ul className="navbar-nav">
        <li className="nav-item bold">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
        <li className="nav-item bold">
          <a className="nav-link" href="/about">
            About
          </a>
        </li>
        <li className="nav-item bold">
          {this.props.isLoggedIn ? (
            <a className="nav-link" href="" onClick={() => this.logout()}>
              Logout
            </a>
          ) : (
            <a className="nav-link" href="/login">
              Login
            </a>
          )}
        </li>
        <li className="nav-item bold">
          {!this.props.isLoggedIn ? (
            <a className="nav-link" href="/register">
              Register
            </a>
          ) : (
            <a className="nav-link" href="/applications">
              Applications
            </a>
          )}
        </li>
      </ul>
    );
  }
}

export default NavbarNavigation;
