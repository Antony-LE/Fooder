/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import './header.css';

function Header({ className }) {
  return (
    <div className={className}>
      <h1>
        Today's Special
      </h1>
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
