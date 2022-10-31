const registerService = require('../service/register');
// const { User } = require('../database/models');

// const register = async (req, res) => {
//    const { name, email, password } = req.body;
//    const hasUser = await registerService.register(name, email, password);
//      if (hasUser.message === 'User already register') {
//       return res.status(409).json({ message: 'User already register' });
//     }
//       return res.status(201).json(hasUser);
// };

const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const findUser = await registerService.register(name, email, password);
    if (findUser.message === 'User already register') {
      return res.status(409).json({ message: 'User already registered' });
    }
    return res.status(201).json({ token: findUser });
  } catch (error) {
    next(error);
  }
};

module.exports = { register };