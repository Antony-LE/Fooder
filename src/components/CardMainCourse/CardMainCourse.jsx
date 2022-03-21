/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './cardMainCourse.css';
import DOMPurify from 'dompurify';

function CardMainCourse({
  className, sourcePix, title, summary, mainCoursePrice,
}) {
  const [readMore, setReadMore] = useState(false);

  function handleReadMore() {
    setReadMore(!readMore);
    console.log(readMore);
  }
  // Purification de la props summary avec domPurify
  const purifiedSummary = summary;
  return (
    <div className={className}>
      <h2>Your Main Course :</h2>
      <h3>{title}</h3>
      <img src={sourcePix} alt="food dishes" />
      {readMore === false ? <span className="card-main-course-readLess" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(purifiedSummary) }} />
        : <span className="card-main-course-readMore" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(purifiedSummary) }} /> }
      <button type="button" className="readmore" onClick={handleReadMore}>
        {' '}
        {readMore === false ? 'Read more...' : 'Read less' }
      </button>
      <span id="main-course-price">
        $
        {(mainCoursePrice / 100).toFixed(2)}
        {' '}
        / serving
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
