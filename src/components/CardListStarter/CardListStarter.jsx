import React from 'react';
import PropTypes from 'prop-types';
import CardStarter from '../CardStarter/CardStarter';
import './cardListStarter.css';

function CardListStarter({
  className, handleStarterImage, handleStarterTitle,
}) {
  return (
    <div className={className}>
      <CardStarter className="card-starter" sourcePix={handleStarterImage} title={handleStarterTitle} />
    </div>
  );
}

CardListStarter.propTypes = {
  className: PropTypes.string,
  handleStarterImage: PropTypes.string,
  handleStarterTitle: PropTypes.string,
};

CardListStarter.defaultProps = {
  className: '',
  handleStarterImage: '',
  handleStarterTitle: '',
};

export default React.memo(CardListStarter);
