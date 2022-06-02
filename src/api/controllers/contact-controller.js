const Service = require('../services/contact-service');

const getDomainsList = async (_req, res) => {
  try {
    const response = await Service.getDomainsList();
    return res.status(200).json({ message: 'Lista de contatos criada com sucesso!', response });
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};

module.exports = {
  getDomainsList,
};
