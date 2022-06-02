const axios = require('axios');
const { createEmailList } = require('../../helpers/create-email-list');

const list = process.env.LISTID;

const getAllContactsFromList = async () => {
  const endpoint = `https://api.hubapi.com/contacts/v1/lists/53/contacts/all?hapikey=eu1-e8c6-8d75-4b29-ae2c-0a6538ffab9e&count=100`;

  try {
    const { data } = await axios.get(endpoint);
    return createEmailList(data);
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllContactsFromList,
};
