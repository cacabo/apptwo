import React, { Component } from "react";
import ResCol from './helper/ResCol';
import $ from 'jquery';

class PageContainer extends Component {
  componentDidMount() {
    $('.fade-in').delay(100).fadeIn(200);
  }

  render() {
    return (
      <ResCol>
        <div className="fade-in white shade-1 pad-2">
          <h2>File not found (404)!</h2>
          <p>
            Looks like the resource you were looking for is either moved or does not exist. If you're not logged in, that might be your issue.
          </p>
          <a href="/" className="btn purple shade-2 hover bold white-text">
            Back to home
          </a>
        </div>
      </ResCol>
    );
  }
}

export default PageContainer;
