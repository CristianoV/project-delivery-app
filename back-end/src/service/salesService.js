const { Sale, SaleProduct } = require('../database/models');
const { product } = require('../database/models');
const getDateForNewSale = require('../helpers/getDate');

const createSaleProducts = async (products, idSale) => {
  const salesProducts = products.map(({ id, quantity }) => {
    Number(id);
    Number(quantity);
    return ({
      saleId: idSale,
      productId: id,
      quantity,
    });
  });

  salesProducts.forEach(async ({ saleId, productId, quantity }) => {
    await SaleProduct.create({ saleId, productId, quantity });
  });
};

const salesService = {
  createSale: async (sale) => {
      const { userId, totalPrice, sellerId, deliveryAddress, deliveryNumber, cart } = sale;
      const newSale = await Sale.create(
        {
          userId,
          sellerId,
          totalPrice,
          deliveryAddress,
          deliveryNumber,
          saleDate: getDateForNewSale(),
          status: 'Pendente',
        },
      );
      if (!newSale) return null;
      await createSaleProducts(cart, newSale.id);

      return newSale;
  },
  selectAllSalesByUserId: async (id) => {
    const sale = await Sale.findAll({
      where: { id },
      include: [
        {
          all: true, nested: true,
        },
      ],
    });
    return sale;
  }
};

module.exports = salesService;