import React, { Component } from "react";

class Row extends Component {
  render() {
    return (
      <tr className="table-row">
        <td>{this.props.counter}</td>
        <td>
          <a
            className="purple-text"
            href={"/applications/" + this.props.id}
          >
            {this.props.title}
          </a>
        </td>
        <td>{this.props.company}</td>
        <td>{this.props.deadline}</td>
        <td>
          <div className="btn-group">
            <a className="" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="cursor fa fa-lg fa-ellipsis-v"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" href="#"><i className="fa fa-pencil"></i> Edit</a>
              <a className="dropdown-item" href="#"><i className="fa fa-times"></i> Delete</a>
            </div>
          </div>
        </td>
      </tr>
    );
  }
}

export default Row;
