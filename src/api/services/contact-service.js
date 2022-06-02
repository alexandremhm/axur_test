const { createListOfDomains } = require('../../helpers/create-list-of-domains');
const { getAllContactsFromList } = require('../external-requests/get-all-contacts-from-list');

const getDomainsList = async () => {
  const { LISTID } = process.env;
  const contactsList = await getAllContactsFromList(LISTID);
  const domainsList = createListOfDomains(contactsList);

  return domainsList;
};

module.exports = {
  getDomainsList,
};
