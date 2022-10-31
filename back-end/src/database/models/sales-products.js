module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,  
    }, 
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
    } 
  },
    { timestamp: false },
  );

  SaleProduct.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: SaleProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });

    models.Sale.belongsToMany(models.Product, {
      as: 'salesproducts',
      through: SaleProduct,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
  };

  return SaleProduct;
};
