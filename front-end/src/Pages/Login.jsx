import { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [wrongLogin, setwrongLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      navigate('/customer/products');
    }
  }, [navigate]);

  function handleDisableButton() {
    const MIN_LENGTH_PASSWORD = 6;
    const emailRegex = /^[a-z0-9-_.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/ig;
    const validEmail = emailRegex.test(email);

    return !(password.length >= MIN_LENGTH_PASSWORD && validEmail);
  }

  async function login() {
    const STATUS_OK = 200;
    try {
      const { data, status } = await Axios({
        method: 'post',
        url: 'http://localhost:3001/login',
        headers: {},
        data: {
          email, password,
        },
      });
      if (status === STATUS_OK) {
        localStorage.setItem('user', JSON.stringify(data));
        if (data.role === 'seller') {
          return navigate('/seller/orders');
        }
        if (data.role === 'administrator') {
          return navigate('/admin/manage');
        }
        navigate('/customer/products');
      }
    } catch (error) {
      setwrongLogin(true);
    }
  }

  return (
    <div>
      <form
        className="flex justify-center flex-col items-center gap-3 bg-[#E5E5E5]
      w-96 h-96 m-auto mt-20 place-content-center font-roboto shadow-lg rounded-lg"
      >
        <label htmlFor="email" className="flex flex-col">
          Login
          <input
            className="border border-[#001813] rounded-md p-1 w-80 h-11 shadow-md"
            type="email"
            data-testid="common_login__input-email"
            placeholder="email@email.com"
            id="email"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>
        <label htmlFor="password" className="flex flex-col">
          Senha
          <input
            className="border border-[#001813] rounded-md p-1 w-80 h-11 shadow-md"
            type="password"
            data-testid="common_login__input-password"
            placeholder="*******"
            id="password"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>
        {wrongLogin && (
          <h6
            data-testid="common_login__element-invalid-email"
            className="text-danger text-sm font-bold text-center"
          >
            Senha ou Login inválidos
          </h6>)}
        <button
          className="bg-primary rounded-lg w-80 h-11 text-white
          disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#036B59]"
          type="button"
          data-testid="common_login__button-login"
          disabled={ handleDisableButton() }
          onClick={ () => login() }
        >
          LOGIN
        </button>
        <button
          className="border-2 border-primary rounded-lg w-80 h-11 text-primary"
          type="button"
          data-testid="common_login__button-register"
          onClick={ () => navigate('/register') }
        >
          Ainda não tenho uma conta
        </button>
      </form>
    </div>
  );
}

export default LoginComponent;
