import React, { Component } from "react";
import Row from './Row';

class Table extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="white round-1 shade-1">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Job Title</th>
                  <th>Company</th>
                  <th>Deadline</th>
                </tr>
              </thead>
              <tbody>
                <Row
                  id="1"
                  title="Product Management and Analytics Intern"
                  company="Capital One"
                  deadline="9/9/17"
                />
                <Row
                  id="2"
                  title="Business Analyst Intern"
                  company="CB Insights"
                  deadline="9/12/17"
                />
                <Row
                  id="3"
                  title="Software Engineering Intern"
                  company="Honey"
                  deadline="9/30/17"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
