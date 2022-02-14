import React from 'react';
import PropTypes from 'prop-types';
import './footer.css';

function Footer({ className }) {
  return (
    <div className={className}>
      <h4>
        Bon Appétit !
      </h4>
    </div>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
};

export default React.memo(Footer);
