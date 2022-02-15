/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CardMainCourse from '../CardMainCourse/CardMainCourse';
import './cardListMainCourse.css';

function cardListMainCourse({
  className, handleMainCourseImage, handleMainCourseTitle, handleMainCourseSummary, handleMainCoursePrice,
}) {
  const [show, setShow] = useState(false);
  // timer pour display différé du composant au chargement de la page uniquement
  useEffect(
    () => {
      setTimeout(() => setShow(true), 200);
    },
    [],
  );
  return show ? (
    <div className={className}>
      <CardMainCourse className="card-main-course" sourcePix={handleMainCourseImage} title={handleMainCourseTitle} summary={handleMainCourseSummary} mainCoursePrice={handleMainCoursePrice} />
    </div>
  ) : '';
}

cardListMainCourse.propTypes = {
  className: PropTypes.string,
  handleMainCourseImage: PropTypes.string,
  handleMainCourseTitle: PropTypes.string,
  handleMainCourseSummary: PropTypes.string,
  handleMainCoursePrice: PropTypes.number,
};

cardListMainCourse.defaultProps = {
  className: '',
  handleMainCourseImage: '',
  handleMainCourseTitle: '',
  handleMainCourseSummary: '',
  handleMainCoursePrice: 0,
};

export default React.memo(cardListMainCourse);
