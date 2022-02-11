import React from 'react';
import PropTypes from 'prop-types';
import './cardDrink.css';

function CardDrink({
  className, sourcePix, title,
}) {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <img src={sourcePix} alt="food drink" />
    </div>
  );
}

CardDrink.propTypes = {
  className: PropTypes.string,
  sourcePix: PropTypes.string,
  title: PropTypes.string,
};

CardDrink.defaultProps = {
  className: '',
  sourcePix: '',
  title: '',
};

export default React.memo(CardDrink);
