import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './footer.css';

function Footer({ className, textContent }) {
  const [show, setShow] = useState(false);
  // timer pour display différé du composant au chargement de la page uniquement
  useEffect(
    () => {
      setTimeout(() => setShow(true), 4000);
    },
    [],
  );
  return show ? (
    <div className={className}>
      <h4>
        {textContent}
      </h4>
    </div>
  ) : '';
}

Footer.propTypes = {
  className: PropTypes.string,
  textContent: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
  textContent: '',
};

export default React.memo(Footer);
