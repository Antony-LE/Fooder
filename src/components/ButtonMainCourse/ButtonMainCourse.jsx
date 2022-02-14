import React from 'react';
import PropTypes from 'prop-types';
import './buttonMainCourse.css';

function buttonMainCourse({ className, handleRandomMainCourse }) {
  return (
    <button className={className} onClick={handleRandomMainCourse} type="button">Get a random main course</button>
  );
}

buttonMainCourse.propTypes = {
  className: PropTypes.string,
  handleRandomMainCourse: PropTypes.func,
};

buttonMainCourse.defaultProps = {
  className: '',
  handleRandomMainCourse: '',
};

export default React.memo(buttonMainCourse);
