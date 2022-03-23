/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import CardDrink from '../CardDrink/CardDrink';
import './cardListDrink.css';

function cardListDrink({
  className,
  handleDrinkImage,
  handleDrinkTitle,
  handleDrinkSummary,
  handleDrinkPrice,
  handleDrinkIngredients,
  handleDrinkInstructions,
  handleDrinkCookingTime,
  handleDrinkServings,
  handleDrinkHealthscore,
}) {
  return (
    <div className={className}>
      <span id="drink-ancre" />
      <CardDrink className="card-drink" sourcePix={handleDrinkImage} title={handleDrinkTitle} summary={handleDrinkSummary} drinkPrice={handleDrinkPrice} ingredients={handleDrinkIngredients} instructions={handleDrinkInstructions} cookingTime={handleDrinkCookingTime} servings={handleDrinkServings} healthscore={handleDrinkHealthscore} />
    </div>
  );
}

cardListDrink.propTypes = {
  className: PropTypes.string,
  handleDrinkImage: PropTypes.func,
  handleDrinkTitle: PropTypes.func,
  handleDrinkSummary: PropTypes.func,
  handleDrinkPrice: PropTypes.number,
  handleDrinkIngredients: PropTypes.array,
  handleDrinkInstructions: PropTypes.array,
  handleDrinkCookingTime: PropTypes.number,
  handleDrinkServings: PropTypes.number,
  handleDrinkHealthscore: PropTypes.number,
};

cardListDrink.defaultProps = {
  className: '',
  handleDrinkImage: '',
  handleDrinkTitle: '',
  handleDrinkSummary: '',
  handleDrinkPrice: 0,
  handleDrinkIngredients: [],
  handleDrinkInstructions: [],
  handleDrinkCookingTime: 0,
  handleDrinkServings: 0,
  handleDrinkHealthscore: 0,
};

export default React.memo(cardListDrink);
