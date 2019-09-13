import React, { Component } from 'react'
import './App.css';
// import Form from './components/Form';
import LifecycleA from './components/LifecycleA';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Form />*/}
        <LifecycleA />
      </div>
    )
  }
}

export default App

