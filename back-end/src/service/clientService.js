const { Product } = require('../database/models');

const clientService = {
  getAllProducts: async () => {
    const products = await Product.findAll();
    return products;
  },
};

module.exports = clientService;
