import React, { Component } from 'react';
import './css/strapper.min.css';
import './css/App.css';
import Nav from './modules/Nav';
import Footer from './modules/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />

        <div className="container min-height">
          <div className="space-2"></div>
          <h2>
            Welcome to AppTwo
          </h2>
          <p>
            This is lit as fucking balls.
          </p>
          <div className="space-2"></div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
