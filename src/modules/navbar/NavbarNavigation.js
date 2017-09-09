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
      this.props.isLoggedIn ? (
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
            <a className="nav-link" href="/applications">
              Applications
            </a>
          </li>
          <li className="nav-item bold">
            <a className="nav-link" href="/user">
              Profile
            </a>
          </li>
          <li className="nav-item bold">
            <a className="nav-link" href="" onClick={() => this.logout()}>
              Logout
            </a>
          </li>
        </ul>
      ) : (
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
            <a className="nav-link" href="/login">
              Login
            </a>
          </li>
          <li className="nav-item bold">
            <a className="nav-link" href="/register">
              Register
            </a>
          </li>
        </ul>
      )
    );
  }
}

export default NavbarNavigation;
