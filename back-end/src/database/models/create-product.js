const Product = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: DataTypes.STRING(100),
      price: DataTypes.DECIMAL,
      urlImage: DataTypes.STRING(200),
    }, {
      timestamps: false,
      // tableName: 'products'
    });
  
    // Product.associate = (models) => {
    // Product.hasMany(models.BlogPost,
    //   { foreignKey: 'id', as: 'BlogPosts' });
    // };
  
    return Product;
  };
  
  module.exports = Product;