import React, { Component } from "react";

class Note extends Component {
  render() {
    return (
      <div className="white pad-2 round-1 shade-1">
        <h3>{ this.props.title }</h3>
        <p>{ this.props.body }</p>
      </div>
    );
  }
}

export default Note;
