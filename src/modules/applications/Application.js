import React, { Component } from "react";
import firebase from "firebase";
import $ from "jquery";

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
          <div className="fade-in white round-1 shade-1 pad-2">
            <h2>
              { this.state.application.title ? this.state.application.title : 'No title' }
            </h2>
            <p>
              { this.state.application.company ? this.state.application.company : 'No company' }
            </p>
            <p>
              { this.state.application.deadline ? this.state.application.deadline : 'No deadline' }
            </p>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Application;
