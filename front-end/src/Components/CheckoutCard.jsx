import PropTypes from 'prop-types';

function CheckoutCard({ id, name, quantity, unitPrice, subTotal, removeItem }) {
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
