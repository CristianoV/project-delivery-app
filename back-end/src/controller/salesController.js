const salesService = require('../service/salesService');

const salesController = {
  createSale: async (req, res) => {
    const newSale = await salesService.createSale(req.body);
    if (!newSale) return res.status(500).json({ message: 'Erro interno' });
    return res.status(201).json(newSale);
  },
};

module.exports = salesController;