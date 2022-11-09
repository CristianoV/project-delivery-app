import { useState, useEffect } from 'react';
import Axios from 'axios';
import Navbar from '../Components/Navbar';
import UserCard from '../Components/UserCard';

function Admin() {
  const userObj = {
    name: '',
    email: '',
    password: '',
    role: 'customer',
  };
  const [newUser, setNewUser] = useState(userObj);
  const [errorMessage, setErrorMessage] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const { token } = JSON.parse(localStorage.getItem('user'));
      const { data } = await Axios({
        method: 'get',
        url: 'http://localhost:3001/users',
        headers: { authorization: token },
      });
      setUsers(data);
    }
    getUsers();
  }, []);

  const handleDisableButton = () => {
    const { name, email, password } = newUser;
    const MIN_LENGTH_PASSWORD = 6;
    const MIN_LENGTH_CHARACTERS = 12;
    const emailRegex = /^[a-z0-9-_.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/ig;
    const validEmail = emailRegex.test(email);

    return !(
      password.length >= MIN_LENGTH_PASSWORD && name.length >= MIN_LENGTH_CHARACTERS
       && validEmail);
  };

  const deleteUser = (id) => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    Axios({
      method: 'delete',
      url: `http://localhost:3001/users/${id}`,
      headers: { authorization: token },
    }).then(() => {
      const newUsers = users.filter((user) => user.id !== id);
      setUsers(newUsers);
    });
  };

  const createUser = async (userData) => {
    const CONFLICT = 409;
    try {
      const user = localStorage.getItem('user');
      const { token } = JSON.parse(user);
      const { data } = await Axios({
        method: 'post',
        url: 'http://localhost:3001/users',
        headers: { authorization: token },
        data: userData,
      });

      setUsers([...users, data]);
    } catch (error) {
      if (error.response.status === CONFLICT) {
        setErrorMessage('Email ou nome já registrado');
      }
    }
  };

  return (
    <div>
      <Navbar />
      <h3>Cadastrar novo usuário</h3>
      {errorMessage && (
        <p data-testid="admin_manage__element-invalid-register">
          {errorMessage}
        </p>)}
      <form>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            id="name"
            data-testid="admin_manage__input-name"
            value={ newUser.name }
            onChange={ ({ target }) => setNewUser({ ...newUser, name: target.value }) }
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            data-testid="admin_manage__input-email"
            value={ newUser.email }
            onChange={ ({ target }) => setNewUser({ ...newUser, email: target.value }) }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            id="password"
            data-testid="admin_manage__input-password"
            value={ newUser.password }
            onChange={
              ({ target }) => setNewUser({ ...newUser, password: target.value })
            }
          />
        </label>
        <label htmlFor="role">
          Tipo:
          <select
            name="role"
            id="role"
            data-testid="admin_manage__select-role"
            onChange={ ({ target }) => setNewUser({ ...newUser, role: target.value }) }
          >
            <option value="customer">Customer</option>
            <option value="seller">Seller</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="admin_manage__button-register"
          disabled={ handleDisableButton() }
          onClick={ () => createUser(newUser) }
        >
          Cadastrar
        </button>
      </form>
      <table border="1">
        <thead>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((
            { id, name, email, role },
            index,
          ) => (
            <UserCard
              id={ id }
              item={ index }
              name={ name }
              email={ email }
              role={ role }
              key={ id }
              deleteUser={ deleteUser }
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
