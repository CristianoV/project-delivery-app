const userService = require('../service/userService');

const userController = {
  getSellers: async (_req, res) => {
    const sellers = await userService.getSellers();
    return res.status(200).json(sellers);
  },
};

module.exports = userController;
