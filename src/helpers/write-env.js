const fs = require('fs');

const writeEnvFile = (listId) => {
  const envPath = process.env.ENVPATH;
  const envFile = fs.readFileSync(envPath, 'utf8');
  const envContent = envFile.split('\n');
  const listIdIndex = envContent.findIndex((item) => item.includes('LISTID'));
  envContent[listIdIndex] = `LISTID=${listId}`;
  const newEnvFile = envContent.join('\n');
  fs.writeFileSync(envPath, newEnvFile);
};

module.exports = { writeEnvFile };
