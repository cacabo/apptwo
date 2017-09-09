import React, { Component } from "react";
import $ from 'jquery';

class Home extends Component {
  componentDidMount() {
    $('.fade-in').delay(100).fadeIn(200);
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="fade-in white shade-1 pad-2 round-1">
            <h2>AppTwo</h2>
            <p>
              An application for applications. We make applying for jobs, clubs,
              and positions easier by organizing your information and allowing you
              to find the details that matter. Understand how far you are in each
              application, how much work there is to get done on your application,
              and who you've been put in contact with all in one place.
            </p>
            <p>
              Say goodbye to a map of excel sheets and word docs.
            </p>
            {
              (!this.props.isLoggedIn)
              ?
              <div className="marg-top-2 fade-in">
                <a href="/login" className="btn purple-text white bold shade-2 hover marg-right-1">
                  Login
                </a>
                <a href="/register" className="btn purple white-text bold shade-2 hover">
                  Register
                </a>
              </div>
              :
              ''
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
