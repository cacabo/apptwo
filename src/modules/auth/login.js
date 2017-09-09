import firebase from "firebase";
import React, { Component } from "react";

class Login extends Component {
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
    // alert("A name was submitted: " + this.state.username);
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.username, this.state.password)
      .catch(error => {
        if (error) {
          alert(error.message);
        } else {
          console.log("in else");
        }
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Login</h2>

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
        <input type="submit" className="btn white shade-3 hover cursor white-text purple bold" value="Submit" />

        <p className="blue-gray-text marg-top-1">
          Don't have an account? <a href="./register" className="purple-text">Register here.</a>
        </p>
      </form>
    );
  }
}

export default Login;
