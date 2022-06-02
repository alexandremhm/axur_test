const express = require('express');
const cors = require('cors');
const { readCSV } = require('./src/helpers/read-csv');
const { formatContactList } = require('./src/helpers/format-contact');
const { createContact } = require('./src/api/external-requests/create-contact');
const { getAllContacts } = require('./src/api/external-requests/get-all-contacts');
const { addContactsToList } = require('./src/api/external-requests/insert-contacts-to-list');
const { createList } = require('./src/api/external-requests/create-list');
// const routes = require('./src/api/routes');

const app = express();

app.use(express.json());
app.use(cors());

// app.use('/axur', routes.contact);

const csvFilePath = '/home/matheus-alexandre/desafios_tecnicos/axur_test/src/Contatos.csv';

createList().then((response) => response);

readCSV(csvFilePath)
  .then((response) => formatContactList(response))
  .then((response) => {
    response.forEach(async (contact) => {
      await createContact(contact);
    });
  });

getAllContacts()
  .then((response) => addContactsToList(response));

// console.log(response);

app.use((_req, res) => {
  res.status(404).send('Endpoint não encontrado');
});

module.exports = { app };
