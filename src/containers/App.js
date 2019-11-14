import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  // This really happens inside of constructor() but es6 allows this shorthand syntax
  state = {
    persons: [
      { id: 'asdf', name: 'Max', age: 28 },
      { id: 'asdg', name: 'Manu', age: 26 },
      { id: 'asdh', name: 'Meyer', age: 24 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromLogs', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  // getSnapshotBeforeUpdate() {
  //   // happens before shouldComponentUpdate
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => { return p.id === id });
    const persons = [...this.state.persons];
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />;
    }

    return (
      <React.Fragment>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler} />
        {persons}
      </React.Fragment>
    );
  }
}

export default withClass(App, classes.App);
