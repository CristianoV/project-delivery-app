import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [wrongLogin, setwrongLogin] = useState(false);
  const navigate = useNavigate();

  function handleDisableButton() {
    const MIN_LENGTH_PASSWORD = 6;
    const MIN_LENGTH_CHARACTERS = 12;
    const emailRegex = /^[a-z0-9-_.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/ig;
    const validEmail = emailRegex.test(email);

    return !(
      password.length >= MIN_LENGTH_PASSWORD && name.length >= MIN_LENGTH_CHARACTERS
       && validEmail);
  }

  async function register() {
    const CREATED = 201;
    try {
      const { data, status } = await Axios({
        method: 'post',
        url: 'http://localhost:3001/register',
        headers: {},
        data: {
          name,
          email,
          password },
      });
      // console.log(result);
      if (status === CREATED) {
        localStorage.setItem('userLogin', JSON.stringify(data));
        navigate('/customer/products');
      }
    } catch (error) {
      setwrongLogin(true);
    }
  }

  return (
    <form>
      <input
        type="input"
        data-testid="common_register__input-name"
        placeholder="Seu nome"
        value={ name }
        onChange={ ({ target }) => setName(target.value) }
      />
      <input
        type="email"
        data-testid="common_register__input-email"
        placeholder="email@email.com"
        value={ email }
        onChange={ ({ target }) => setEmail(target.value) }
      />
      <input
        type="password"
        data-testid="common_register__input-password"
        placeholder="*******"
        value={ password }
        onChange={ ({ target }) => setPassword(target.value) }
      />
      <button
        type="button"
        data-testid="common_register__button-register"
        disabled={ handleDisableButton() }
        onClick={ () => register() }
      >
        CADASTRAR
      </button>
      {wrongLogin && (
        <h6
          data-testid="common_register__element-invalid_register"
        >
          Não deu certo
        </h6>)}
    </form>
  );
}

export default RegisterComponent;
