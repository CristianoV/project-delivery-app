import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../context/store';

function CartShopping() {
  const [total, setTotal] = useState(0);
  const theme = useContext(MyContext);
  const navigation = useNavigate();
  const priceFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  useEffect(() => {
    const cart = theme.saller.reduce((acc, item) => {
      const { quantity, price } = item;
      return acc + (quantity * price);
    }, 0);
    setTotal(cart);
    sessionStorage.setItem('cart', JSON.stringify(theme.saller));
  }, [theme]);

  return (
    <div className="fixed bottom-0 right-0 h-16">
      <button
        className={ `bg-primary text-white font-bold py-2 px-4 rounded 
        disabled:cursor-not-allowed disabled:bg-gray-400 text-2xl` }
        type="button"
        data-testid="customer_products__button-cart"
        onClick={ () => navigation('/customer/checkout') }
        disabled={ total === 0 }
      >
        Ver Carrinho:
        <span data-testid="customer_products__checkout-bottom-value">
          {priceFormat.format(total)}
        </span>
      </button>
    </div>
  );
}

export default CartShopping;
