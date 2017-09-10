import React, { Component } from "react";
import firebase from "firebase";
import $ from "jquery";
import moment from "moment";
import ApplicationHeader from "./ApplicationHeader";
import Notes from "./notes/Notes";

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      application: "",
    };
  }

  componentDidMount() {
    $(".fade-in")
      .delay(100)
      .fadeIn(200);

    const user = firebase.auth().currentUser;
    const database = firebase.database();
    const id = window.location.href.split('applications/')[1] + '';
    const ref = database
      .ref(`users/${user.uid}/applications/${id}`)
      .once("value")
      .then(snapshot => {
        const application = snapshot.val();
        this.setState({
          application
        });
      });
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <ApplicationHeader
            title={this.state.application.title}
            company={this.state.application.company}
            url={this.state.application.url}
            deadline={this.state.application.deadline}
          />

          <div className="row marg-top-1">
            <div className="col-12 col-lg-6">
              <Notes />
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Application;
