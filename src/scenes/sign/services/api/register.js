const axios = require('axios').default;

export const register = async (formData) => {
  try {
    const response = await axios.post(
      'http://127.0.0.1:8000/api/users/',
      formData,
      {
        headers: {
          Authorization: 'Token 3527ba8f45e1f30483bc62b9c39bdd9b17273aaf',
        },
      }
    );
    return response;
  } catch (error) {
    return { error };
  }
};
