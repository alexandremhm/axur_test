const axios = require('axios');

const { TOKEN, LISTID } = process.env;

const addContactsToList = async (list) => {
  const formatedList = list.contacts.map(({ vid }) => vid);

  const endpoint = `https://api.hubapi.com/contacts/v1/lists/${LISTID}/add?hapikey=eu1-e8c6-8d75-4b29-ae2c-0a6538ffab9e`;

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
