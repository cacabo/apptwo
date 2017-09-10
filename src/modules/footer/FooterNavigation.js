import React, { Component } from "react";

class FooterNavigation extends Component {
  render() {
    if (this.props.isLoggedIn === null) {
      return (
        <ul className="clean-list"></ul>
      );
    } else if (this.props.isLoggedIn) {
      return (
        <ul className="clean-list">
          <li>
            <a href="/" className="blue-gray-text">
              Home
            </a>
          </li>
          <li>
            <a href="/user" className="blue-gray-text">
              Profile
            </a>
          </li>
          <li>
            <a href="/applications" className="blue-gray-text">
              Applications
            </a>
          </li>
          <li>
            <a href="/applications/new" className="blue-gray-text">
              New application
            </a>
          </li>
        </ul>
      );
    } else {
      return(
        <ul className="clean-list">
          <li>
            <a href="/" className="blue-gray-text">
              Home
            </a>
          </li>
          <li>
            <a href="/login" className="blue-gray-text">
              Login
            </a>
          </li>
          <li>
            <a href="/register" className="blue-gray-text">
              Regsiter
            </a>
          </li>
        </ul>
      );
    }
  }
}

export default FooterNavigation;
