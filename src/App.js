import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import firebase from "firebase";

import "./css/strapper.min.css";
import "./css/App.css";

// Components
import Nav from "./modules/navbar/Nav";
import Footer from "./modules/footer/Footer";
import PageContainer from "./modules/PageContainer";
import Home from "./modules/Home";
import About from "./modules/About";
import Application from "./modules/applications/Application";
import Table from "./modules/applications/Table";
import Login from "./modules/auth/Login";
import Register from "./modules/auth/Register";

// Application
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />

          <PageContainer>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/application" component={Application} />
            <Route exact path="/applications" component={Table} />
          </PageContainer>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
