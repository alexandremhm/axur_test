const fs = require('fs');

const writeEnvFile = (listName, listId) => {
  const envPath = process.env.ENVPATH;
  const envFile = fs.readFileSync(envPath, 'utf8');
  const envContent = envFile.split('\n');
  const newEnvContent = [...envContent, `LISTNAME = ${listName}`, `LISTID = ${listId}`];
  const newEnvFile = newEnvContent.join('\n');
  fs.writeFileSync(envPath, newEnvFile);
};

module.exports = { writeEnvFile };
