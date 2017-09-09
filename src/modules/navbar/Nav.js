import React, { Component } from "react";
import NavbarNavigation from "./NavbarNavigation";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-light white bord-bot-blue-gray">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand bold blue-gray-text" href="/">
          AppTwo
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <NavbarNavigation isLoggedIn={this.props.isLoggedIn}/>
        </div>
      </nav>
    );
  }
}

export default Nav;
