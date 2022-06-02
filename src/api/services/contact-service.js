const { createListOfDomains } = require('../../helpers/create-list-of-domains');
const { getAllContacts } = require('../external-requests/get-all-contacts');

const getDomainsList = async () => {
  const contactsList = await getAllContacts();
  const domainsList = createListOfDomains(contactsList);

  return domainsList;
};

module.exports = {
  getDomainsList,
};
