import firebase from "firebase";
import React, { Component } from "react";
import ResCol from "../helper/ResCol";
import $ from "jquery";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { title: "", company: "", deadline: "" };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeCompany = this.handleChangeCompany.bind(this);
    this.handleChangeDeadline = this.handleChangeDeadline.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
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
    // TODO
  }

  render() {
    return (
      <ResCol>
        <div className="white pad-2 shade-1 round-1">
          <form onSubmit={this.handleSubmit}>
            <h2 className="marg-bot-1">New application</h2>

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
                this.state.title.length && this.state.company.length ?
                  "btn white shade-3 hover cursor white-text purple bold" :
                  "disabled btn white shade-3 hover cursor white-text purple bold"
              }
              value="Create application"
            />
          </form>
        </div>
      </ResCol>
    );
  }
}

export default Login;
