const Sales = (sequelize, DataTypes) => {
    const Sales = sequelize.define('Sale', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
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
      deliveryAdress: DataTypes.STRING,
      deliveryNumber: DataTypes.STRING,
      saleDate: DataTypes.DATE,
      status: DataTypes.STRING
    }, {
      timestamps: false,
      underscored: true,
    });
  
    // Sales.associate = (models) => {
    // Sales.belongsTo(models.Users);
    // };
  
    return Sales;
  };
  
  module.exports = Sales;