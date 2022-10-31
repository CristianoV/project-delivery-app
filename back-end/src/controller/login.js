const loginService = require('../service/login');

const login = async (req, res) => {
   const { email, password } = req.body;
   const token = await loginService.login(email, password);

   if (token.message === 'User not found') {
    return res.status(404).json({ message: 'User not found' });
   }

   if (token.message === 'Invalid password') {
    return res.status(400).json({ message: 'Invalid password' });
   }

   return res.status(200).json(token);
};

module.exports = { login };