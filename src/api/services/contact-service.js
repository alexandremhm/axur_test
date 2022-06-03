const { createListOfDomains } = require('../../helpers/create-list-of-domains');
const { getAllContactsFromList } = require('../external-requests/get-all-contacts-from-list');

const getDomainsList = async () => {
  const { LISTID } = process.env;
  console.log(process.env, 'GETDOMAINSLIST');
  const contactsList = await getAllContactsFromList(LISTID);
  console.log(contactsList.length, 'contactsList');
  const domainsList = createListOfDomains(contactsList);
  console.log(domainsList, 'domainsList');

  return domainsList;
};

module.exports = {
  getDomainsList,
};
