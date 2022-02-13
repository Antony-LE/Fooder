import React from 'react';
import PropTypes from 'prop-types';
import './cardDessert.css';

function CardDessert({
  className, sourcePix, title, summary,
}) {
  return (
    <div className={className}>
      <h2>Your Dessert :</h2>
      <h3>{title}</h3>
      <img src={sourcePix} alt="food dishes" />
      <span>{summary}</span>
    </div>
  );
}

CardDessert.propTypes = {
  className: PropTypes.string,
  sourcePix: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
};

CardDessert.defaultProps = {
  className: '',
  sourcePix: '',
  title: '',
  summary: '',
};

export default React.memo(CardDessert);
