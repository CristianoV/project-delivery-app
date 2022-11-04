const md5 = require('md5');
const { User } = require('../database/models');
const tokenHelper = require('../helpers/token');

const login = async (email, password) => {
  const findUser = await User.findOne({ where: { email } });

  if (!findUser) {
    return {
      status: 404,
      message: 'User not found',
    };
  }

  const validPassword = md5(password) === findUser.password;

  if (!validPassword) {
    return {
      status: 400,
      message: 'Invalid password',
    };
  }
  const { password: userPass, ...userWithoutPassword } = findUser.dataValues;
  const token = tokenHelper.createToken(userWithoutPassword);
  return { token, ...userWithoutPassword };
};

module.exports = { login };