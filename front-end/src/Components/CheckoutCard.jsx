import PropTypes from 'prop-types';
/* import { useState } from 'react'; */

/* const produtosPedidos = [
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
]; */

function CheckoutCard({ id, name, quantity, unitPrice, subTotal, removeItem }) {
  /* const semiTotal = produtosPedidos.reduce((acc, curr) => acc + curr.subTotal, 0);
  const [cart, setCart] = useState(produtosPedidos);
  const [total, setTotal] = useState(semiTotal);

  function removeItem(ID) {
    const newCart = cart.filter((item) => item.id !== ID);
    setTotal(newCart.reduce((acc, curr) => acc + curr.subTotal, 0));
    setCart(newCart);

    return true;
  } */

  return (
    <tr key={ id }>
      <td
        data-testid={
          `customer_checkout__element-order-table-item-number-${id}`
        }
      >
        {id}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-name-${id}` }
      >
        {name}
      </td>
      <td
        data-testid={
          `customer_checkout__element-order-table-quantity-${id}`
        }
      >
        {quantity}
      </td>
      <td
        data-testid={
          `customer_checkout__element-order-table-unit-price-${id}`
        }
      >
        {unitPrice}
      </td>
      <td
        data-testid={
          `customer_checkout__element-order-table-sub-total-${id}`
        }
      >
        {subTotal}
      </td>
      <td>
        <button
          type="button"
          data-testid={
            `customer_checkout__element-order-table-remove-${id}`
          }
          onClick={ () => removeItem(id) }
        >
          Remover
        </button>
      </td>
    </tr>
  );
}

CheckoutCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  unitPrice: PropTypes.number.isRequired,
  subTotal: PropTypes.number.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default CheckoutCard;
