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
  return (
    <div className={className}>
      <h1>
        FOODER
      </h1>
      {show ? (
        <span id="citation">
          Don't know what to cook ? Build your own menu !
        </span>
      ) : <span>What kind of food do you want to cook today ? </span> }

    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: '',
};

export default React.memo(Header);
