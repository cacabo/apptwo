import React, { Component } from "react";

class Application extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h2>
            { this.props.title ? this.props.title : 'No title' }
          </h2>
          <p>
            { this.props.company ? this.props.company : 'No company' }
          </p>
          <p>
            { this.props.deadline ? this.props.deadline : 'No deadline' }
          </p>
        </div>
      </div>
    );
  }
}

export default Application;
