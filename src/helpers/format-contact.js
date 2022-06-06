const formatContactList = (contactList) => contactList.map(({
  firstName, lastName, email, gender,
}) => ({
  properties: [
    { property: 'email', value: email },
    { property: 'firstName', value: firstName },
    { property: 'lastName', value: lastName },
    { property: 'gender', value: gender },
  ],
}));

module.exports = {
  formatContactList,
};
