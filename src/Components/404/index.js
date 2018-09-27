import React from 'react';
import {Link} from 'react-router-dom';
import classes from './styles.css';

const NotFound = (props) => {
  return (
    <div className={classes.Container}>
      <header className={classes.Container__Header}>
        <h1 className={classes.Container__HeaderText}>404</h1>
        <h2 className={classes.Container__SubHeaderText}>Page not found.</h2>
        <Link to='/' className={classes.Container__Link}>Home</Link>
      </header>
    </div>
  );
}
export default NotFound;
