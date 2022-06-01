const axios = require('axios');

const { TOKEN } = process.env;

const getAllContacts = async () => {
  const endpoint = `https://api.hubapi.com/contacts/v1/lists/all/contacts/all?hapikey=${TOKEN}&count=100`;

  try {
    const response = await axios.get(endpoint);
    return response;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllContacts,
};
