import React from 'react';
import PropTypes from 'prop-types';
import CardDessert from '../CardDessert/CardDessert';
import './cardListDessert.css';

function CardListDessert({
  className, handleDessertImage, handleDessertTitle, handleDessertSummary, handleDessertPrice,
}) {
  return (
    <div className={className}>
      <CardDessert className="card-dessert" sourcePix={handleDessertImage} title={handleDessertTitle} summary={handleDessertSummary} dessertPrice={handleDessertPrice} />
    </div>
  );
}

CardListDessert.propTypes = {
  className: PropTypes.string,
  handleDessertImage: PropTypes.string,
  handleDessertTitle: PropTypes.string,
  handleDessertSummary: PropTypes.string,
  handleDessertPrice: PropTypes.number,
};

CardListDessert.defaultProps = {
  className: '',
  handleDessertImage: '',
  handleDessertTitle: '',
  handleDessertSummary: '',
  handleDessertPrice: 0,
};

export default React.memo(CardListDessert);
