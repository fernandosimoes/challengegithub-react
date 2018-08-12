import React, { Component } from 'react';
import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import './App.css';
import 'bulma/css/bulma.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Cards} />
          <Route exact path="/commits/:name" component={List} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
