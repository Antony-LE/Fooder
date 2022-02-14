/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import './buttonDessert.css';

function ButtonDessert({ className, handleRandomDessert }) {
  return (
    <button className={className} type="button" onClick={handleRandomDessert}>Get a random dessert</button>
  );
}

ButtonDessert.propTypes = {
  className: PropTypes.string,
  handleRandomDessert: PropTypes.func,
};

ButtonDessert.defaultProps = {
  className: '',
  handleRandomDessert: '',
};

export default React.memo(ButtonDessert);
