const csv = require('csvtojson');

const csvFilePath = '/home/matheus-alexandre/desafios_tecnicos/axur_test/src/Contatos.csv';

const readCSV = async () => {
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

readCSV().then((data) => console.log(data));