/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import './cardDrink.css';
import DOMPurify from 'dompurify';

function CardDrink({
  className, sourcePix, title, summary, drinkPrice,
}) {
  // Purification de la props summary avec domPurify
  const purifiedSummary = summary;
  return (
    <div className={className}>
      <h2>Your Drink :</h2>
      <h3>{title}</h3>
      <img src={sourcePix} alt="food dishes" />
      <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(purifiedSummary) }} />
      <span id="drinkPrice">
        $
        {(drinkPrice / 100).toFixed(2)}
      </span>
      <hr />
    </div>
  );
}

CardDrink.propTypes = {
  className: PropTypes.string,
  sourcePix: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  drinkPrice: PropTypes.number,
};

CardDrink.defaultProps = {
  className: '',
  sourcePix: '',
  title: '',
  summary: '',
  drinkPrice: 0,
};

export default React.memo(CardDrink);
