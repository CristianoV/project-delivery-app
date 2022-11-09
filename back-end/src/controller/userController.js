const userService = require('../service/userService');

const userController = {
  getUsers: async (_req, res) => {
    const users = await userService.getUsers();
    return res.status(200).json(users);
  },
  getSellers: async (_req, res) => {
    const sellers = await userService.getSellers();
    return res.status(200).json(sellers);
  },
  createUser: async (req, res) => {
    const newUser = await userService.createUser(req.body);
    return res.status(newUser.status || 201).json(newUser);
  },
  deleteUser: async (req, res) => {
    const { id } = req.params;
    const user = await userService.deleteUser(id);
    if (!user) return res.status(404).json({ message: 'User does not exist' });
    return res.status(204).end();
  },
};

module.exports = userController;
