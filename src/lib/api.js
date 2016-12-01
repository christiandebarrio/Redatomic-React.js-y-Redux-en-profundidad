import fetch from 'isomorphic-fetch';

export function get(url){
  return fetch(url).then(response => {
    if(response.ok){
      return response.json();
    }
    throw {
      status: response.status,
      text: response.statusText
    };
  });
}