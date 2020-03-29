import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home/home';
import About from './components/About/about';
import ContactUs from './components/Contact/contactUs';
import Users from './components/Users/usersComponent';

function Routes() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={ContactUs} />
      <Route path="/users" component={Users} />
    </Router>
  );
}

export default Routes;