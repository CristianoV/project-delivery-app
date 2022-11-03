import PropTypes from 'prop-types';

function CardOrders({ orderId, statusOrder, date, totalPrice }) {
  return (
    <div>
      <span data-testid={ `customer_orders__element-order-id-${orderId}` }>
        {/* Verificar se é esse testid */}
        { orderId + 1}
      </span>
      <span data-testid={ `customer_orders__element-delivery-status-${orderId}` }>
        { statusOrder }
      </span>
      <span data-testid={ `customer_orders__element-order-date-${orderId}` }>
        { date }
      </span>
      <span data-testid={ `customer_orders__element-card-price-${orderId}` }>
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
