import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './buttonDrink.css';

function ButtonDrink({ className, handleRandomDrink }) {
  const [show, setShow] = useState(false);
  // timer pour display différé du composant au chargement de la page uniquement
  useEffect(
    () => {
      setTimeout(() => setShow(true), 4400);
    },
    [],
  );
  return show ? (
    <a href="#drink-ancre" className={className} onClick={handleRandomDrink} type="button">Get Drink</a>
  ) : '';
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
