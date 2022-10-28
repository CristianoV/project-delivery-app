const SalesProducts = (sequelize, DataTypes) => {

    const SalesProducts = sequelize.define('SaleProduct', {
      saleId: {
        type: DataTypes.INTEGER,
        primaryKey: true,  
      }, 
      productId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      } 
    },
      { timestamp: false, tableName: 'salesProducts' },
    );
  
    SalesProducts.associate = (models) => {
      models.sales.belongsToMany(models.products, {
        through: SalesProducts,
        foreignKey: 'sale_id',
        otherKey: 'product_id',
        as: 'product',
      });
  
      models.products.belongsToMany(models.sales, {
        through: SalesProducts,
        foreignKey: 'product_id',
        otherKey: 'sale_id',
        as: 'sale',
      });
    };
  
    return SalesProducts;
  };
  
module.exports = SalesProducts; 