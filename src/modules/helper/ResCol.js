import React, { Component } from "react";

class ResCol extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default ResCol;
