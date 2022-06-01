const axios = require('axios');

const { TOKEN } = process.env;

const addContactsToList = async (list) => {
  const formatedList = list.map(({ vid }) => vid);

  const endpoint = `https://api.hubapi.com/contacts/v1/lists/3/add?hapikey=${TOKEN}`;

  try {
    const response = await axios.post(endpoint, { vids: formatedList });
    return response;
  } catch (error) {
    return error;
  }
};

module.exports = {
  addContactsToList,
};
