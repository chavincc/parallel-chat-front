import { getCookie } from '../../../../services/utils/get-cookie';
const axios = require('axios').default;

export const getMessagesAPI = async (boardName) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/boards/${boardName}/`,
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

export const postMessageAPI = async (boardName, formData) => {
  try {
    const response = await axios.post(
      `http://localhost:8000/api/boards/${boardName}/post/`,
      formData,
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
