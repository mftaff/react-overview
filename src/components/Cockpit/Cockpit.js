import React, { useEffect, useRef } from 'react';

import classes from './Cockpit.css';

const cockpit = props => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    toggleBtnRef.current.click();
  }, []);

  // useEffect(() => {
  //   console.log('[Cockpit.js] useEffect');
  //   // HTTP requests from here = OK
  //   setTimeout(() => {
  //     alert('Saved data to cloud.');
  //   }, 1000);
  //   return () => {
  //     console.log('[Cockpit.js] use to do cleanup work on functional component');
  //   };
  // // }, [props.persons]); // use to limit it to when this data is touched
  // }, []); // use for on create only

  // useEffect()

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(cockpit);
