const express = require('express');
require('dotenv').config();
const cors = require('cors');
const async = require('async');
const { readCSV } = require('./src/helpers/read-csv');
const { formatContactList } = require('./src/helpers/format-contact');
const { createContact } = require('./src/api/external-requests/create-contact');
const { getAllContacts } = require('./src/api/external-requests/get-all-contacts');
const { addContactsToList } = require('./src/api/external-requests/insert-contacts-to-list');
const { createList } = require('./src/api/external-requests/create-list');
const routes = require('./src/api/routes');

const app = express();

app.use(express.json());
app.use(cors());

const csvFilePath = '/home/matheus-alexandre/desafios_tecnicos/axur_test/src/Contatos.csv';

readCSV(csvFilePath)
  .then((response) => formatContactList(response))
  .then((response) => {
    async.eachSeries(response, (contact, callback) => {
      createContact(contact)
        .then(() => setTimeout(() => callback(), 1));
    })
      .then(() => console.log('contatos inseridos com sucesso'))
      .then(() => getAllContacts())
      .then((res) => {
        createList().then(({ listId }) => addContactsToList(res, listId));
      })
      .then(() => console.log('contatos inseridos na lista com sucesso'));
  });

app.use('/axur', routes.contact);

app.use((_req, res) => {
  res.status(404).send('Endpoint não encontrado');
});

module.exports = { app };
