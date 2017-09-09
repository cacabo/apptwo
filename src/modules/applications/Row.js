import React, { Component } from "react";

class Row extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.title}</td>
        <td>{this.props.company}</td>
        <td>{this.props.deadline}</td>
      </tr>
    );
  }
}

export default Row;
