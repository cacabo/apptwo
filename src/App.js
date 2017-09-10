import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import firebase from "firebase";
import { firebaseApp } from "./firebase.js";
import $ from 'jquery'

// CSS
import "./css/strapper.min.css";
import "./css/App.css";

// Components
import Nav from "./modules/navbar/Nav";
import Footer from "./modules/footer/Footer";
import PageContainer from "./modules/PageContainer";
import Home from "./modules/Home";
import Application from "./modules/applications/Application";
import Table from "./modules/applications/Table";
import Login from "./modules/auth/Login";
import Register from "./modules/auth/Register";
import NotFound from "./modules/NotFound";
import User from "./modules/users/User";
import NewApplication from "./modules/applications/NewApplication";
import EditApplication from "./modules/applications/EditApplication";
import NewNote from "./modules/applications/notes/NewNote";

// Application
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: null,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isLoggedIn: !!user });
    });
  }

  routes() {
    if (this.state.isLoggedIn === null) {
      return (
        <PageContainer />
      );
    } else if (this.state.isLoggedIn) {
      return (
        <PageContainer>
          <Switch>
            <Route exact path="/" component={() => (<Home isLoggedIn={true} />)} />
            <Route exact path="/user" component={User} />
            <Route exact path="/applications" component={Table} />
            <Route exact path="/applications/:id/notes/new" component={NewNote} />
            <Route exact path="/applications/new" component={NewApplication} />
            <Route exact path="/applications/:id/edit" component={EditApplication} />
            <Route exact path="/applications/:id" component={Application} />
            <Route exact path="/register" component={() => {}} />
            <Route exact path="/login" component={() => {}} />
            <Route exact path="/404" component={NotFound} />
            <Route path='*' exact={true} component={NotFound} />
          </Switch>
        </PageContainer>
      );
    } else {
      return (
        <PageContainer>
          <Switch>
            <Route exact path="/" component={() => (<Home isLoggedIn={false} />)} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/404" component={NotFound} />
            <Route path='*' exact={true} component={NotFound} />
          </Switch>
        </PageContainer>
      );
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav isLoggedIn={this.state.isLoggedIn} />

          <div id="flash"></div>

          { this.routes() }

          <Footer isLoggedIn={this.state.isLoggedIn} />
        </div>
      </Router>
    );
  }
}

export default App;
