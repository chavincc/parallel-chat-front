import { getCookie } from '../../../../services/utils/get-cookie';
const axios = require('axios').default;

export const getBoardsAPI = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/boards/', {
      headers: {
        Authorization: `Token ${getCookie('token')}`,
      },
    });
    return response.data;
  } catch (error) {
    return { error, status: error.response.status };
  }
};
