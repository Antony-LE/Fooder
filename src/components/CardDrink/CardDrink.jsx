/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './cardDrink.css';
import DOMPurify from 'dompurify';

function CardDrink({
  className, sourcePix, title, summary, drinkPrice,
}) {
  const [readMore, setReadMore] = useState(false);

  function handleReadMore() {
    setReadMore(!readMore);
    console.log(readMore);
  }
  // Purification de la props summary avec domPurify
  const purifiedSummary = summary;
  return (
    <div className={className}>
      <h2>Your Drink :</h2>
      <h3>{title}</h3>
      <img src={sourcePix} alt="food dishes" />
      {readMore === false ? <span className="card-starter-readLess" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(purifiedSummary) }} />
        : <span className="card-starter-readMore" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(purifiedSummary) }} /> }
      <button type="button" className="readmore" onClick={handleReadMore}>
        {' '}
        {readMore === false ? 'Read more...' : 'Read less' }
      </button>
      <span id="drinkPrice">
        $
        {(drinkPrice / 100).toFixed(2)}
        {' '}
        / serving
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
