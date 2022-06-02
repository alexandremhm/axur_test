const axios = require('axios');

const { TOKEN, LISTID } = process.env;

const addContactsToList = async (list) => {
  const formatedList = list.contacts.map(({ vid }) => vid);

  console.log(LISTID)

  const endpoint = `https://api.hubapi.com/contacts/v1/lists/${LISTID}/add?hapikey=9df45a63-2597-4736-9ae5-6cd6f0262497`;

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
