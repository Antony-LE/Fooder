/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import './cuisineCardList.css';
import cuisineListItems from '../../Datas/datas-cuisine-list';

function CuisineCardList({ className }) {
  return (
    <div className={className}>
      {cuisineListItems.map((cuisineListItem) => (
        <div className="cuisine-card">
          <img src={require(`../../images/${cuisineListItem.picture}`)} alt={cuisineListItem.name} />
          <span>{cuisineListItem.name}</span>
        </div>
      ))}
    </div>
  );
}

CuisineCardList.propTypes = {
  className: PropTypes.string,
};

CuisineCardList.defaultProps = {
  className: '',
};

export default React.memo(CuisineCardList);
