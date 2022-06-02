const axios = require('axios');
const { createEmailList } = require('../../helpers/create-email-list');

const getAllContactsFromList = async (list) => {
  const endpoint = `https://api.hubapi.com/contacts/v1/lists/1/contacts/all?hapikey=9df45a63-2597-4736-9ae5-6cd6f0262497`;

  try {
    const { data } = await axios.get(endpoint);
    return createEmailList(data);
  } catch (error) {
    return error;
  }
};

getAllContactsFromList().then((response) => console.log(response));