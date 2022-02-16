/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './buttonDessert.css';

function ButtonDessert({ className, handleRandomDessert }) {
  const [show, setShow] = useState(false);
  // timer pour display différé du composant au chargement de la page uniquement
  useEffect(
    () => {
      setTimeout(() => setShow(true), 3700);
    },
    [],
  );
  return show ? (
    <a href="#dessert-ancre" className={className} type="button" onClick={handleRandomDessert}>Get a dessert</a>
  ) : '';
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
