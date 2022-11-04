import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function CardOrders({ orderId, statusOrder, date, totalPrice }) {
  const navigate = useNavigate();
  const n = new Date(date);
  const priceFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return (
    <button
      type="button"
      data-testid$={ `${orderId}` }
      onClick={ () => navigate(`/customer/orders/${orderId}`) }
    >
      <div data-testid={ `customer_orders__element-order-id-${orderId}` }>
        {/* Verificar se é esse testid */}
        { orderId }
      </div>
      <div data-testid={ `customer_orders__element-delivery-status-${orderId}` }>
        { statusOrder }
      </div>
      <div data-testid={ `customer_orders__element-order-date-${orderId}` }>
        { n.toLocaleDateString('pt-BR') }
      </div>
      <div data-testid={ `customer_orders__element-card-price-${orderId}` }>
        {priceFormat.format(totalPrice)}
      </div>
    </button>
  );
}

CardOrders.propTypes = {
  orderId: PropTypes.number.isRequired,
  statusOrder: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default CardOrders;
