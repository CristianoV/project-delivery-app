const registerService = require('../service/register');
// const { User } = require('../database/models');

const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const findUser = await registerService.register(name, email, password);
    if (findUser.message === 'User already register') {
      return res.status(409).json({ message: 'User already registered' });
    }
    return res.status(201).json(findUser);
  } catch (error) {
    next(error);
  }
};

module.exports = { register };