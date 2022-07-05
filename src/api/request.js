import axios from 'axios';

import { API_HOST_1, API_HOST_2, API_HOST_3 } from './endpoints.routes';

const get = async (url) => {
  try {
    const response = await axios.get(url);
    return { response };
  } catch (error) {
    return { error };
  }
};
console.log(API_HOST_1, API_HOST_2, API_HOST_3);
const getRequest = async (endpoint) => {
  const results = await Promise.all([
    get(`${API_HOST_1}/${endpoint}`),
    get(`${API_HOST_1}/${endpoint}`),
    get(`${API_HOST_1}/${endpoint}`),
  ]);

  const response = results.find((result) => result.response);
  return response.response.data || [];
};

export default getRequest;
