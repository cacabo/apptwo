import React, { Component } from 'react';

class NavbarNavigation extends Component {
  render() {
    return (
      <ul className="navbar-nav">
        <li className="nav-item bold">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item bold">
          <a className="nav-link" href="/about">About</a>
        </li>
      </ul>
    );
  }
}

export default NavbarNavigation;
