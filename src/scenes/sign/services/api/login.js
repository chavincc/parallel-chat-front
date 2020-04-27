const axios = require('axios').default;

export const login = async (formData) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/auth/', formData);
    console.log(response);
    return response;
  } catch (error) {
    console.log({ error });
    return { error };
  }
};
