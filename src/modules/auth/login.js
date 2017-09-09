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
          noErr = false;
          alert(error.message);
        } else {
          console.log("in else");
        }
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Register</h1>

        <label>
          Username:
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleChangeUsername}
          />
          Password:
          <input
            type="text"
            value={this.state.password}
            onChange={this.handleChangePassword}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Login;
