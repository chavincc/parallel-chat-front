import { getCookie } from '../../../../services/utils/get-cookie';
import { DOMAIN } from '../../../../config/index';
const axios = require('axios').default;

export const getBoardsAPI = async () => {
  try {
    const response = await axios.get(`${DOMAIN}/api/boards/`, {
      headers: {
        Authorization: `Token ${getCookie('token')}`,
      },
    });
    return response.data;
  } catch (error) {
    return { error, status: error.response.status };
  }
};
