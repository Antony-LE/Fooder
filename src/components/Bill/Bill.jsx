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
  const totalPrice = (((handleStarterPrice === null || undefined ? 0 : handleStarterPrice) + (handleMainCoursePrice === null || undefined ? 0 : handleMainCoursePrice) + (handleDessertPrice === null || undefined ? 0 : handleDessertPrice) + (handleDrinkPrice === null || undefined ? 0 : handleDrinkPrice)) / 100).toFixed(2);
  return (
    <div id="bill-ancre" className={className}>
      <hr className="separation-price" />
      <span className="receipt">Your receipt</span>
      <ul>
        {handleStarterPrice ? (
          <li>
            <span className="title">
              {handleStarterTitle}
              {' '}
              x 1
            </span>
            {handleStarterPrice === 0 ? '' : (
              <span className="price">
                $
                {(handleStarterPrice / 100).toFixed(2)}
              </span>
            ) }

          </li>
        ) : '' }
        {handleMainCoursePrice ? (
          <li>
            <span className="title">
              {handleMainCourseTitle}
              {' '}
              x 1
            </span>
            {handleMainCoursePrice === 0 ? '' : (
              <span className="price">
                $
                {(handleMainCoursePrice / 100).toFixed(2)}
              </span>
            ) }

          </li>
        ) : ''}

        {handleDessertPrice ? (
          <li>
            <span className="title">
              {handleDessertTitle}
              {' '}
              x1
            </span>
            {handleDessertPrice === 0 ? '' : (
              <span className="price">
                $
                {(handleDessertPrice / 100).toFixed(2)}
              </span>
            ) }

          </li>
        ) : '' }

        {handleDrinkPrice ? (
          <li>
            <span className="title">
              {handleDrinkTitle}
              {' '}
              x 1
            </span>
            {handleDrinkPrice === 0 ? '' : (
              <span className="price">
                $
                {(handleDrinkPrice / 100).toFixed(2)}
              </span>
            ) }
          </li>
        ) : '' }

      </ul>
      <hr className="separation-price" />
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
