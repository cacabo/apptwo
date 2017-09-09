import React, { Component } from "react";
import firebase from "firebase";

class NavbarNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
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

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          isLoggedIn: true
        });
      }
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
          {this.state.isLoggedIn ? (
            <a className="nav-link" href="" onClick={() => this.logout()}>
              Logout
            </a>
          ) : (
            <a className="nav-link" href="/login">
              Login
            </a>
          )}
        </li>
        {!this.state.isLoggedIn ? (
          <li className="nav-item bold">
            <a className="nav-link" href="/register">
              Register
            </a>
          </li>
        ) : (
          ""
        )}
      </ul>
    );
  }
}

export default NavbarNavigation;
