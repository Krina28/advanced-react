import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './home';
import About from './About/about';

function Routes() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  );
}

export default Routes;