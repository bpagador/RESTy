import React from 'react';
import PropTypes from 'prop-types';


const Request = ({ url, body, method, onChange, onSubmit }) => {
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
            <input type="radio" name="method" value="GET" checked={method === 'GET'} onChange={onChange}/></label>

          <label>PATCH
            <input type="radio" name="method" value="PATCH" checked={method === 'PATCH'} onChange={onChange}/></label>
    
          <label>POST<input type="radio" name="method" value="POST" checked={method === 'POST'} onChange={onChange}/></label>

          <label>DELETE<input type="radio" name="method" value="DELETE" checked={method === 'DELETE'} onChange={onChange}/></label>
        </div>
        
        <button>Submit</button>
      </section>
      
      <textarea
        type="text"
        name="body"
        value={body}
        onChange={onChange}

      />
      
    </form>
  );
};

Request.propTypes = {
  url: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Request;
