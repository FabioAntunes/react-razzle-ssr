import React from 'react';
import PropTypes from 'prop-types';
import Route from 'react-router-dom/Route';

const Counter = ({
  increment,
  incrementIfOdd,
  decrement,
  counter,
}) => (
  <div>
    <p>
      Clicked: {counter} times
      {' '}
      <button onClick={increment}>+</button>
      {' '}
      <button onClick={decrement}>-</button>
      {' '}
      <button onClick={incrementIfOdd}>Increment if odd</button>
    </p>
    <Route path="/counter" render={() => <div>Home</div>}/>
  </div>
);

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
};

export { Counter };
