import React from 'react';
import PropTypes from 'prop-types';
import CardDrink from '../CardDrink/CardDrink';
import './cardListDrink.css';

function cardListDrink({
  className, handleDrinkImage, handleDrinkTitle,
}) {
  return (
    <div className={className}>
      <CardDrink className="card-drink" sourcePix={handleDrinkImage} title={handleDrinkTitle} />
    </div>
  );
}

cardListDrink.propTypes = {
  className: PropTypes.string,
  handleDrinkImage: PropTypes.string,
  handleDrinkTitle: PropTypes.string,
};

cardListDrink.defaultProps = {
  className: '',
  handleDrinkImage: '',
  handleDrinkTitle: '',
};

export default React.memo(cardListDrink);
