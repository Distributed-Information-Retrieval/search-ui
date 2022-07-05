import axios from 'axios';
import { API_HOST_1, API_HOST_2, API_HOST_3 } from './endpoints.routes';

console.log(API_HOST_1, API_HOST_2, API_HOST_3);
const apiV1 = axios.create({ baseURL: API_HOST_1 });
const apiV2 = axios.create({ baseURL: API_HOST_2 });
const apiV3 = axios.create({ baseURL: API_HOST_3 });

export {
  apiV1,
  apiV2,
  apiV3,
};

