// const { Op } = require('sequelize');
const md5 = require('md5');
const { User } = require('../database/models');
const tokenHelper = require('../helpers/token');

const register = async (name, email, password) => {
  const findByName = await User.findOne({ where: { name } });
  const findByEmail = await User.findOne({ where: { email } });
  // https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
  // const findUser = await User.findAll({
  //   where: {
  //     [Op.or]: [{ name }, { email }],
  //   },
  // });

  if (findByName || findByEmail) {
    return {
      status: 409,
      message: 'User already register',
    };
  }
  
  const passwordMd5 = md5(password);
  const created = await User.create({ name, email, password: passwordMd5, role: 'customer' });
  // created.save();
  const { password: userPass, ...userWithoutPassword } = created.dataValues;
  const token = tokenHelper.createToken(userWithoutPassword);
  return token;
  // return { name, email, password };
};

module.exports = { register };
