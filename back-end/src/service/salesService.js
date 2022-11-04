const { Sale } = require('../database/models');
const getDateForNewSale = require('../helpers/getDate');

const salesService = {
  createSale: async (sale) => {
    try {
      const { userId, totalPrice, sellerId, deliveryAddress, deliveryNumber } = sale;
      const newSale = await Sale.create(
        {
          userId,
          sellerId,
          totalPrice,
          deliveryAddress,
          deliveryNumber,
          saleDate: getDateForNewSale(),
          status: 'pendente',
        },
      );
      return newSale;
    } catch (err) {
      console.log(err);
      return null;
    }
  },
};

module.exports = salesService;