export const fetchApi = (url, method, body) => {
  if(body) {
    return fetch(url, {
      method,
      body
    })
      .then(res => res.json());
  } else {
    return fetch(url, {
      method
    })
      .then(res => res.json);
  }
  
};
