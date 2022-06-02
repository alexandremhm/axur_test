const axios = require('axios');

const { TOKEN } = process.env;

const getAllContacts = async () => {
  const endpoint = `https://api.hubapi.com/contacts/v1/lists/all/contacts/all?hapikey=eu1-e8c6-8d75-4b29-ae2c-0a6538ffab9e`;

  try {
    const { data } = await axios.get(endpoint);

    return data;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllContacts,
};
