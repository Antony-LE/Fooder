/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './buttonJoke.css';

function ButtonJoke({ className, handleRandomJoke }) {
  const [show, setShow] = useState(false);
  // timer pour display différé du composant au chargement de la page uniquement
  useEffect(
    () => {
      setTimeout(() => setShow(true), 3500);
    },
    [],
  );
  return show ? (
    <a href="#joke-ancre" className={className} type="button" onClick={handleRandomJoke}>Tell me a joke instead !</a>
  ) : '';
}

ButtonJoke.propTypes = {
  className: PropTypes.string,
  handleRandomJoke: PropTypes.func,
};

ButtonJoke.defaultProps = {
  className: '',
  handleRandomJoke: '',
};

export default React.memo(ButtonJoke);
