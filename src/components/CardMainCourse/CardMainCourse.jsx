import React from 'react';
import PropTypes from 'prop-types';
import './cardMainCourse.css';

function CardMainCourse({
  className, sourcePix, title, summary,
}) {
  return (
    <div className={className}>
      <h2>Your Main Course :</h2>
      <h3>{title}</h3>
      <img src={sourcePix} alt="food dishes" />
      <span>{summary}</span>
    </div>
  );
}

CardMainCourse.propTypes = {
  className: PropTypes.string,
  sourcePix: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
};

CardMainCourse.defaultProps = {
  className: '',
  sourcePix: '',
  title: '',
  summary: '',
};

export default React.memo(CardMainCourse);
