import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

const Display = ({ response }) => (
  <>
    <textarea readOnly name="response">
      <pre>
        <ReactJson src={response} />
      </pre>
    </textarea>
    
  </>
);

Display.propTypes = {
  response: PropTypes.shape.isRequired
};

export default Display; 
