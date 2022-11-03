const salesService = require('../service/salesService');

const salesController = {
  createSale: async (req, res) => {
    const newSale = await salesService.createSale(req.body);
    return res.status(201).json(newSale);
  },
};

module.exports = salesController;