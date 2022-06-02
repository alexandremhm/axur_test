const createEmailList = (contactsList) => {
  const emailsList = contactsList.contacts
    .map((contact) => contact['identity-profiles'][0].identities
      .find(({ type }) => type === 'EMAIL').value);
  return emailsList;
};

module.exports = {
  createEmailList,
};
