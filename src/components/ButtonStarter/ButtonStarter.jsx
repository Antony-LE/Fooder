/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import './buttonStarter.css';

function ButtonStarter({ className, handleRandomStarter }) {
  return (
    <button className={className} type="button" onClick={handleRandomStarter}>Get a starter!</button>
  );
}

ButtonStarter.propTypes = {
  className: PropTypes.string,
  handleRandomStarter: PropTypes.func,
};

ButtonStarter.defaultProps = {
  className: '',
  handleRandomStarter: '',
};

export default React.memo(ButtonStarter);
