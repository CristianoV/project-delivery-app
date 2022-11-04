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
        navigate('/customer/products');
      } else {
        navigate('/seller/orders');
      }
    } catch (error) {
      setwrongLogin(true);
    }

  //   if (status === STATUS_OK) {
  //     localStorage.setItem('userLogin', JSON.stringify(data));
  //     navigate('/costumer/products');
  //   } else {
  //     console.log('passou');
  //     setwrongLogin(true);
  //   }
  }

  return (
    <form>
      <input
        type="email"
        data-testid="common_login__input-email"
        placeholder="email@email.com"
        value={ email }
        onChange={ ({ target }) => setEmail(target.value) }
      />
      <input
        type="password"
        data-testid="common_login__input-password"
        placeholder="*******"
        value={ password }
        onChange={ ({ target }) => setPassword(target.value) }
      />
      <button
        type="button"
        data-testid="common_login__button-login"
        disabled={ handleDisableButton() }
        onClick={ () => login() }
      >
        LOGIN
      </button>
      <button
        type="button"
        data-testid="common_login__button-register"
        onClick={ () => navigate('/register') }
      >
        Ainda não tenho uma conta
      </button>
      {wrongLogin && (
        <h6
          data-testid="common_login__element-invalid-email"
        >
          Não deu certo
        </h6>)}
    </form>
  );
}

export default LoginComponent;
