const csv = require('csvtojson');

const readCSV = async (csvFilePath) => {
  try {
    const data = await csv().fromFile(csvFilePath);
    const response = data.map((contact) => ({
      firstName: contact.first_name,
      lastName: contact.last_name,
      email: contact.email,
      gender: contact.gender,
    }));
    return response;
  } catch {
    return 'Error reading CSV file';
  }
};

module.exports = {
  readCSV,
};
