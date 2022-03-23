/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './header.css';

function Header({ className }) {
  const [show, setShow] = useState(true);
  // timer pour display différé du composant au chargement de la page uniquement
  useEffect(
    () => {
      setTimeout(() => setShow(false), 3500);
    },
    [],
  );
  return show ? (
    <div className={className}>
      <h1>
        Today's Special
      </h1>
      <span id="citation">
        Don't know what to eat ? Build your own menu !
      </span>
    </div>
  ) : '';
}

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: '',
};

export default React.memo(Header);
