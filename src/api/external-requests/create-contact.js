const axios = require('axios');

const { TOKEN } = process.env;

const createContact = async (contact) => {
  const endpoint = `https://api.hubapi.com/contacts/v1/contact/?hapikey=9df45a63-2597-4736-9ae5-6cd6f0262497`;

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
