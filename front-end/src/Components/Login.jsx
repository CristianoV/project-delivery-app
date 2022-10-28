import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleDisableButton() {
    const MIN_LENGTH_PASSWORD = 6;
    const emailRegex = /^[a-z0-9-_.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/ig;
    const validEmail = emailRegex.test(email);

    return !(password.length >= MIN_LENGTH_PASSWORD && validEmail);
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
      <h6
        data-testid="common_login__element-invalid-email"
      >
        { }
        {/* Renderização condicional. SE usuário inválido, aparecer esse elemento com qualquer mensagem. */}
      </h6>
    </form>
  );
}

export default LoginComponent;
