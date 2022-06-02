const axios = require('axios');
const { writeEnvFile } = require('../../helpers/write-env');

const { TOKEN } = process.env;

const createList = async () => {
  const time = Date.now();

  const name = `matheus.alexandre.${time}`;

  const endpoint = `https://api.hubapi.com/contacts/v1/lists?hapikey=9df45a63-2597-4736-9ae5-6cd6f0262497`

  try {
    const { data } = await axios.post(endpoint, { name });
    writeEnvFile(data.name, data.listId);
    console.log({ listName: data.name, listId: data.listId });
    return data;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createList,
};
