import React from 'react';
import PropTypes from 'prop-types';
import CardMainCourse from '../CardMainCourse/CardMainCourse';
import './cardListMainCourse.css';

function cardListMainCourse({
  className, handleMainCourseImage, handleMainCourseTitle,
}) {
  return (
    <div className={className}>
      <CardMainCourse className="card-main-course" sourcePix={handleMainCourseImage} title={handleMainCourseTitle} />
    </div>
  );
}

cardListMainCourse.propTypes = {
  className: PropTypes.string,
  handleMainCourseImage: PropTypes.string,
  handleMainCourseTitle: PropTypes.string,
};

cardListMainCourse.defaultProps = {
  className: '',
  handleMainCourseImage: '',
  handleMainCourseTitle: '',
};

export default React.memo(cardListMainCourse);
