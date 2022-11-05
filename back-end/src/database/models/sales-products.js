module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: {
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      primaryKey: true,
      references: {
        model: 'sales',
        key: 'id',
      },
      
    }, 
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'products',
        key: 'id',
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
    } 
  },
    { timestamps: false, tableName: 'sales_products', underscored: true, },
  );

  SaleProduct.associate = (models) => {
    SaleProduct.belongsTo(models.Sale, {
      as: 'sales',
      // through: SaleProduct,
      foreignKey: 'saleId',
      // otherKey: 'product_id',
    });

    SaleProduct.belongsTo(models.Product, {
      as: 'products',
      // through: SaleProduct,
      foreignKey: 'productId',
      // otherKey: 'sale_id',
    });
  };

  return SaleProduct;
};
