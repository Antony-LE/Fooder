import React from 'react';
import PropTypes from 'prop-types';
import CardDessert from '../CardDessert/CardDessert';
import './cardListDessert.css';

function CardListDessert({
  className, handleDessertImage, handleDessertTitle, handleDessertSummary,
}) {
  return (
    <div className={className}>
      <CardDessert className="card-dessert" sourcePix={handleDessertImage} title={handleDessertTitle} summary={handleDessertSummary} />
    </div>
  );
}

CardListDessert.propTypes = {
  className: PropTypes.string,
  handleDessertImage: PropTypes.func,
  handleDessertTitle: PropTypes.func,
  handleDessertSummary: PropTypes.func,
};

CardListDessert.defaultProps = {
  className: '',
  handleDessertImage: '',
  handleDessertTitle: '',
  handleDessertSummary: '',
};

export default React.memo(CardListDessert);
