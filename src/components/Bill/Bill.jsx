/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import './bill.css';

function Bill({
  className,
  handleStarterTitle,
  handleStarterPrice,
  handleMainCourseTitle,
  handleMainCoursePrice,
  handleDessertTitle,
  handleDessertPrice,
  handleDrinkTitle,
  handleDrinkPrice,
}) {
  const totalPrice = ((handleStarterPrice + handleMainCoursePrice + handleDessertPrice + handleDrinkPrice) / 100).toFixed(2);
  return (
    <div className={className}>
      <ul>
        <li>
          <span className="title">{handleStarterTitle}</span>
          {handleStarterPrice === 0 ? '' : (
            <span className="price">
              $
              {(handleStarterPrice / 100).toFixed(2)}
            </span>
          ) }

        </li>
        <li>
          <span className="title">{handleMainCourseTitle}</span>
          {handleMainCoursePrice === 0 ? '' : (
            <span className="price">
              $
              {(handleMainCoursePrice / 100).toFixed(2)}
            </span>
          ) }

        </li>
        <li>
          <span className="title">{handleDessertTitle}</span>
          {handleDessertPrice === 0 ? '' : (
            <span className="price">
              $
              {(handleDessertPrice / 100).toFixed(2)}
            </span>
          ) }

        </li>
        <li>
          <span className="title">{handleDrinkTitle}</span>
          {handleDrinkPrice === 0 ? '' : (
            <span className="price">
              $
              {(handleDrinkPrice / 100).toFixed(2)}
            </span>
          ) }
        </li>
      </ul>
      <span className="total-price">
        Total price : $
        {' '}
        {totalPrice}
        {' '}
      </span>
    </div>
  );
}

Bill.propTypes = {
  className: PropTypes.string,
  handleStarterTitle: PropTypes.string,
  handleStarterPrice: PropTypes.number,
  handleMainCourseTitle: PropTypes.string,
  handleMainCoursePrice: PropTypes.number,
  handleDessertTitle: PropTypes.string,
  handleDessertPrice: PropTypes.number,
  handleDrinkTitle: PropTypes.string,
  handleDrinkPrice: PropTypes.number,
};

Bill.defaultProps = {
  className: '',
  handleStarterTitle: '',
  handleStarterPrice: 0,
  handleMainCourseTitle: '',
  handleMainCoursePrice: 0,
  handleDessertTitle: '',
  handleDessertPrice: 0,
  handleDrinkTitle: '',
  handleDrinkPrice: 0,
};

export default React.memo(Bill);
