import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigation = useNavigate();
  const { pathname } = useLocation();
  const pageRigth = pathname.split('/')[1];
  const user = localStorage.getItem('userLogin');
  const userObj = JSON.parse(user);

  return (
    <nav>
      {pageRigth === 'customer' && (
        <>
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-products"
            onClick={ () => navigation('/login') }
          >
            PRODUTOS
          </button>

          <button
            type="button"
            data-testid="customer_products__element-navbar-link-orders"
            onClick={ () => navigation('/login') }
          >
            MEUS PEDIDOS
          </button>
        </>
      )}
      {/* {page === 'manage' && (
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
          onClick={ () => navigation('/login') }
        >
          GERENCIAR USUÁRIOS
        </button>
      )}
      {page === 'requests' && (
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
          onClick={ () => navigation('/login') }
        >
          PEDIDOS
        </button>
      )} */}

      <h1 data-testid="customer_products__element-navbar-user-full-name">
        {userObj.name}
      </h1>
      <button
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
        onClick={ () => navigation('/login') }
      >
        Sair
      </button>
    </nav>
  );
}

export default Navbar;
