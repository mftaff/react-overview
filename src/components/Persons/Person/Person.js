import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElRef = React.createRef();
  }

  componentDidMount() {
    // this.inputEl.focus();
    this.inputElRef.current.focus();
  }

  render() {
    console.log('[Person.js] rendering...')
    return (
      <React.Fragment>
        <AuthContext.Consumer>
          {(context) =>
            context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>
          }
        </AuthContext.Consumer>
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElRef}
          // ref={(el) => { this.inputEl = el }}
          type="text"
          onChange={this.props.changed}
          value={this.props.name} />
      </React.Fragment>
    )
  }
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  click: PropTypes.func,
  changed: PropTypes.func,

};

export default withClass(Person, classes.Person);
