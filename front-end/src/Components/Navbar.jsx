// import { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

function Navbar() {
  // const [user, setUser] = useState('');
  const navigation = useNavigate();
  const { pathname } = useLocation();
  const pageRigth = pathname.split('/');
  const user = JSON.parse(localStorage.getItem('user'));

  /* useEffect(() => {
    if (userLocal) {
      const userObj = JSON.parse(user);
      setUser(userObj.name);
    }
  }, [userLocal, user]); */

  return (
    <nav className="flex justify-between h-24 w-auto">
      {pageRigth[1] === 'customer' && (
        <div className="bg-primary w-4/6 flex items-center text-white gap-5 text-center">
          <Link
            to="/customer/products"
            data-testid="customer_products__element-navbar-link-products"
            className={
              pageRigth[2] === 'products'
                ? `text-lg font-bold cursor-pointer bg-secondary 
                h-24 w-2/6 flex justify-center items-center cel:w-3/6`
                : `text-lg w-2/6 font-bold cursor-pointer 
                flex justify-center items-center cel:w-3/6`
            }
          >
            PRODUTOS
          </Link>

          <Link
            to="/customer/orders"
            data-testid="customer_products__element-navbar-link-orders"
            className={
              pageRigth[2] === 'orders'
                ? `text-lg font-bold cursor-pointer bg-secondary 
              h-24 w-2/6 flex justify-center items-center cel:w-3/6`
                : `text-lg w-2/6 font-bold cursor-pointer 
              flex justify-center items-center cel:w-3/6`
            }
          >
            MEUS PEDIDOS
          </Link>
        </div>
      )}
      {pageRigth[1] === 'admin' && (
        <div className="bg-primary w-4/6 flex items-center text-white gap-5">
          <Link
            className={ `text-lg w-2/6 font-bold cursor-pointer 
            flex justify-center items-center` }
            type="button"
            data-testid="customer_products__element-navbar-link-orders"
            to="/admin/manage"
          >
            GERENCIAR USU??RIOS
          </Link>
        </div>
      )}
      {pageRigth[1] === 'seller' && (
        <div className="bg-primary w-4/6 flex items-center text-white gap-5">
          <Link
            className={ `text-lg w-2/6 font-bold cursor-pointer 
            flex justify-center items-center` }
            data-testid="customer_products__element-navbar-link-orders"
            to="/seller/orders"
          >
            PEDIDOS
          </Link>
        </div>
      )}
      <div className="flex w-2/6">
        <h1
          data-testid="customer_products__element-navbar-user-full-name"
          className="text-lg font-bold bg-tertiary w-3/4 flex
          items-center justify-center text-white text-center"
        >
          {user && user.name}
        </h1>
        <button
          className="text-lg font-bold bg-quaternary w-1/4 flex
          items-center justify-center text-white"
          data-testid="customer_products__element-navbar-link-logout"
          type="button"
          onClick={ () => {
            localStorage.removeItem('user');
            navigation('/login');
          } }
        >
          Sair
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
