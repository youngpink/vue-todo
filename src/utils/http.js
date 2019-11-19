import axios from 'axios';

const baseUrl = 'http://127.0.0.1';

export const http = (url = '', data = {}, type = 'GET', contentType = 'application/json') => {
  if (url === '/tasks') {
    return Promise.resolve([
      { id: '001', title: '起床', content: '早上7点起床', status: 'TODO' },
      { id: '002', title: '吃早餐', content: '早上8点前吃完早餐', status: 'TODO' },
      { id: '003', title: '读书', content: '读《重构》1-10页', status: 'TODO' },
      { id: '004', title: '锻炼', content: '步行1万步', status: 'TODO' },
      { id: '005', title: '打电话', content: '给狗娃纸打电话', status: 'TODO' },
    ]);
  }

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
