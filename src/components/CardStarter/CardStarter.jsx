/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './cardStarter.css';
import { fadeOut } from 'react-animations';
import DOMPurify from 'dompurify';

function CardStarter({
  className,
  sourcePix,
  title,
  summary,
  starterPrice,
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
    <div className={className} style={fadeOut}>
      <h2>Starter</h2>
      <img className="main-picture-starter" src={sourcePix} alt="food dishes" />
      <h3>{title}</h3>
      <div className="starter-recipe-stats">
        <span className="starter-cooking-time">
          🕐
          {' '}
          {cookingTime}
          {' '}
          mins
        </span>
        <span className="starter-serving">
          🍽️
          {' '}
          {servings}
          {' '}
          servings
        </span>
        <span className="starter-healthscore">
          {healthscore < 50 ? '☹️' : '😀' }
          {' '}
          Score
          {' '}
          {healthscore}
        </span>
        <span className="starter-price">
          💲
          {(starterPrice / 100).toFixed(2)}
          /serving
        </span>
      </div>
      {/* Gestion du bouton readmore */}
      {readMore === false ? (
        <span className="card-starter-readLess" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(purifiedSummary) }} />
      )
        : <span className="card-starter-readMore" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(purifiedSummary) }} /> }
      <button type="button" className="readmore" onClick={handleReadMore}>
        {' '}
        {readMore === false ? 'Read more' : 'Read less' }
      </button>
      {/* Gestion du bouton ingredient */}
      <button type="button" className="ingredients" onClick={handleReadIngredients}>
        {' '}
        {seeIngredients === false ? 'Ingredients' : '⛔ingredients' }
      </button>
      <button type="button" className="instructions" onClick={handleReadInstructions}>
        {' '}
        {seeInstructions === false ? 'Cook it !' : '⛔instructions' }
      </button>
      {seeIngredients === true ? (
        <>
          <span className="starter-ingredients-subtitle">Ingredients:</span>
          <span className="starter-ingredients-items-number">
            {ingredients.length}
            {' '}
            items
          </span>
          <ul className="starter-ingredients-list">
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
        <ul className="starter-instructions-list">
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

CardStarter.propTypes = {
  className: PropTypes.string,
  sourcePix: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  starterPrice: PropTypes.number,
  ingredients: PropTypes.array,
  instructions: PropTypes.array,
  cookingTime: PropTypes.number,
  servings: PropTypes.number,
  healthscore: PropTypes.number,
};

CardStarter.defaultProps = {
  className: '',
  sourcePix: '',
  title: '',
  summary: '',
  starterPrice: 0,
  ingredients: [],
  instructions: [],
  cookingTime: 0,
  servings: 0,
  healthscore: 0,
};

export default React.memo(CardStarter);
