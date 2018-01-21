import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Twitter search</h1>
        <p className="App-intro">
          Type something in the box below and you'll get suggestions!
        </p>
        <SearchBox 
          placeholder="Search for .."
          items={['React Vienna', 'React Finland', 'Jest', 'Enzyme', 'Reactjs']} />
      </div>
    );
  }
}

export default App;
