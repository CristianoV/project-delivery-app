const { User } = require('../database/models');

const userService = {
  getSellers: async () => {
    const sellers = await User
      .findAll({ where: { role: 'seller' }, attributes: ['name'] });
    return sellers.map(({ name }) => name);
  },
};

module.exports = userService;