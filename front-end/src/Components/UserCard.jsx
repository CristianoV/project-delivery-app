import PropTypes from 'prop-types';

function UserCard({ id, item, name, email, role, deleteUser }) {
  const ONE = 1;
  return (
    <tr key={ id }>
      <td
        data-testid={
          `admin_manage__element-user-table-item-number-${item}`
        }
      >
        {item + ONE}
      </td>
      <td
        data-testid={ `admin_manage__element-user-table-name-${item}` }
      >
        {name}
      </td>
      <td
        data-testid={
          `admin_manage__element-user-table-email-${item}`
        }
      >
        {email}
      </td>
      <td
        data-testid={
          `admin_manage__element-user-table-role-${item}`
        }
      >
        {role}
      </td>
      <td>
        <button
          type="button"
          data-testid={ `admin_manage__element-user-table-remove-${item}` }
          onClick={ () => deleteUser(id) }
        >
          Excluir
        </button>
      </td>
    </tr>
  );
}

UserCard.propTypes = {
  id: PropTypes.number.isRequired,
  item: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

export default UserCard;
