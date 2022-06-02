const axios = require('axios');

const { TOKEN } = process.env;

const getAllContacts = async () => {
  const endpoint = `https://api.hubapi.com/contacts/v1/lists/all/contacts/all?hapikey=9df45a63-2597-4736-9ae5-6cd6f0262497`;

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
