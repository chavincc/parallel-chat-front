import { getCookie } from '../utils/get-cookie';
import { DOMAIN, DOMAIN_REP } from '../../config/index';
const axios = require('axios').default;

export const cookieAutoLoginAPI = async () => {
  try {
    const response = await axios.get(`${DOMAIN}/api/users/`, {
      headers: {
        Authorization: `Token ${getCookie('token')}`,
      },
    });
    return response.data;
  } catch (error) {
    if (!error.response || error.response.status === 500) {
      return cookieAutoLoginAPIREP();
    }
    return { error };
  }
};

export const cookieAutoLoginAPIREP = async () => {
  try {
    const response = await axios.get(`${DOMAIN_REP}/api/users/`, {
      headers: {
        Authorization: `Token ${getCookie('token')}`,
      },
    });
    return response.data;
  } catch (error) {
    return { error };
  }
};
