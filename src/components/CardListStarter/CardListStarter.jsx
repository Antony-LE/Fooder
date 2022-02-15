import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CardStarter from '../CardStarter/CardStarter';
import './cardListStarter.css';

function CardListStarter({
  className, handleStarterImage, handleStarterTitle, handleStarterSummary, handleStarterPrice,
}) {
  const [show, setShow] = useState(false);
  // timer pour display différé du composant au chargement de la page uniquement
  useEffect(
    () => {
      setTimeout(() => setShow(true), 200);
    },
    [],
  );
  return show ? (
    <div className={className}>
      <CardStarter className="card-starter" sourcePix={handleStarterImage} title={handleStarterTitle} summary={handleStarterSummary} starterPrice={handleStarterPrice} />
    </div>
  ) : '';
}

CardListStarter.propTypes = {
  className: PropTypes.string,
  handleStarterImage: PropTypes.string,
  handleStarterTitle: PropTypes.string,
  handleStarterSummary: PropTypes.string,
  handleStarterPrice: PropTypes.number,
};

CardListStarter.defaultProps = {
  className: '',
  handleStarterImage: '',
  handleStarterTitle: '',
  handleStarterSummary: '',
  handleStarterPrice: 0,
};

export default React.memo(CardListStarter);
