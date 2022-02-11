import React from 'react';
import PropTypes from 'prop-types';
import './header.css';

function Header({ className }) {
  return (
    <div className={className}>
      <span>
        Hello, tu ne sais pas quoi commander ce soir?
        Tu as envie de cuisiner mais tu ne sais pas quoi?
        Ou alors tu veux juste regarder de belles photos de plats ?
        Clique sur le bouton ci-dessous !!
      </span>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: '',
};

export default Header;
