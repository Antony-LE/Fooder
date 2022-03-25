import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './buttonBill.css';

function ButtonBill({ className, handleDisplayBill }) {
  const [show, setShow] = useState(false);
  // timer pour display différé du composant au chargement de la page uniquement
  useEffect(
    () => {
      setTimeout(() => setShow(true), 0);
    },
    [],
  );
  return show ? (
    <a href="#bill-ancre" className={className} type="button" onClick={handleDisplayBill}>Get the bill !</a>
  ) : '';
}

ButtonBill.propTypes = {
  className: PropTypes.string,
  handleDisplayBill: PropTypes.func,
};

ButtonBill.defaultProps = {
  className: '',
  handleDisplayBill: false,
};

export default React.memo(ButtonBill);
