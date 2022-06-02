const axios = require('axios');

const { TOKEN } = process.env;

const createList = async () => {
  const time = Date.now();

  const name = `matheus.alexandre.${time}`;

  const endpoint = `https://api.hubapi.com/contacts/v1/lists?hapikey=eu1-e8c6-8d75-4b29-ae2c-0a6538ffab9e`

  try {
    const { data } = await axios.post(endpoint, { name });
    console.log({ listName: data.name, listId: data.listId });
    return data;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createList,
};
