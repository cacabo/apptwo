import React, { Component } from "react";
import $ from 'jquery';

class Note extends Component {
  componentDidMount() {
    $('.fade-in').delay(100).fadeIn(200);
  }
  
  render() {
    return (
      <div className="fade-in white pad-2 round-1 shade-1">
        <h3>{ this.props.title }</h3>
        <p>{ this.props.body }</p>
      </div>
    );
  }
}

export default Note;
