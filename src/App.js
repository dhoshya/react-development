import React, { Component } from 'react';
import Person from './Person/Person';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // state is managed from inside of the component
  state = {
    persons: [
      { name:"Rohan", age: 25},
      { name: "Chris", age: 57}
    ],
  }

  handleSwitchName = () => {
    console.log("Was Clicked");
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          This is really  working.
        </p>
        <button onClick={this.handleSwitchName}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}>
          My Hobbies: Racing
        </Person>
      </div>
    );
  }
}

export default App;
