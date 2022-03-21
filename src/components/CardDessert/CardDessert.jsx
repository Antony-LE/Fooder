/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './cardDessert.css';
import DOMPurify from 'dompurify';

function CardDessert({
  className, sourcePix, title, summary, dessertPrice,
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
      <h2>Your Dessert :</h2>
      <h3>{title}</h3>
      <img src={sourcePix} alt="food dishes" />
      {readMore === false ? <span className="card-dessert-readLess" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(purifiedSummary) }} />
        : <span className="card-dessert-readMore" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(purifiedSummary) }} /> }
      <button type="button" className="readmore" onClick={handleReadMore}>
        {' '}
        {readMore === false ? 'Read more...' : 'Read less' }
      </button>
      <span id="dessertPrice">
        $
        {(dessertPrice / 100).toFixed(2)}
        {' '}
        / serving
      </span>
      <hr />
    </div>
  );
}

CardDessert.propTypes = {
  className: PropTypes.string,
  sourcePix: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  dessertPrice: PropTypes.number,
};

CardDessert.defaultProps = {
  className: '',
  sourcePix: '',
  title: '',
  summary: '',
  dessertPrice: 0,
};

export default React.memo(CardDessert);
