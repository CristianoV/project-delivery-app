import PropTypes from 'prop-types';

function CardOrders({ orderId, statusOrder, date, totalPrice }) {
  return (
    <div>
      <span data-testid={ `customer_orders__element-order-id-${id}` }>
        { orderId }
      </span>
      <span data-testid={ `customer_orders__element-delivery-status-${id}` }>
        { statusOrder }
      </span>
      <span data-testid={ `customer_orders__element-order-date-${id}` }>
        { date }
      </span>
      <span data-testid={ `customer_orders__element-card-price-${id}` }>
        { totalPrice }
      </span>
    </div>
  );
}

CardOrders.propTypes = {
  orderId: PropTypes.number.isRequired,
  statusOrder: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default CardOrders;
