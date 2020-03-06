import React from 'react';
import './Home.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'

export default () => {
  return (
    <Router>
      <div className="App">
        <Routes/>
      </div>
    </Router>
  );
}