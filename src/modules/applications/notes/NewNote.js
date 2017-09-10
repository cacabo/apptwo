import React, { Component } from "react";
import ResCol from "../../helper/ResCol";

class NewNote extends Component{
  constructor(props) {
    super(props);
    this.state = {
      title: "", body: ""
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

            <textarea
              name="body"
              onChange={this.handleChangeBody}
              value={this.state.body}
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
