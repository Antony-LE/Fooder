/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import './cardMainCourse.css';
import DOMPurify from 'dompurify';

function CardMainCourse({
  className, sourcePix, title, summary, mainCoursePrice,
}) {
  // Purification de la props summary avec domPurify
  const purifiedSummary = summary;
  return (
    <div className={className}>
      <h2>Your Main Course :</h2>
      <h3>{title}</h3>
      <img src={sourcePix} alt="food dishes" />
      <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(purifiedSummary) }} />
      <span id="main-course-price">
        $
        {mainCoursePrice}
      </span>
      <hr />
    </div>
  );
}

CardMainCourse.propTypes = {
  className: PropTypes.string,
  sourcePix: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  mainCoursePrice: PropTypes.number,
};

CardMainCourse.defaultProps = {
  className: '',
  sourcePix: '',
  title: '',
  summary: '',
  mainCoursePrice: 0,
};

export default React.memo(CardMainCourse);
