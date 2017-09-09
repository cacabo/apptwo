import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="white-blue pad-2 bord-top-blue-gray">
        <div className="container blue-gray-text">
          <div className="row">
            <div className="col-12 col-md-4">
              <h2>
                AppTwo
              </h2>
              <p>
                Created by Cameron Cabo, Terry Jo, James Xue, and Adam Ripley.
              </p>
            </div>

            <div className="col-12 col-md-4">
              <p className="bold">
                Navigation
              </p>
              <ul className="clean-list">
                <li>
                  <a href="/" className="blue-gray-text">Home</a>
                </li>
                <li>
                  <a href="/about" className="blue-gray-text">About</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
