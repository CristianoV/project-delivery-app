import { useNavigate, useLocation, Link } from 'react-router-dom';

function Navbar() {
  const navigation = useNavigate();
  const { pathname } = useLocation();
  const pageRigth = pathname.split('/')[1];
  const user = localStorage.getItem('user');
  const userObj = JSON.parse(user);

  return (
    <nav>
      {pageRigth === 'customer' && (
        <>
          <Link
            to="/customer/products"
            data-testid="customer_products__element-navbar-link-products"
          >
            PRODUTOS
          </Link>

          <Link
            to="/customer/checkout"
            data-testid="customer_products__element-navbar-link-orders"
          >
            MEUS PEDIDOS
          </Link>
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
        onClick={ () => {
          localStorage.removeItem('user');
          navigation('/login');
        } }
      >
        Sair
      </button>
    </nav>
  );
}

export default Navbar;
