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
    <div>
      <button
        type="button"
        data-testid="customer_products__button-cart"
        onClick={ () => navigation('/customer/checkout') }
        disabled={ total === 0 }
      >
        Preço total:
        <span data-testid="customer_products__checkout-bottom-value">
          {priceFormat.format(total)}
        </span>
      </button>
    </div>
  );
}

export default CartShopping;
