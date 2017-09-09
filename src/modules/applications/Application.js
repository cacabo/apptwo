import React, { Component } from "react";

class Application extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h2>Job title</h2>
          <p>Company name</p>
          <p>Location</p>
          <p>Status</p>
        </div>
      </div>
    );
  }
}

export default Application;
