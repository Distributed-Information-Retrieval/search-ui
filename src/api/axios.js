import axios from 'axios';
import { API_HOST_1, API_HOST_2, API_HOST_3 } from './endpoints.routes';

const apiv1 = axios.create({ baseURL: API_HOST_1 });
const apiv2 = axios.create({ baseURL: API_HOST_2 });
const apiv3 = axios.create({ baseURL: API_HOST_3 });

export {
  apiv1,
  apiv2,
  apiv3,
};

