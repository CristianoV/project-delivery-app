const User = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    }, {
      timestamps: false,
      tableName: 'users'
    });
  
    // User.associate = (models) => {
    // User.hasMany(models.BlogPost,
    //   { foreignKey: 'id', as: 'BlogPosts' });
    // };
  
    return User;
  };
  
  module.exports = User;