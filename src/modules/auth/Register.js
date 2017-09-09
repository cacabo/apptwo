import firebase from "firebase";
import ResCol from "../helper/ResCol";

import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        window.location = "/";
      }
    });
  }

  handleChangeUsername(event) {
    this.setState({ username: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let noErr = true;
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.username, this.state.password)
      .catch(error => {
        noErr = false;
        alert(error.message);
        console.log(
          "Error registering with firebase",
          error.code,
          error.message
        );
      })
      .then(() => {
        if (noErr) {
          const user = firebase.auth().currentUser;
          firebase
            .database()
            .ref(`/users/${user.uid}`)
            .set({
              applications: {
                1: {
                  title: "Job Title",
                  company: "Company",
                  deadline: "Tomorrow :O"
                }
              }
            });
        }
      })
      .catch(error => {
        alert(error.message);
        console.log(
          "Error registering with firebase",
          error.code,
          error.message
        );
      });
  }
  render() {
    return (
      <ResCol>
        <div className="white shade-1 round-1 pad-2">
          <form onSubmit={this.handleSubmit}>
            <h2 className="marg-bot-1">Register</h2>

            <label>Email</label>
            <input
              type="email"
              className="form-control marg-bot-1"
              value={this.state.username}
              onChange={this.handleChangeUsername}
              required="true"
            />

            <label>Password</label>
            <input
              type="password"
              className="form-control marg-bot-1"
              value={this.state.password}
              onChange={this.handleChangePassword}
              required="true"
            />
            <input
              type="submit"
              className={
                this.state.password.length && this.state.username.length ? (
                  "btn white shade-3 hover cursor white-text purple bold"
                ) : (
                  "disabled btn white shade-3 hover cursor white-text purple bold"
                )
              }
              value="Register"
            />

            <p className="marg-top-2 blue-gray-text marg-bot-0">
              Already have an account?{" "}
              <a href="./login" className="purple-text">
                Log in here.
              </a>
            </p>
          </form>
        </div>
      </ResCol>
    );
  }
}

export default Register;
