const SalesProducts = (sequelize, DataTypes) => {

    const SalesProducts = sequelize.define('SaleProduct', {
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
      { timestamp: false, tableName: 'salesProducts' },
    );
  
    SalesProducts.associate = (models) => {
      models.Sales.belongsToMany(models.Products, {
        through: SalesProducts,
        foreignKey: 'sale_id',
        otherKey: 'product_id',
        as: 'product',
      });
  
      models.Products.belongsToMany(models.Sales, {
        through: SalesProducts,
        foreignKey: 'product_id',
        otherKey: 'sale_id',
        as: 'sale',
      });
    };
  
    return SalesProducts;
  };
  
module.exports = SalesProducts; 