const axios = require('axios');
const { createEmailList } = require('../../helpers/create-email-list');

const list = process.env.LISTID;

const getAllContactsFromList = async () => {
  const endpoint = `https://api.hubapi.com/contacts/v1/lists/39/contacts/all?hapikey=9df45a63-2597-4736-9ae5-6cd6f0262497`;

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
