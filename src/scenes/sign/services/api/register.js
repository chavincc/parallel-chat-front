import { DOMAIN, ADMIN_KEY } from '../../../../config/index';

const axios = require('axios').default;

export const registerAPI = async (formData) => {
  try {
    console.log(ADMIN_KEY);
    const response = await axios.post(`${DOMAIN}/api/users/`, formData, {
      headers: {
        Authorization: `Token ${ADMIN_KEY}`,
      },
    });
    return response;
  } catch (error) {
    return { error };
  }
};
