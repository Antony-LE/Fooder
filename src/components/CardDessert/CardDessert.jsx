import React from 'react';
import PropTypes from 'prop-types';
import './cardDessert.css';

function CardDessert({
  className, sourcePix, title,
}) {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <img src={sourcePix} alt="food dishes" />
    </div>
  );
}

CardDessert.propTypes = {
  className: PropTypes.string,
  sourcePix: PropTypes.string,
  title: PropTypes.string,
};

CardDessert.defaultProps = {
  className: '',
  sourcePix: '',
  title: '',
};

export default React.memo(CardDessert);
