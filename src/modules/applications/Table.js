import firebase from "firebase";
import React, { Component } from "react";
import Row from "./Row";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applications: ""
    };
  }
  componentDidMount() {
    const user = firebase.auth().currentUser;
    const database = firebase.database();
    const ref = database
      .ref(`users/${user.uid}/applications`)
      .once("value")
      .then(snapshot => {
        const applications = snapshot.val();
        console.log(applications);
        this.setState({
          applications
        });
      });
  }

  displayRow(key, count) {
    const application = this.state.applications[key];
    console.log("app", application);
    return (
      <Row
        key={key}
        id={count}
        title={application.title}
        company={application.company}
        deadline={application.deadline}
      />
    );
  }

  displayRows() {
    var returnValue = [];
    var count = 1;
    for (const key in this.state.applications) {
      returnValue.push(this.displayRow(key, count));
      count += 1;
    }
    return returnValue;
  }

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
              <tbody>{this.displayRows()}</tbody>
            </table>
          </div>

          <a
            href="/applications/new"
            className="btn bold purple shade-2 hover white-text marg-top-1"
          >
            New application
          </a>
        </div>
      </div>
    );
  }
}

export default Table;
