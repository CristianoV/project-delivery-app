const jwt = require('jsonwebtoken');
const fs = require('fs');

// require('dotenv/config');
// todo: como ler do arquivo jwt.evaluation.key?
const JWT_SECRET = fs.readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' });

const createToken = (user) => {
  const token = jwt.sign(user, JWT_SECRET, { algorithm: 'HS256' });
  return token;
};

const verifyToken = (token) => {
  try {
    const dados = jwt.verify(token, JWT_SECRET);
    return dados;
  } catch (error) {
    return null;
  }
};

module.exports = { createToken, verifyToken };
