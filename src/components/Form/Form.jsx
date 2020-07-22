import React from 'react';
import PropTypes from 'prop-types';


const Form = ({ url, body, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="url"
        value={url}
        onChange={onChange}
        placeholder="enter api url here"
      />

      <section>
        <div>
          <label>GET
            <input type="radio" name="method" value="GET" onChange={onChange} /></label>

          <label>PUT
            <input type="radio" name="method" value="PUT" onChange={onChange} /></label>
    
          <label>POST<input type="radio" name="method" value="POST" onChange={onChange} /></label>

          <label>DELETE<input type="radio" name="method" value="DELETE" onChange={onChange} /></label>
        </div>
        
        <button>Submit</button>
      </section>
      
      <textarea
        type="text"
        name="body"
        value={body}
        onChange={onChange}

      />

      <textarea
        type="text"
        name="body"
        value={body}
        onChange={onChange}
        placeholder="results"
      />
    </form>
  );
};

Form.propTypes = {
  url: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Form;
