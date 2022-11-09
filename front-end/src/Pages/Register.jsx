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
      if (status === CREATED) {
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/customer/products');
      }
    } catch (error) {
      setwrongLogin(true);
    }
  }

  return (
    <form
      className="flex justify-center flex-col items-center gap-3 bg-[#E5E5E5]
    w-96 h-96 m-auto mt-20 place-content-center font-roboto shadow-lg rounded-lg"
    >
      <label htmlFor="name" className="flex flex-col">
        Nome
        <input
          className="border border-[#001813] rounded-md p-1 w-80 h-11 shadow-md"
          id="name"
          type="input"
          data-testid="common_register__input-name"
          placeholder="Seu nome"
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
        />
      </label>
      <label htmlFor="email" className="flex flex-col ">
        Email
        <input
          className="border border-[#001813] rounded-md p-1 w-80 h-11 shadow-md"
          id="email"
          type="email"
          data-testid="common_register__input-email"
          placeholder="email@email.com"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
        />
      </label>
      <label htmlFor="password" className="flex flex-col">
        Senha
        <input
          className="border border-[#001813] rounded-md p-1 w-80 h-11 shadow-md"
          id="password"
          type="password"
          data-testid="common_register__input-password"
          placeholder="*******"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>
      <button
        className="bg-primary rounded-lg w-80 h-11 text-white
          disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#036B59]"
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
