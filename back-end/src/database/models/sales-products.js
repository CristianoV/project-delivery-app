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
  
    // PostCategory.associate = (models) => {
    //   models.BlogPost.belongsToMany(models.Category, {
    //     as: 'categories',
    //     through: PostCategory,
    //     foreignKey: 'postId',
    //     otherKey: 'categoryId',
    //   });
  
    //   models.Category.belongsToMany(models.BlogPost, {
    //     as: 'blogPosts',
    //     through: PostCategory,
    //     foreignKey: 'categoryId',
    //     otherKey: 'postId',
    //   });
    // };
  
    return SalesProducts;
  };
  
  module.exports = SalesProducts; 