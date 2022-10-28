import React, { useState } from 'react';

function RegisterComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleDisableButton() {
    const MIN_LENGTH_PASSWORD = 6;
    const MIN_LENGTH_CHARACTERS = 12;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const validEmail = emailRegex.test(email);

    return !(
      password.length > MIN_LENGTH_PASSWORD && name.length > MIN_LENGTH_CHARACTERS
       && validEmail);
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
      >
        CADASTRAR
      </button>
      <h6
        data-testid="common_register__element-invalid_register"
      >
        { }
        {/* Renderização condicional. SE usuário inválido, aparecer esse elemento com qualquer mensagem. */}
      </h6>
    </form>
  );
}

export default RegisterComponent;
