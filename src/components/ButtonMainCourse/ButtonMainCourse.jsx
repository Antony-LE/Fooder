import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './buttonMainCourse.css';

function buttonMainCourse({ className, handleRandomMainCourse }) {
  const [show, setShow] = useState(false);
  // timer pour display différé du composant au chargement de la page uniquement
  useEffect(
    () => {
      setTimeout(() => setShow(true), 4600);
    },
    [],
  );
  return show ? (
    <button className={className} onClick={handleRandomMainCourse} type="button">Get a main course</button>
  ) : '';
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
