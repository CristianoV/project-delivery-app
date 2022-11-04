module.exports = (sequelize, DataTypes) => {
    const Sale = sequelize.define('Sale', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      sellerId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      totalPrice: DataTypes.DECIMAL,
      deliveryAddress: DataTypes.STRING,
      deliveryNumber: DataTypes.STRING,
      saleDate: DataTypes.DATE,
      status: DataTypes.STRING
    }, {
      timestamps: false,
      underscored: true,
    });
  
    Sale.associate = (models) => {
      models.Sale.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'users'
      }),
      models.Sale.belongsTo(models.User, {
        foreignKey: 'seller_id',
        as: 'seller'
      }),
      Sale.hasMany(models.SaleProduct, {
        foreignKey: 'sale_id',
        as: 'salesProducts',
      });
    }
  
    return Sale;
};
