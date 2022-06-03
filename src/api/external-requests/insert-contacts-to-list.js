const axios = require('axios');
const { writeEnvFile } = require('../../helpers/write-env');

const { TOKEN } = process.env;

const addContactsToList = async (list, listId) => {
  const formatedList = list.contacts.map(({ vid }) => vid);

  writeEnvFile(listId);

  const endpoint = `https://api.hubapi.com/contacts/v1/lists/${listId}/add?hapikey=${TOKEN}`;

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
