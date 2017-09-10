import React, { Component } from "react";
import moment from "moment";

class ApplicationHeader extends Component {
  render() {
    return (
      <div className="fade-in white round-1 shade-1 pad-2">
        <h2>
          { this.props.title ? this.props.title : 'No title' }
        </h2>
        <p>
          { this.props.company ? this.props.company : 'No company' }
        </p>
        <p>
          <strong>Deadline:</strong> { moment(this.props.deadline).format("ddd M/D/YY, h:mma") }
        </p>
        {
          this.props.url && this.props.url.length ? (
            <a href={this.props.url} target="_blank" className="btn white bold shade-3 hover purple-text">
              View application online
            </a>
          ) : ('')
        }
      </div>
    );
  }
}

export default ApplicationHeader;
