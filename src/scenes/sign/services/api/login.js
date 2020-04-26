const axios = require('axios').default;

export const login = async (formData) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/auth/', formData);
    return response;
  } catch (error) {
    return { error };
  }
};
