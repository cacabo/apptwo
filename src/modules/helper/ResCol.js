import React, { Component } from "react";

class ResCol extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default ResCol;
