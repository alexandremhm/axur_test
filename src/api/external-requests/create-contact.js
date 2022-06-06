const axios = require('axios');

const { TOKEN } = process.env;

const createContact = async (contact) => {
  const endpoint = `https://api.hubapi.com/contacts/v1/contact/?hapikey=${TOKEN}`;

  try {
    const response = await axios.post(endpoint, contact);
    return response;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createContact,
};
