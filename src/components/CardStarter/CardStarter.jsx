/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './cardStarter.css';
import { fadeOut } from 'react-animations';
import DOMPurify from 'dompurify';

function CardStarter({
  className, sourcePix, title, summary, starterPrice,
}) {
  const [readMore, setReadMore] = useState(false);

  function handleReadMore() {
    setReadMore(!readMore);
    console.log(readMore);
  }

  // Purification de la props summary avec domPurify
  const purifiedSummary = summary;
  return (
    <div className={className} style={fadeOut}>
      <hr />
      <h2>Your Starter :</h2>
      <h3>{title}</h3>
      <img src={sourcePix} alt="food dishes" />
      {readMore === false ? <span className="card-starter-readLess" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(purifiedSummary) }} />
        : <span className="card-starter-readMore" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(purifiedSummary) }} /> }
      <button type="button" className="readmore" onClick={handleReadMore}>
        {' '}
        {readMore === false ? 'Read more...' : 'Read less' }
      </button>
      <span id="starterPrice">
        $
        {(starterPrice / 100).toFixed(2)}
        {' '}
        / serving
      </span>
      <hr />
    </div>
  );
}

CardStarter.propTypes = {
  className: PropTypes.string,
  sourcePix: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  starterPrice: PropTypes.number,
};

CardStarter.defaultProps = {
  className: '',
  sourcePix: '',
  title: '',
  summary: '',
  starterPrice: 0,
};

export default React.memo(CardStarter);
