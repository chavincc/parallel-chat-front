import { DOMAIN, DOMAIN_REP } from '../../../../config';

const axios = require('axios').default;

export const loginAPI = async (formData) => {
  try {
    const response = await axios.post(`${DOMAIN}/auth/`, formData);
    return response.data.token;
  } catch (error) {
    if (!error.response || error.response.status === 500) {
      return loginAPIREP(formData);
    }
    return { error };
  }
};

export const loginAPIREP = async (formData) => {
  try {
    const response = await axios.post(`${DOMAIN_REP}/auth/`, formData);
    return response.data.token;
  } catch (error) {
    return { error };
  }
};
