import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-light white-blue bord-bot-blue-gray">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand bold blue-gray-text" href="#">Navbar</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item bold">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item bold">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item bold">
              <a className="nav-link" href="#">Pricing</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
