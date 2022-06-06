const writeEnvFile = (listId) => {
  process.env.LISTID = listId;
};

module.exports = { writeEnvFile };
