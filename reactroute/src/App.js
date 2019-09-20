import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import './App.css';
import TopicsPage from './components/TopicsPage';

function App() {
  return (
    <div>
      <Router>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/topics'>Topics</Link></li>
        </ul>
        
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path='/topics' component={TopicsPage} />
      </Router>
      <hr/>
      <a href="/about">about with browser reload</a>
    </div>
  );
}

export default App;
