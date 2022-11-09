import PropTypes from 'prop-types';

function CheckoutCard(
  { id, name, quantity, unitPrice, subTotal, removeItem, productId },
) {
  const priceFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  const ONE = 1;
  return (
    <tr key={ id }>
      <td
        className="bg-secondary text-center"
        data-testid={
          `customer_checkout__element-order-table-item-number-${id}`
        }
      >
        {id + ONE}
      </td>
      <td
        className="bg-[#E5E5E5] text-center"
        data-testid={ `customer_checkout__element-order-table-name-${id}` }
      >
        {name}
      </td>
      <td
        className="bg-primary text-white text-center"
        data-testid={
          `customer_checkout__element-order-table-quantity-${id}`
        }
      >
        {quantity}
      </td>
      <td
        className="bg-tertiary text-white text-center"
        data-testid={
          `customer_checkout__element-order-table-unit-price-${id}`
        }
      >
        {priceFormat.format(unitPrice)}
      </td>
      <td
        className="bg-quaternary text-white text-center"
        data-testid={
          `customer_checkout__element-order-table-sub-total-${id}`
        }
      >
        {priceFormat.format(subTotal)}
      </td>
      <td
        className="bg-secondary text-white text-center hover:text-black"
      >
        <button
          type="button"
          className="w-full h-full"
          data-testid={
            `customer_checkout__element-order-table-remove-${id}`
          }
          onClick={ () => removeItem(productId) }
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
  productId: PropTypes.number.isRequired,
};

export default CheckoutCard;
