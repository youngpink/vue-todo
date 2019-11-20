import axios from './interceptor';

const baseUrl = 'http://127.0.0.1';

export const http = (url = '', data = {}, type = 'GET', contentType = 'application/json') => {
  return new Promise((resolve, reject) => {
    const baseRequestConfig = {
      method: type,
      url: baseUrl + url,
      headers: {
        Accept: 'application/json',
        'Content-Type': contentType,
      },
      timeout: 30000,
    };
    const requestConfig =
      type.toUpperCase() === 'GET' || type.toUpperCase() === 'DELETE'
      ? { ...baseRequestConfig, params: data }
      : { ...baseRequestConfig, data };

    return axios(requestConfig)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  })
};
