import React, { Component } from "react";

class FooterNavigation extends Component {
  render() {
    return (
      <ul className="clean-list">
        <li>
          <a href="/" className="blue-gray-text">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="blue-gray-text">
            About
          </a>
        </li>
      </ul>
    );
  }
}

export default FooterNavigation;
