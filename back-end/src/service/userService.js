const { User } = require('../database/models');

const userService = {
  getSellers: async () => {
    const sellers = await User
      .findAll({ where: { role: 'seller' }, attributes: ['id', 'name'] });
    return sellers;
  },
};

module.exports = userService;