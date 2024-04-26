import axios from 'axios';
import { fi } from 'date-fns/locale';

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

export const getFilterdCampers = async filter => {
  const { location, vehicleType, Automatic } = filter;
  let params = {};
  console.log(filter);
  if (location) {
    params.location = location;
  }

  if (vehicleType) {
    params.form = vehicleType;
  }

  if (Automatic) {
    params.transmission = 'automatic';
  }

  const { data } = await axios.get(`/adverts`, {
    params,
  });

  return data;
};
