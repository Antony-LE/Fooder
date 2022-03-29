/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './cardDrink.css';
import DOMPurify from 'dompurify';

function CardDrink({
  className,
  sourcePix,
  title,
  summary,
  drinkPrice,
  ingredients,
  instructions,
  cookingTime,
  servings,
  healthscore,
}) {
  const [readMore, setReadMore] = useState(false);
  const [seeIngredients, setSeeIngredients] = useState(false);
  const [seeInstructions, setSeeInstructions] = useState(false);

  function handleReadMore() {
    setReadMore(!readMore);
    console.log(readMore);
  }

  function handleReadIngredients() {
    setSeeIngredients(!seeIngredients);
  }

  function handleReadInstructions() {
    setSeeInstructions(!seeInstructions);
  }

  // Purification de la props summary avec domPurify
  const purifiedSummary = summary;
  return (
    <div className={className}>
      <h2>Drink</h2>
      <h3>{title}</h3>
      <img className="main-picture-drink" src={sourcePix} alt="food dishes" />
      <h3>{title}</h3>
      <div className="drink-recipe-stats">
        <span className="drink-cooking-time">
          🕐
          {' '}
          {cookingTime}
          {' '}
          mins
        </span>
        <span className="drink-serving">
          🍽️
          {' '}
          {servings}
          {' '}
          servings
        </span>
        <span className="drink-healthscore">
          {healthscore < 50 ? '☹️' : '😀' }
          {' '}
          Healthscore
          {' '}
          {healthscore}
        </span>
        <span className="drink-price">
          💲
          {(drinkPrice / 100).toFixed(2)}
          {' '}
          / serving
        </span>
      </div>
      {/* Gestion du bouton readmore */}
      {readMore === false ? (
        <span className="card-drink-readLess" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(purifiedSummary) }} />
      )
        : <span className="card-drink-readMore" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(purifiedSummary) }} /> }
      <button type="button" className="readmore" onClick={handleReadMore}>
        {' '}
        {readMore === false ? 'Read more' : 'Read less' }
      </button>
      {/* Gestion du bouton ingredient */}
      <button type="button" className="ingredients" onClick={handleReadIngredients}>
        {' '}
        {seeIngredients === false ? 'See Ingredients' : 'Hide ingredients' }
      </button>
      <button type="button" className="instructions" onClick={handleReadInstructions}>
        {' '}
        {seeInstructions === false ? 'Cook it !' : 'Hide instructions' }
      </button>
      {seeIngredients === true ? (
        <>
          <span className="dessert-ingredients-subtitle">Ingredients:</span>
          <span className="dessert-ingredients-items-number">
            {ingredients.length}
            {' '}
            items
          </span>
          <ul className="dessert-ingredients-list">
            {ingredients.map((ingredient) => (
              <li>
                <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt={ingredient.name} className="ingredient-image" />
                {ingredient.original}
              </li>
            ))}
          </ul>

        </>
      ) : ''}
      {/* Gestion du bouton instructions */}
      {seeInstructions === true ? (
        <ul className="dessert-instructions-list">
          {instructions.map((instruction) => (
            <li>
              <input type="checkbox" id="todo" name="todo" value="todo" />
              <label htmlFor="todo" data-content={`Step ${instruction.number} :`}>
                {`Step ${instruction.number} : `}
                {instruction.step}
              </label>
            </li>
          ))}
        </ul>
      ) : ''}
    </div>
  );
}

CardDrink.propTypes = {
  className: PropTypes.string,
  sourcePix: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  drinkPrice: PropTypes.number,
  ingredients: PropTypes.array,
  instructions: PropTypes.array,
  cookingTime: PropTypes.number,
  servings: PropTypes.number,
  healthscore: PropTypes.number,
};

CardDrink.defaultProps = {
  className: '',
  sourcePix: '',
  title: '',
  summary: '',
  drinkPrice: 0,
  ingredients: [],
  instructions: [],
  cookingTime: 0,
  servings: 0,
  healthscore: 0,
};

export default React.memo(CardDrink);
