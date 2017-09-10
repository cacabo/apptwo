import React, { Component } from "react";
import Note from "./Note";

class Notes extends Component {
  renderNotes() {
    if (this.props.children && this.props.children.length) {
      <Note
        title="hi there"
        body="hows it going my friend"
      />
    } else {
      return (
        <div className="fade-in white round-1 pad-2 shade-1"></div>
      );
    }
  }

  render() {
    return (
      <div className="notes">
        <p className="blue-gray-text bold marg-top-2">NOTES</p>

        <a className="circle purple new-note shade-3 hover no-decoration" href={window.location + '/notes/new'}>
          <i className="fa fa-plus fa-2x white-text no-decoration"></i>
        </a>

        { this.renderNotes() }
      </div>
    );
  }
}

export default Notes;
