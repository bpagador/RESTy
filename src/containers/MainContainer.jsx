import React, { Component } from 'react';
import Request from '../components/Request/Request';
import Display from '../components/Display/Display';
import { fetchApi } from '../services/fetchApi';

export default class MainContainer extends Component {
    state={
      url: '',
      body: '',
      method: '',
      response: '' 
    }

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    }

    handleSubmit = event => {
      event.preventDefault();
      const { url, body, method } = this.state;
      fetchApi(url, body, method)
        .then(response => {
          this.setState({ response });
        }); 
    }
    render() {
      const { url, body, response } = this.state;
      return (
        <div>

          <h1>Welcome to RESTy</h1>
          <Request url={url} body={body} onChange={this.handleChange} onSubmit={this.handleSubmit} />
          <Display response={response} />
                
        </div>
      );
    }
}




