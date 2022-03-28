/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './buttonStarter.css';

function ButtonStarter({ className, handleRandomStarter }) {
  const [show, setShow] = useState(false);

  // timer pour display différé du composant au chargement de la page uniquement
  useEffect(
    () => {
      setTimeout(() => setShow(true), 0);
    },
    [],
  );
  return show ? (
    <a href="#starter-ancre" className={className} type="button" onClick={handleRandomStarter}>
      Cook a starter
    </a>
  ) : '';
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
