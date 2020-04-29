import { getCookie } from '../../../../services/utils/get-cookie';
import { DOMAIN, DOMAIN_REP } from '../../../../config/index';
const axios = require('axios').default;

export const getMessagesAPI = async (boardName) => {
  try {
    const response = await axios.get(`${DOMAIN}/api/boards/${boardName}/`, {
      headers: {
        Authorization: `Token ${getCookie('token')}`,
      },
    });
    return response.data;
  } catch (error) {
    if (!error.response || error.response.status === 500) {
      return getMessagesAPIREP(boardName);
    }
    return { error, status: error.response.status };
  }
};

export const getMessagesAPIREP = async (boardName) => {
  try {
    const response = await axios.get(`${DOMAIN_REP}/api/boards/${boardName}/`, {
      headers: {
        Authorization: `Token ${getCookie('token')}`,
      },
    });
    return response.data;
  } catch (error) {
    return { error, status: error.response.status };
  }
};

export const postMessageAPI = async (boardName, formData) => {
  try {
    const response = await axios.post(
      `${DOMAIN}/api/boards/${boardName}/post/`,
      formData,
      {
        headers: {
          Authorization: `Token ${getCookie('token')}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (!error.response || error.response.status === 500) {
      return postMessageAPIREP(boardName, formData);
    }
    return { error, status: error.response.status };
  }
};

export const postMessageAPIREP = async (boardName, formData) => {
  try {
    const response = await axios.post(
      `${DOMAIN_REP}/api/boards/${boardName}/post/`,
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
