import React, { Component } from 'react';
import './App.css';
import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";
import 'bulma/css/bulma.css'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <List />
        <Footer />
      </div>
    );
  }
}

export default App;
