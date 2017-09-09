import firebase from "firebase";
import ResCol from '../helper/ResCol';

import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = { username: "", password: "" };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        window.location = '/';
      }
    });
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
      <ResCol>
        <form onSubmit={this.handleSubmit}>
          <h2 className="marg-bot-1">Register</h2>

          <label>
            Email
          </label>
          <input
            type="email"
            className="form-control marg-bot-1"
            value={this.state.username}
            onChange={this.handleChangeUsername}
            required="true"
          />

          <label>
            Password
          </label>
          <input
            type="password"
            className="form-control marg-bot-2"
            value={this.state.password}
            onChange={this.handleChangePassword}
            required="true"
          />
          <input type="submit" className="btn purple bold shade-3 hover white-text bold" value="Submit" />

          <p className="marg-top-1 blue-gray-text">
            Already have an account? <a href="./login" className="purple-text">Log in here.</a>
          </p>
        </form>
      </ResCol>
    );
  }
}

export default Register;
