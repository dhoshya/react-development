import React, { Component, useState } from 'react';
import Person from './Person/Person';
import logo from './logo.svg';
import './App.css';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name:"Rohan", age: 25},
      { name: "Chris", age: 57}
    ],
  },);

  const handleSwitchName = () => {
    // this.state.persons[0].name = "Dhoshya"
    // This is the wrong way, use setState()
    setPersonsState({
      persons: [
        { name:"Dhoshya", age: 25},
        { name: "Chris", age: 48}
      ],
    }); 
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        This is really  working.
      </p>
      <button onClick={handleSwitchName}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}>
        My Hobbies: Racing
      </Person>
    </div>
  );
}

export default App;

// state is managed from inside of the component
// if state or props are changed, react re-renders the component.
// state = {
//
// }
