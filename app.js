const express = require('express');
const cors = require('cors');
const async = require('async');
const { readCSV } = require('./src/helpers/read-csv');
const { formatContactList } = require('./src/helpers/format-contact');
const { createContact } = require('./src/api/external-requests/create-contact');
const { getAllContacts } = require('./src/api/external-requests/get-all-contacts');
const { addContactsToList } = require('./src/api/external-requests/insert-contacts-to-list');
const { createList } = require('./src/api/external-requests/create-list');
const { writeEnvFile } = require('./src/helpers/write-env');
const routes = require('./src/api/routes');

const app = express();

app.use(express.json());
app.use(cors());

const csvFilePath = '/home/matheus-alexandre/desafios_tecnicos/axur_test/src/Contatos.csv';

createList().then((response) => writeEnvFile(response.name, response.listId));

readCSV(csvFilePath)
  .then((response) => formatContactList(response))
  .then((response) => {
    response.forEach((contact) => {
      async.queue(async () => createContact(contact), 1);
    });
  });

getAllContacts()
  .then((response) => addContactsToList(response));

app.use('/axur', routes.contact);

app.use((_req, res) => {
  res.status(404).send('Endpoint não encontrado');
});

module.exports = { app };
