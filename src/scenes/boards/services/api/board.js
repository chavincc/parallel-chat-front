import { getCookie } from '../../../../services/utils/get-cookie';
import { DOMAIN, DOMAIN_REP } from '../../../../config/index';
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
    if (!error.response || error.response.status === 500) {
      return getBoardsAPIREP();
    }
    return { error, status: error.response.status };
  }
};

export const getBoardsAPIREP = async () => {
  try {
    const response = await axios.get(`${DOMAIN_REP}/api/boards/`, {
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
    if (!error.response || error.response.status === 500) {
      return getBoardsAPIREP(name);
    }
    return { error, status: error.response.status };
  }
};

export const postBoardAPIREP = async (name) => {
  try {
    const response = await axios.post(
      `${DOMAIN_REP}/api/boards/`,
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
