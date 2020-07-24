import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ response }) => (
  <pre>
    {JSON.stringify(response)}
  </pre>
);


Display.propTypes = {
  response: PropTypes.string.isRequired
};

export default Display; 
