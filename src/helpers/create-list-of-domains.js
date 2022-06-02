const createListOfDomains = (emailList) => {
  const domains = {};
  emailList.forEach((email) => {
    const domain = email.split('@')[1];
    if (domains[domain]) {
      domains[domain] += 1;
    } else {
      domains[domain] = 1;
    }
  });
  return [...Object.keys(domains)].map((domain) => ({ domain, quantity: domains[domain] }));
};

module.exports = {
  createListOfDomains,
};
