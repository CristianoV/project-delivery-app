import PropTypes from 'prop-types';

function SellerDetailCard(
  { id, name, quantity, unitPrice, subTotal },
) {
  const priceFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  const ONE = 1;
  return (
    <tr key={ id }>
      <td
        data-testid={
          `seller_order_details__element-order-table-item-number-${id}`
        }
      >
        {id + ONE}
      </td>
      <td
        data-testid={ `seller_order_details__element-order-table-name-${id}` }
      >
        {name}
      </td>
      <td
        data-testid={
          `seller_order_details__element-order-table-quantity-${id}`
        }
      >
        {quantity}
      </td>
      <td
        data-testid={
          `seller_order_details__element-order-table-unit-price-${id}`
        }
      >
        {priceFormat.format(unitPrice)}
      </td>
      <td
        data-testid={
          `seller_order_details__element-order-table-sub-total-${id}`
        }
      >
        {priceFormat.format(subTotal)}
      </td>
    </tr>
  );
}

SellerDetailCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  unitPrice: PropTypes.string.isRequired,
  subTotal: PropTypes.string.isRequired,
};

export default SellerDetailCard;
