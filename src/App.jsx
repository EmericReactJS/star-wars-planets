import React, { Component } from "react";
import { hot } from "react-hot-loader";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello, World! </h1>
      </div>
    );
  }
}

// eslint-disable-next-line no-undef
export default hot(module)(App);
