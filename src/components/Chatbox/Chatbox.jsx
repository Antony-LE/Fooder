import React from 'react';
import PropTypes from 'prop-types';
import './chatbox.css';

function Chatbox({ className, sentence }) {
  return (
    <span className={className}>{sentence}</span>
  );
}

Chatbox.propTypes = {
  className: PropTypes.string,
  sentence: PropTypes.string,
};

Chatbox.defaultProps = {
  className: '',
  sentence: '',
};

export default React.memo(Chatbox);
