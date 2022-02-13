import React from 'react';
import PropTypes from 'prop-types';
import CardMainCourse from '../CardMainCourse/CardMainCourse';
import './cardListMainCourse.css';

function cardListMainCourse({
  className, handleMainCourseImage, handleMainCourseTitle, handleMainCourseSummary,
}) {
  return (
    <div className={className}>
      <CardMainCourse className="card-main-course" sourcePix={handleMainCourseImage} title={handleMainCourseTitle} summary={handleMainCourseSummary} />
    </div>
  );
}

cardListMainCourse.propTypes = {
  className: PropTypes.string,
  handleMainCourseImage: PropTypes.func,
  handleMainCourseTitle: PropTypes.func,
  handleMainCourseSummary: PropTypes.func,
};

cardListMainCourse.defaultProps = {
  className: '',
  handleMainCourseImage: '',
  handleMainCourseTitle: '',
  handleMainCourseSummary: '',
};

export default React.memo(cardListMainCourse);
