import React, { Component } from 'react';
import {
 BrowserRouter as Router,
 Route,
 Link
} from 'react-router-dom'
import './css/strapper.min.css';
import './css/App.css';

// Components
import Nav from './modules/navbar/Nav';
import Footer from './modules/footer/Footer';
import PageContainer from './modules/PageContainer';
import Home from './modules/Home';
import About from './modules/About';

// Application
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <h1>Im gayyyyyy</h1>
          <PageContainer>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
          </PageContainer>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
