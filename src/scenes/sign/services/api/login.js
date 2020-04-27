const axios = require('axios').default;

export const loginAPI = async (formData) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/auth/', formData);
    return response.data.token;
  } catch (error) {
    return { error };
  }
};
