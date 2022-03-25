/* eslint-disable max-len */
/* eslint-disable no-lone-blocks */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './cuisineCardList.css';
import cuisineListItems from '../../Datas/datas-cuisine-list';

function CuisineCardList({ className, onClick }) {
  const [show, setShow] = useState(false);
  const [selectElement, setSelectElement] = useState(0);
  // timer pour display différé du composant au chargement de la page uniquement
  useEffect(
    () => {
      setTimeout(() => setShow(true), 3500);
    },
    [],
  );

  // Handle the only one element selected from a map
  const handleClick = (id) => {
    setSelectElement(id);
    console.log(selectElement);
  };

  // Réception de l'état de sélection de la cuisine provenant de l'élément parent main afin d'afficher les boutons de recettes
  function handleChangeClickCuisine() {
    // Here, we invoke the callback with the new value
    onClick(true);
  }

  return show ? (
    <div className={className}>
      {cuisineListItems.map((cuisineListItem, i) => (
        <div className="cuisine-card" key={i}>
          <img
            onClick={() => { handleClick(cuisineListItem.id); handleChangeClickCuisine(); { window.sessionStorage.setItem('cuisine-type', JSON.stringify(cuisineListItem.name)); } }}
            src={require(`../../images/${cuisineListItem.picture}`)}
            alt={cuisineListItem.name}
            className={selectElement === cuisineListItem.id ? 'cuisine-card-focus' : ''}
          />
          <span>{cuisineListItem.name}</span>
        </div>
      ))}
    </div>
  ) : '';
}

CuisineCardList.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

CuisineCardList.defaultProps = {
  className: '',
  onClick: '',
};

export default React.memo(CuisineCardList);
