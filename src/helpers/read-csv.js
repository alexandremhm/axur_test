const csvFilePath = '/home/matheus-alexandre/desafios_tecnicos/axur_test/src/Contatos.csv';

const csv = require('csvtojson');

const readCSV = async () => {
  try {
    const data = await csv().fromFile(csvFilePath);
    return data;
  } catch {
    return 'Error reading CSV file';
  }
};

// readCSV().then((data) => console.log(data));

export default readCSV;
