import getRequest from '../api/request';

// eslint-disable-next-line no-unused-vars
export async function getDocs(query) {
  // eslint-disable-next-line no-return-await
  return await getRequest('docs');
}
