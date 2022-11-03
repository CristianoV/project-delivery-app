const { Sales } = require('../database/models');

const salesService = {
  createSale: async (sale) => {
    try {
      const newSale = await Sales.create(sale);
      return newSale;
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = salesService;