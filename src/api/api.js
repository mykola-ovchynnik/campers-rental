import axios from 'axios';

axios.defaults.headers.common = { 'content-type': 'application/json' };
axios.defaults.baseURL = 'https://65ef7128ead08fa78a5074be.mockapi.io';

export const getCampers = async (page = 1) => {
  const { data } = await axios.get(`/adverts`, {
    params: {
      page,
      limit: 4,
    },
  });

  return data;
};

export const getCamperById = async id => {
  const { data } = await axios.get(`/adverts/${id}`);

  return data;
};
