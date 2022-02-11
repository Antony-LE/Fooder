import React from 'react';
import PropTypes from 'prop-types';
import './cardStarter.css';

function CardStarter({
  className, sourcePix, title,
}) {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <img src={sourcePix} alt="food dishes" />
    </div>
  );
}

CardStarter.propTypes = {
  className: PropTypes.string,
  sourcePix: PropTypes.string,
  title: PropTypes.string,
};

CardStarter.defaultProps = {
  className: '',
  sourcePix: '',
  title: '',
};

export default React.memo(CardStarter);
