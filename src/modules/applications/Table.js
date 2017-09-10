import firebase from "firebase";
import React, { Component } from "react";
import Row from "./Row";
import $ from 'jquery';
import moment from 'moment';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applications: "",
    };
  }

  componentDidMount() {
    $('#search').focus(function() {
      $(this).prev('.fa').addClass('purple-text').removeClass('blue-gray-text');
    });

    $('#search').blur(function() {
      $(this).prev('.fa').removeClass('purple-text').addClass('blue-gray-text');
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
          applications
        });
      });
  }

  sortByDeadline() {
      let newApps = Object.assign({}, this.state.applications);
      const sortable = [];
      for(const key in newApps) {
        if (newApps.hasOwnProperty(key)) {
          sortable.push([key,newApps[key]]);
        }
      }
      sortable.sort((a,b) => {
        return moment(a[1].deadline).unix() - moment(b[1].deadline).unix();
      });
      const newAppObj = {};
      for (var i = 0; i < sortable.length; i++) {
        var key = sortable[i][0];
        var value = sortable[i][1];
        newAppObj[key] = value;
    }
    this.setState({
      applications: newAppObj
    });

  }

  sortByPosition() {
    let newApps = Object.assign({}, this.state.applications);
    const sortable = [];
    for(const key in newApps) {
      if (newApps.hasOwnProperty(key)) {
        sortable.push([key,newApps[key]]);
      }
    }
    sortable.sort((a,b) => {
      const x = a[1].title.toLowerCase();
      const y = b[1].title.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    const newAppObj = {};
    for (var i = 0; i < sortable.length; i++) {
      var key = sortable[i][0];
      var value = sortable[i][1];
      newAppObj[key] = value;
  }
  this.setState({
    applications: newAppObj
  });
  }

  sortByCompany() {
    let newApps = Object.assign({}, this.state.applications);
    const sortable = [];
    for(const key in newApps) {
      if (newApps.hasOwnProperty(key)) {
        sortable.push([key,newApps[key]]);
      }
    }
    sortable.sort((a,b) => {
      const x = a[1].company.toLowerCase();
      const y = b[1].company.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    const newAppObj = {};
    for (var i = 0; i < sortable.length; i++) {
      var key = sortable[i][0];
      var value = sortable[i][1];
      newAppObj[key] = value;
  }
  this.setState({
    applications: newAppObj
  });
  handleDelete(key) {
    const user = firebase.auth().currentUser;
    const database = firebase.database();
    const ref = database
      .ref(`users/${user.uid}/applications`)
      .child(key)
      .remove();
  }

  displayRow(key, count) {
    const application = this.state.applications[key];
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
          <div className="fade-in white round-1 shade-1 hover marg-bot-2 search-wrapper">
            <i className="fa fa-search fa-lg blue-gray-text"></i><input className="form-control" id="search" />
          </div>

          <div className="fade-in white round-1 shade-1">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th onClick={() => {this.sortByPosition()}}>Job Title</th>
                  <th onClick={() => {this.sortByCompany()}}>Company</th>
                  <th onClick={() => {this.sortByDeadline()}}>Deadline</th>
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
