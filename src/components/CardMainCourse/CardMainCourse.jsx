import React from 'react';
import PropTypes from 'prop-types';
import './cardMainCourse.css';

function CardMainCourse({
  className, sourcePix, title,
}) {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <img src={sourcePix} alt="food dishes" />
    </div>
  );
}

CardMainCourse.propTypes = {
  className: PropTypes.string,
  sourcePix: PropTypes.string,
  title: PropTypes.string,
};

CardMainCourse.defaultProps = {
  className: '',
  sourcePix: '',
  title: '',
};

export default React.memo(CardMainCourse);
