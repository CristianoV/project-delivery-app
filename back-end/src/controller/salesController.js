const salesService = require('../service/salesService');

const salesController = {
  createSale: async (req, res) => {
    const newSale = await salesService.createSale(req.body);
    if (!newSale) return res.status(500).json({ message: 'Erro interno' });
    return res.status(201).json(newSale);
  },
  selectAllSalesByUserId: async (req, res) => {
    const { id } = req.params;
    const sale = await salesService.selectAllSalesByUserId(id)
    return res.status(201).json(sale);
  }
  getSales: async (_req, res) => {
    const sales = await salesService.getSales();
    return res.status(200).json(sales);
  },
  getSalesById: async (req, res) => {
    const sales = await salesService.getSalesById(req.params.id);
    return res.status(200).json(sales);
  },
};

module.exports = salesController;