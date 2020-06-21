import React from "react";
import PropTypes from "prop-types";
import { hot } from "react-hot-loader";

const App = () => {
  return (
    <div className="App">
      <h1> Hello, World! </h1>
    </div>
  );
};

App.propTypes = {};

export default hot(module)(App);
