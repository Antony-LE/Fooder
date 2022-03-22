/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import CardStarter from '../CardStarter/CardStarter';
import './cardListStarter.css';

function CardListStarter({
  className,
  handleStarterImage,
  handleStarterTitle,
  handleStarterSummary,
  handleStarterPrice,
  handleStarterIngredients,
  handleStarterInstructions,
}) {
  return (
    <div className={className}>
      <span id="starter-ancre" />
      <CardStarter className="card-starter" sourcePix={handleStarterImage} title={handleStarterTitle} summary={handleStarterSummary} starterPrice={handleStarterPrice} ingredients={handleStarterIngredients} instructions={handleStarterInstructions} />
    </div>
  );
}

CardListStarter.propTypes = {
  className: PropTypes.string,
  handleStarterImage: PropTypes.string,
  handleStarterTitle: PropTypes.string,
  handleStarterSummary: PropTypes.string,
  handleStarterPrice: PropTypes.number,
  handleStarterIngredients: PropTypes.array,
  handleStarterInstructions: PropTypes.array,
};

CardListStarter.defaultProps = {
  className: '',
  handleStarterImage: '',
  handleStarterTitle: '',
  handleStarterSummary: '',
  handleStarterPrice: 0,
  handleStarterIngredients: [],
  handleStarterInstructions: [],
};

export default React.memo(CardListStarter);
