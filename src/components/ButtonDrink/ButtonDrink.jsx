import React from 'react';
import PropTypes from 'prop-types';
import './buttonDrink.css';

function ButtonDrink({ className, handleRandomDrink }) {
  return (
    <button className={className} onClick={handleRandomDrink} type="button">Get a Drink!</button>
  );
}

ButtonDrink.propTypes = {
  className: PropTypes.string,
  handleRandomDrink: PropTypes.func,
};

ButtonDrink.defaultProps = {
  className: '',
  handleRandomDrink: '',
};

export default React.memo(ButtonDrink);
