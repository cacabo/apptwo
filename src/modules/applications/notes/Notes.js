import firebase from "firebase";
import React, { Component } from "react";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: ""
    };
  }

  componentDidMount() {
    const user = firebase.auth().currentUser;
    const database = firebase.database();
    const id = window.location.href
      .split("applications/")[1]
      .split("/notes")[0];
    firebase
      .database()
      .ref(`users/${user.uid}/applications/${id}/notes`)
      .once("value")
      .then(snapshot => {
        const notes = snapshot.val();
        this.setState({
          notes
        });
        console.log(notes);
      });
  }

  displayNote(key, count) {
    // const note = this.state.notes[key];
    // return (
    //   <Row
    //     key={key}
    //     id={key}
    //     counter={count}
    //     title={note.title}
    //     body={note.body}
    //   />
    // );
  }

  displayNotes() {
    var returnValue = [];
    var count = 1;
    for (const key in this.state.notes) {
      returnValue.push(this.displayNote(key, count));
      count += 1;
    }
    return returnValue;
  }

  renderNotes() {
    if (this.props.notes && this.props.notes.length) {
      <div className="fade-in white round-1 pad-2 shade-1">Stuff</div>;
      console.log("There are notes");
    } else {
      return <div className="fade-in white round-1 pad-2 shade-1" />;
    }
  }

  render() {
    return (
      <div className="notes">
        <p className="blue-gray-text bold marg-top-2">NOTES</p>

        <a
          className="circle purple new-note shade-3 hover no-decoration"
          href={window.location + "/notes/new"}
        >
          <i className="fa fa-plus fa-2x white-text no-decoration" />
        </a>

        {this.renderNotes()}
      </div>
    );
  }
}

export default Notes;
