/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import './cardStarter.css';
import { fadeOut } from 'react-animations';
import DOMPurify from 'dompurify';

function CardStarter({
  className, sourcePix, title, summary, starterPrice,
}) {
  // Purification de la props summary avec domPurify
  const purifiedSummary = summary;
  return (
    <div className={className} style={fadeOut}>
      <h2>Your Starter :</h2>
      <h3>{title}</h3>
      <img src={sourcePix} alt="food dishes" />
      <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(purifiedSummary) }} />
      <span id="starterPrice">
        $
        {(starterPrice / 100).toFixed(2)}
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
