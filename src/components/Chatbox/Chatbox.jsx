import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './chatbox.css';

function Chatbox({ className, sentence }) {
  const [show, setShow] = useState(false);
  // timer pour display différé du composant au chargement de la page uniquement
  useEffect(
    () => {
      setTimeout(() => setShow(true), 4400);
    },
    [],
  );

  return show ? (
    <span className={className}>{sentence}</span>
  ) : '';
}

Chatbox.propTypes = {
  className: PropTypes.string,
  sentence: PropTypes.string,
};

Chatbox.defaultProps = {
  className: '',
  sentence: '',
};

export default React.memo(Chatbox);
