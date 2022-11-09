const md5 = require('md5');
const { Op } = require('sequelize');
const { User } = require('../database/models');

const userService = {
  getUsers: async () => {
    const users = await User
      .findAll({ where: { role: { [Op.not]: 'administrator' } },
      attributes: { exclude: ['password'] } });
    
    return users;
  },
  getSellers: async () => {
    const sellers = await User
      .findAll({ where: { role: 'seller' }, attributes: ['id', 'name'] });
    return sellers;
  },
  createUser: async (user) => {
    const { name, email, password, role } = user;
    const findByName = await User.findOne({ where: { name } });
    const findByEmail = await User.findOne({ where: { email } });

    if (findByName || findByEmail) {
      return {
        status: 409,
        message: 'User already register',
      };
    }

    const passwordMd5 = md5(password);
    const newUser = await User.create({ name, email, password: passwordMd5, role });

    return newUser;
  },
  deleteUser: async (id) => {
    const user = await User.findByPk(id);
    if (!user) return null;
    await User.destroy({ where: { id } });
    return user;
  },
};

module.exports = userService;