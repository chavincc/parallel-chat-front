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

export const postBoardAPI = async (name) => {
  try {
    const response = await axios.post(
      `${DOMAIN}/api/boards/`,
      {
        name,
      },
      {
        headers: {
          Authorization: `Token ${getCookie('token')}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    return { error, status: error.response.status };
  }
};
