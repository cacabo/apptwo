import firebase from "firebase";
import React, { Component } from "react";
import ResCol from "../helper/ResCol";
import $ from "jquery";

class EditApplication extends Component {
  constructor(props) {
    super(props);
    const id = window.location.split("application/")[1].split("/edit")[0];
    const user = firebase.auth().currentUser;
    const database = firebase.database();
    const ref = database
      .ref(`users/${user.uid}/applications/${id}`)
      .once("value")
      .then(snapshot => {
        const application = snapshot.val();
        this.setState({
          application
        });
      });

    this.state = { title: "" + this.state.application.title , company: "" + this.state.application.company, deadline: ""
   + this.state.application.deadline };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeCompany = this.handleChangeCompany.bind(this);
    this.handleChangeDeadline = this.handleChangeDeadline.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    $('.fade-in').delay(100).fadeIn(200);

    $('.form-control').focus(function() {
      $(this).prev('label').addClass('purple-text');
    });

    $('.form-control').blur(function() {
      $(this).prev('label').removeClass('purple-text');
    });
  }

  handleChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  handleChangeCompany(event) {
    this.setState({ company: event.target.value });
  }

  handleChangeDeadline(event) {
    this.setState({ deadline: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = firebase.auth().currentUser;
    firebase
      .database()
      .ref(`users/${user.uid}/applications`)
      .set({
        title: this.state.title,
        company: this.state.company,
        deadline: this.state.deadline
      })
      .then(() => {
        window.location = "/applications";
      })
      .catch(error => {
        alert(error.message);
        console.log(
          "Error editing with firebase",
          error.code,
          error.message
        );
      });
  }

  render() {
    return (
      <ResCol>
        <div className="fade-in white pad-2 shade-1 round-1">
          <form onSubmit={this.handleSubmit}>
            <h2 className="marg-bot-1">Edit application</h2>

            <label>Position Title</label>
            <input
              type="text"
              className="form-control marg-bot-1"
              value={this.state.title}
              onChange={this.handleChangeTitle}
              required="true"
            />

            <label>Company</label>
            <input
              type="text"
              className="form-control marg-bot-1"
              value={this.state.company}
              onChange={this.handleChangeCompany}
              required="true"
            />

            <label>Deadline</label>
            <input
              type="datetime-local"
              className="form-control marg-bot-1"
              value={this.state.deadline}
              onChange={this.handleChangeDeadline}
            />

            <input
              type="submit"
              className={
                this.state.title.length && this.state.company.length ? (
                  "btn white shade-3 hover cursor white-text purple bold"
                ) : (
                  "disabled btn white shade-3 hover cursor white-text purple bold"
                )
              }
              value="Edit application"
            />
          </form>
        </div>
      </ResCol>
    );
  }
}

export default EditApplication;
