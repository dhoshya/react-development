import React, { Component } from 'react';
import Person from './Person/Person';
import logo from './logo.svg';
import './App.css';
import './Person/Person.css'

// const StyledButton = styled.button`
//   background-color: ${ props => props.alt ? 'red' : 'green'};
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;
//
//   &:hover {
//     background-color: ${ props => props.alt ? 'salmon' : 'lightgreen'};
//     color: black;
//   }
//   `;

class App extends Component {
  // state is managed from inside of the component
  // if state or props are changed, react re-renders the component
  state = {
    persons: [
      { id:0, name:"Rohan", age: 25},
      { id:1, name: "Chris", age: 57},
      { id:2, name: "Nick", age: 32},
    ],
    showPersons: false,
  }

  togglePersonHandler = (newName) => {
    const show = this.state.showPersons;
    this.setState({
      showPersons: !show
    });
  };

  handleNameChange = (event, id) => {

    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  handleChange = (event) => {
    this.setState({
      persons: [
        { name:"Dhoshya", age: 25},
        { name: event.target.value, age: 48}
      ],
    });
  };

  handleDeletePerson = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1)
    this.setState({ persons: persons });
  };

  render() {

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
          return <Person
            click={() => this.handleDeletePerson(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.handleNameChange(event, person.id)}
            />
        })}
        </div>
      );
    }

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <=1) {
      classes.push('bold');
    }


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className={classes.join(' ')}>
          This is really  working.
        </p>
        <button
          alt={this.state.showPersons}
          onClick={this.togglePersonHandler}>Toggle Person
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
