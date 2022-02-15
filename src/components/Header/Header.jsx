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
      <span id="citation">
        "For those who don't have money but still wanna look classy". Antony LE
      </span>
      <hr />
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
