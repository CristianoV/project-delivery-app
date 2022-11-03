const { Sales } = require('../database/models');
const getDateForNewSale = require('../helpers/getDate');

const salesService = {
  createSale: async (sale) => {
    try {
      // const { userId, totalPrice, sellerId, deliveryAdress, deliveryNumber } = sale;
      const sales = await Sales.findAll();
      console.log(sales, 'sale', sale);
      /* const newSale = await Sales.create(
        {
          userId,
          sellerId,
          totalPrice,
          deliveryAdress,
          deliveryNumber,
          saleDate: getDateForNewSale(),
          status: 'pendente',
        },
      );
      return newSale; */
    } catch (err) {
      console.log(err);
      return null;
    }
  },
};

module.exports = salesService;