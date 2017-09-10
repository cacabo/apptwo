import React, { Component } from "react";
import ResCol from "../../helper/ResCol";
import $ from 'jquery';
import autosize from 'autosize';

class NewNote extends Component{
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeBody = this.handleChangeBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    $('.fade-in').delay(100).fadeIn(200);

    autosize($('textarea'));
  }

  handleChangeTitle(event) {
    this.setState({title: event.target.value });
  }

  handleChangeBody(event) {
    this.setState({body: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <ResCol>
        <div className="fade-in white pad-2 shade-1 round-1">
          <form onSubmit={this.handleSubmit}>
            <h2 className="marg-bot-1">New note</h2>

            <label>Title</label>
            <input
              type="text"
              className="form-control marg-bot-1"
              value={this.state.title}
              onChange={this.handleChangeTitle}
              required="true"
            />

            <label>Body</label>
            <textarea
              name="body"
              className="form-control marg-bot-1 autosize"
              value={this.state.body}
              onChange={this.handleChangeBody}
              rows="1"
            />

            <input
              type="submit"
              className={
                this.state.title.length ? (
                  "btn white shade-3 hover cursor white-text purple bold"
                ) : (
                  "disabled btn white shade-3 hover cursor white-text purple bold"
                )
              }
              value="Create note"
            />
          </form>
        </div>
      </ResCol>
    );
  }
}

export default NewNote;
