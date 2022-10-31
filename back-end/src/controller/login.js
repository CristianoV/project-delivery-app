const loginService = require('../service/login');

const login = async (req, res) => {
   const { email, password } = req.body;
   const user = await loginService.login(email, password);

   if (user.message === 'User not found') {
    return res.status(404).json({ message: 'User not found' });
   }

   if (user.message === 'Invalid password') {
    return res.status(400).json({ message: 'Invalid password' });
   }

   return res.status(200).json(user);
};

module.exports = { login };