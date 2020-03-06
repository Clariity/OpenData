import React from 'react';
import './Home.css';
import { HashRouter as Router } from 'react-router-dom'
import Routes from './Routes'

export default () => {
  return (
    <Router basename='/'>
      <div className="App">
        <Routes/>
      </div>
    </Router>
  );
}