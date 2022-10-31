const Product = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      url_Image: DataTypes.STRING,
    }, {
      timestamps: false,
      tableName: 'products',
      undescored: true,
    });
  
    // Product.associate = (models) => {
    // Product.hasMany(models.BlogPost,
    //   { foreignKey: 'id', as: 'BlogPosts' });
    // };
  
    return Product;
  };
  
  module.exports = Product;