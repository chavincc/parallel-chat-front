import { DOMAIN, ADMIN_KEY, DOMAIN_REP } from '../../../../config/index';

const axios = require('axios').default;

export const registerAPI = async (formData) => {
  try {
    const response = await axios.post(`${DOMAIN}/api/users/`, formData, {
      headers: {
        Authorization: `Token ${ADMIN_KEY}`,
      },
    });
    return response;
  } catch (error) {
    if (!error.response || error.response.status === 500) {
      return registerAPIREP(formData);
    }
    return { error };
  }
};

export const registerAPIREP = async (formData) => {
  try {
    const response = await axios.post(`${DOMAIN_REP}/api/users/`, formData, {
      headers: {
        Authorization: `Token ${ADMIN_KEY}`,
      },
    });
    return response;
  } catch (error) {
    return { error };
  }
};
