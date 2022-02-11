import React from 'react';
import PropTypes from 'prop-types';
import CardDessert from '../CardDessert/CardDessert';
import './cardListDessert.css';

function CardListDessert({
  className, handleDessertImage, handleDessertTitle,
}) {
  return (
    <div className={className}>
      <CardDessert className="card-dessert" sourcePix={handleDessertImage} title={handleDessertTitle} />
    </div>
  );
}

CardListDessert.propTypes = {
  className: PropTypes.string,
  handleDessertImage: PropTypes.string,
  handleDessertTitle: PropTypes.string,
};

CardListDessert.defaultProps = {
  className: '',
  handleDessertImage: '',
  handleDessertTitle: '',
};

export default React.memo(CardListDessert);
