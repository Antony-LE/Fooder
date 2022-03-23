/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import CardDessert from '../CardDessert/CardDessert';
import './cardListDessert.css';

function CardListDessert({
  className,
  handleDessertImage,
  handleDessertTitle,
  handleDessertSummary,
  handleDessertPrice,
  handleDessertIngredients,
  handleDessertInstructions,
  handleDessertCookingTime,
  handleDessertServings,
  handleDessertHealthscore,
}) {
  return (
    <div className={className}>
      <span id="dessert-ancre" />
      <CardDessert className="card-dessert" sourcePix={handleDessertImage} title={handleDessertTitle} summary={handleDessertSummary} dessertPrice={handleDessertPrice} ingredients={handleDessertIngredients} instructions={handleDessertInstructions} cookingTime={handleDessertCookingTime} servings={handleDessertServings} healthscore={handleDessertHealthscore} />
    </div>
  );
}

CardListDessert.propTypes = {
  className: PropTypes.string,
  handleDessertImage: PropTypes.string,
  handleDessertTitle: PropTypes.string,
  handleDessertSummary: PropTypes.string,
  handleDessertPrice: PropTypes.number,
  handleDessertIngredients: PropTypes.array,
  handleDessertInstructions: PropTypes.array,
  handleDessertCookingTime: PropTypes.number,
  handleDessertServings: PropTypes.number,
  handleDessertHealthscore: PropTypes.number,
};

CardListDessert.defaultProps = {
  className: '',
  handleDessertImage: '',
  handleDessertTitle: '',
  handleDessertSummary: '',
  handleDessertPrice: 0,
  handleDessertIngredients: [],
  handleDessertInstructions: [],
  handleDessertCookingTime: 0,
  handleDessertServings: 0,
  handleDessertHealthscore: 0,
};

export default React.memo(CardListDessert);
