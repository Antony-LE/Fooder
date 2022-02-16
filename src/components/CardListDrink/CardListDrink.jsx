import React from 'react';
import PropTypes from 'prop-types';
import CardDrink from '../CardDrink/CardDrink';
import './cardListDrink.css';

function cardListDrink({
  className, handleDrinkImage, handleDrinkTitle, handleDrinkSummary, handleDrinkPrice,
}) {
  return (
    <div className={className}>
      <CardDrink className="card-drink" sourcePix={handleDrinkImage} title={handleDrinkTitle} summary={handleDrinkSummary} drinkPrice={handleDrinkPrice} />
    </div>
  );
}

cardListDrink.propTypes = {
  className: PropTypes.string,
  handleDrinkImage: PropTypes.func,
  handleDrinkTitle: PropTypes.func,
  handleDrinkSummary: PropTypes.func,
  handleDrinkPrice: PropTypes.number,
};

cardListDrink.defaultProps = {
  className: '',
  handleDrinkImage: '',
  handleDrinkTitle: '',
  handleDrinkSummary: '',
  handleDrinkPrice: 0,
};

export default React.memo(cardListDrink);
