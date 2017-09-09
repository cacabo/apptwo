import React, { Component } from "react";
import $ from 'jquery';

class Home extends Component {
  componentDidMount() {
    $('.fade-in').delay(100).fadeIn(200);
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="fade-in white shade-1 pad-2 round-1">
            <h2>
              Learn about AppTwo
            </h2>
            <p>
              An app to make applications easier.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
