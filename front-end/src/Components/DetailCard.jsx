import PropTypes from 'prop-types';

function DetailCard(
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
        className="bg-secondary text-center"
        data-testid={
          `customer_order_details__element-order-table-item-number-${id}`
        }
      >
        {id + ONE}
      </td>
      <td
        className="bg-[#E5E5E5] text-center"
        data-testid={ `customer_order_details__element-order-table-name-${id}` }
      >
        {name}
      </td>
      <td
        className="bg-primary text-white text-center"
        data-testid={
          `customer_order_details__element-order-table-quantity-${id}`
        }
      >
        {quantity}
      </td>
      <td
        className="bg-tertiary text-white text-center"
        data-testid={
          `customer_order_details__element-order-table-unit-price-${id}`
        }
      >
        {priceFormat.format(unitPrice)}
      </td>
      <td
        className="bg-quaternary text-white text-center"
        data-testid={
          `customer_order_details__element-order-table-sub-total-${id}`
        }
      >
        {priceFormat.format(subTotal)}
      </td>
    </tr>
  );
}

DetailCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  unitPrice: PropTypes.string.isRequired,
  subTotal: PropTypes.string.isRequired,
};

export default DetailCard;
