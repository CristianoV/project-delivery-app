import { /* useContext, */ useState/* , useEffect  */ } from 'react';
import CheckoutCard from '../Components/CheckoutCard';
import DeliveryData from '../Components/DeliveryData';
import Navbar from '../Components/Navbar';
// import MyContext from '../context/store';

const produtosPedidos = [
  {
    id: 1,
    productId: 1,
    name: 'heineken',
    quantity: 2,
    unitPrice: 5.5,
    subTotal: 11,
  },
  {
    id: 2,
    productId: 2,
    name: 'tequila',
    quantity: 3,
    unitPrice: 5,
    subTotal: 15,
  },
];

function CustomerCheckout() {
  const semiTotal = produtosPedidos.reduce((acc, { subTotal }) => acc + subTotal, 0);
  const [cart, setCart] = useState(produtosPedidos);
  const [total, setTotal] = useState(semiTotal);
  /* const theme = useContext(MyContext);

  console.log(theme); */

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setTotal(newCart.reduce((acc, { subTotal }) => acc + subTotal, 0));
    setCart(newCart);

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
          {cart.map((product) => {
            const { id, name, quantity, unitPrice, subTotal } = product;
            return (
              <CheckoutCard
                id={ id }
                name={ name }
                quantity={ quantity }
                unitPrice={ unitPrice }
                subTotal={ subTotal }
                removeItem={ removeItem }
                key={ id }
              />
            );
          })}
        </tbody>
      </table>
      <div
        data-testid="customer_checkout__element-order-total-price"
      >
        Total: R$
        {total}
      </div>
      <DeliveryData totalPrice={ total } />
    </div>
  );
}

export default CustomerCheckout;
