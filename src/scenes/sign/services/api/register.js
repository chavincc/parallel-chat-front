const axios = require('axios').default;

const adminToken = '3fa767b3c5070a5f31fc9974530bcabca088b829';

export const registerAPI = async (formData) => {
  try {
    const response = await axios.post(
      `http://127.0.0.1:8000/api/users/`,
      formData,
      {
        headers: {
          Authorization: `Token ${adminToken}`,
        },
      }
    );
    return response;
  } catch (error) {
    return { error };
  }
};
