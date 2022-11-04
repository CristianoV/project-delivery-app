import { useContext, useState, useEffect } from 'react';
import CheckoutCard from '../Components/CheckoutCard';
import DeliveryData from '../Components/DeliveryData';
import Navbar from '../Components/Navbar';
import MyContext from '../context/store';

function CustomerCheckout() {
  const theme = useContext(MyContext);

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const priceFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  useEffect(() => {
    const semiTotal = theme.saller.reduce((acc, item) => {
      const { quantity, price } = item;
      return acc + (quantity * price);
    }, 0);
    setTotal(semiTotal);
    setCart(theme.saller);
  }, [theme.saller]);

  const removeItem = (id) => {
    theme.spendInheritance({ id, quantity: 0 });

    return true;
  };

  return (
    <div>
      <Navbar />
      <h3>Finalizar pedido</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product, index) => {
            const { id, title, quantity, price } = product;
            const subTotal = (quantity * price).toFixed(2);
            return (
              <CheckoutCard
                id={ index }
                name={ title }
                quantity={ quantity }
                unitPrice={ price }
                subTotal={ subTotal }
                removeItem={ removeItem }
                productId={ id }
                key={ id }
              />
            );
          })}
        </tbody>
      </table>
      <div
        data-testid="customer_checkout__element-order-total-price"
      >
        Total:
        {priceFormat.format(total)}
      </div>
      <DeliveryData totalPrice={ total } cart={ theme.saller } />
    </div>
  );
}

export default CustomerCheckout;
