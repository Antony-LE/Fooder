import React from 'react';
import PropTypes from 'prop-types';
import './cardDrink.css';

function CardDrink({
  className, sourcePix, title, summary,
}) {
  return (
    <div className={className}>
      <h2>Your Drink :</h2>
      <h3>{title}</h3>
      <img src={sourcePix} alt="food dishes" />
      <span>{summary}</span>
    </div>
  );
}

CardDrink.propTypes = {
  className: PropTypes.string,
  sourcePix: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
};

CardDrink.defaultProps = {
  className: '',
  sourcePix: '',
  title: '',
  summary: '',
};

export default React.memo(CardDrink);
