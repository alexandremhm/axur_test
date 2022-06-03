const axios = require('axios');
const { createEmailList } = require('../../helpers/create-email-list');

const getAllContactsFromList = async () => {
  const { TOKEN, LISTID } = process.env;
  const endpoint = `https://api.hubapi.com/contacts/v1/lists/${LISTID}/contacts/all?hapikey=${TOKEN}&count=100`;
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
