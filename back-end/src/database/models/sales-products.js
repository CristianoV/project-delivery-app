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
    { timestamps: false, tableName: 'sales_products', underscored: true, },
  );

  SaleProduct.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      as: 'salesProduct',
      through: SaleProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });

    models.Sale.belongsToMany(models.Product, {
      as: 'salesProduct',
      through: SaleProduct,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
  };

  return SaleProduct;
};
