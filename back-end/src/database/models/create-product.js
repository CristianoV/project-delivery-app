module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    url_Image: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'products',
    undescored: true,
  });

  Product.associate = (models) => {
    Product.hasMany(models.SaleProduct, {
      foreignKey: 'product_id',
      as: 'products',
    });
  };

  return Product;
};
