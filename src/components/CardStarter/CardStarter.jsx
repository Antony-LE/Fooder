import React from 'react';
import PropTypes from 'prop-types';
import './cardStarter.css';

function CardStarter({
  className, sourcePix, title, summary,
}) {
  return (
    <div className={className}>
      <h2>Your Starter :</h2>
      <h3>{title}</h3>
      <img src={sourcePix} alt="food dishes" />
      <span>{summary}</span>
    </div>
  );
}

CardStarter.propTypes = {
  className: PropTypes.string,
  sourcePix: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
};

CardStarter.defaultProps = {
  className: '',
  sourcePix: '',
  title: '',
  summary: '',
};

export default React.memo(CardStarter);
