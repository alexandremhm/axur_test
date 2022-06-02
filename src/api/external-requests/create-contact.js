const axios = require('axios');

const { TOKEN } = process.env;

const createContact = async (contact) => {
  const endpoint = `https://api.hubapi.com/contacts/v1/contact/?hapikey=eu1-e8c6-8d75-4b29-ae2c-0a6538ffab9e`;

  console.log(1);

  try {
    const response = await axios.post(endpoint, contact);
    return response;
  } catch (error) {
    console.log('error');
    return error;
  }
};

module.exports = {
  createContact,
};
