const writeEnvFile = (listName, listId) => {
  process.env.LISTNAME = listName;
  process.env.LISTID = listId;
};

writeEnvFile('aleluia', '123');