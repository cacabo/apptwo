import firebase from "firebase";
import React, { Component } from "react";
import Row from "./Row";
import $ from "jquery";
import moment from "moment";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applications: "",
      relevantApps: "",
      isForwardDeadline: true,
      isForwardPosition: true,
      isForwardCompany: true,
      sortedByDeadline: false,
      sortedByPosition: false,
      sortedByCompany: false,
    };
  }
  componentDidMount() {
    $("#search").focus(function() {
      $(this)
        .prev(".fa")
        .addClass("purple-text")
        .removeClass("blue-gray-text");
    });

    $("#search").blur(function() {
      $(this)
        .prev(".fa")
        .removeClass("purple-text")
        .addClass("blue-gray-text");
    });

    $(".fade-in")
      .delay(100)
      .fadeIn(200);

    const user = firebase.auth().currentUser;
    const database = firebase.database();
    const ref = database
      .ref(`users/${user.uid}/applications`)
      .once("value")
      .then(snapshot => {
        const applications = snapshot.val();
        this.setState({
          applications,
          relevantApps: applications,
        });
      });
  }

  sortByDeadline() {
    let newApps = Object.assign({}, this.state.relevantApps);
    const sortable = [];
    for (const key in newApps) {
      if (newApps.hasOwnProperty(key)) {
        sortable.push([key, newApps[key]]);
      }
    }
      sortable.sort((a,b) => {
        if (this.state.isForwardDeadline) {
          return moment(a[1].deadline).unix() - moment(b[1].deadline).unix();
        } else {
          return moment(b[1].deadline).unix() - moment(a[1].deadline).unix();
        }
      });
      const newAppObj = {};
      for (var i = 0; i < sortable.length; i++) {
        var key = sortable[i][0];
        var value = sortable[i][1];
        newAppObj[key] = value;
    }
    this.setState({
      relevantApps: newAppObj,
      isForwardDeadline: !this.state.isForwardDeadline,
      sortedByDeadline: true,
      sortedByCompany: false,
      sortedByPosition: false,
    });
  }

  sortByPosition() {
    let newApps = Object.assign({}, this.state.relevantApps);
    const sortable = [];
    for (const key in newApps) {
      if (newApps.hasOwnProperty(key)) {
        sortable.push([key, newApps[key]]);
      }
    }
    sortable.sort((a, b) => {
      const x = a[1].title.toLowerCase();
      const y = b[1].title.toLowerCase();
      if (this.state.isForwardPosition) {
        return x < y ? -1 : x > y ? 1 : 0;
      } else {
        return y < x ? -1 : y > x ? 1 : 0;
      }
    });
    const newAppObj = {};
    for (var i = 0; i < sortable.length; i++) {
      var key = sortable[i][0];
      var value = sortable[i][1];
      newAppObj[key] = value;
  }
  this.setState({
    // applications: newAppObj,
    relevantApps: newAppObj,
    isForwardPosition: !this.state.isForwardPosition,
    sortedByDeadline: false,
    sortedByCompany: false,
    sortedByPosition: true,
  });
  }

  sortByCompany() {
    let newApps = Object.assign({}, this.state.relevantApps);
    const sortable = [];
    for (const key in newApps) {
      if (newApps.hasOwnProperty(key)) {
        sortable.push([key, newApps[key]]);
      }
    }
    sortable.sort((a, b) => {
      const x = a[1].company.toLowerCase();
      const y = b[1].company.toLowerCase();
      if (this.state.isForwardCompany) {
        return x < y ? -1 : x > y ? 1 : 0;
      } else {
        return y < x ? -1 : y > x ? 1 : 0;
      }
    });
    const newAppObj = {};
    for (var i = 0; i < sortable.length; i++) {
      var key = sortable[i][0];
      var value = sortable[i][1];
      newAppObj[key] = value;
    }
    this.setState({
      // applications: newAppObj,
      relevantApps: newAppObj,
      isForwardCompany: !this.state.isForwardCompany,
      sortedByDeadline: false,
      sortedByCompany: true,
      sortedByPosition: false,
    });
  }

  handleDelete(key) {
    const user = firebase.auth().currentUser;
    const database = firebase.database();
    const ref = database
      .ref(`users/${user.uid}/applications`)
      .child(key)
      .remove();
  }

  search(e) {
    console.log('searching', e);
    let allApps = Object.assign({}, this.state.applications);
    let relevantApps = {};
    const searchable = [];
    for(const key in allApps) {
      if (allApps[key].title.indexOf(e) !== -1 || allApps[key].company.indexOf(e) !== -1) {
          relevantApps[key] = allApps[key];
      }
    }
    console.log('rel', relevantApps);
    this.setState({
      relevantApps,
    });
  }

  checkPosition() {
    if (this.state.sortedByPosition) {
      return "purple white-text";
    } else {
      return "inactive";
    }
  }

  checkCompany() {
    console.log('checking comp');
    if (this.state.sortedByCompany) {
      return "purple white-text";
    } else {
      return "inactive";
    }
  }

  checkDeadline() {
    if (this.state.sortedByDeadline) {
      return "purple white-text";
    } else {
      return "inactive";
    }
  }

  displayRow(key, count) {
    const application = this.state.relevantApps[key];
    return (
      <Row
        key={key}
        id={key}
        counter={count}
        title={application.title}
        company={application.company}
        deadline={moment(application.deadline).format("ddd M/D/YY, h:mma")}
        onClick={() => this.handleDelete(key)}
      />
    );
  }



  displayRows() {
    var returnValue = [];
    var count = 1;
    for (const key in this.state.relevantApps) {
      returnValue.push(this.displayRow(key, count));
      count += 1;
    }
    return returnValue;
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="fade-in white round-1 shade-1 hover marg-bot-2 search-wrapper">
            <i className="fa fa-search fa-lg blue-gray-text"></i><input onChange={(e) => {this.search(e.target.value)}} className="form-control" id="search" />
          </div>

          <div className="fade-in white round-1 shade-1">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th className={this.checkPosition()} onClick={() => {this.sortByPosition()}}>Job Title</th>
                  <th className={this.checkCompany()} onClick={() => {this.sortByCompany()}}>Company</th>
                  <th className={this.checkDeadline()} onClick={() => {this.sortByDeadline()}}>Deadline</th>
                </tr>
              </thead>
              <tbody>{this.displayRows()}</tbody>
            </table>
          </div>
          <div className="space-1" />
          <a
            href="/applications/new"
            className="fade-in btn bold purple shade-2 hover white-text"
          >
            New application
          </a>
        </div>
      </div>
    );
  }
}

export default Table;
