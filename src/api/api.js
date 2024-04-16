import axios from 'axios';

axios.defaults.headers.common = { 'content-type': 'application/json' };
axios.defaults.baseURL = 'https://65ef7128ead08fa78a5074be.mockapi.io';

export const getCampers = async (page = 1, limit = 4, filter = {}) => {
  const { data } = await axios.get(`/adverts`, {
    params: {
      page,
      limit,
      ...filter,
      // form: 'alcove',
      // location: 'Kyiv',
      // transmission: 'automatic',
    },
  });

  return data;
};
