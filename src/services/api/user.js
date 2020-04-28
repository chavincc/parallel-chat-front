import { getCookie } from '../utils/get-cookie';
const axios = require('axios').default;

export const cookieAutoLoginAPI = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/users/', {
      headers: {
        Authorization: `Token ${getCookie('token')}`,
      },
    });
    return response.data;
  } catch (error) {
    return { error };
  }
};
