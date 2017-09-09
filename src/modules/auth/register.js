import * as firebase from "firebase";
import { firebaseApp } from "../../firebase.js";

import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeUsername(event) {
    console.log(event.target.value);
    this.setState({ username: event.target.value });
  }
  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.username, this.state.password)
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
      <form onSubmit={this.handleSubmit}>
        <h2>Register</h2>

        <label>
          Username
        </label>
        <input
          type="text"
          className="form-control marg-bot-1"
          value={this.state.username}
          onChange={this.handleChangeUsername}
        />

        <label>
          Password
        </label>
        <input
          type="text"
          className="form-control marg-bot-2"
          value={this.state.password}
          onChange={this.handleChangePassword}
        />
        <input type="submit" className="btn purple bold shade-3 hover white-text bold" value="Submit" />

        <p className="marg-top-1 blue-gray-text">
          Already have an account? <a href="./login" className="purple-text">Log in here.</a>
        </p>
      </form>
    );
  }
}

export default Register;
