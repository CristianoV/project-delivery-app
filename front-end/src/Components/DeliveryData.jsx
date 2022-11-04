import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Axios from 'axios';

function DeliveryData({ totalPrice, cart }) {
  const user = localStorage.getItem('user');
  const navigation = useNavigate();

  const [sellers, setSellers] = useState([]);
  const [sellerId, setSellerId] = useState(0);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [deliveryData, setDeliveryData] = useState({});

  useEffect(() => {
    async function getSellers() {
      const STATUS_OK = 200;
      try {
        if (!user) {
          navigation('/login');
        }
        const { token } = JSON.parse(user);
        const { data, status } = await Axios({
          method: 'get',
          url: 'http://localhost:3001/users/sellers',
          headers: { authorization: token },
          data: {},
        });
        if (status === STATUS_OK) {
          setSellers(data);

          setSellerId(data[0].id);
        }
      } catch (error) {
        localStorage.removeItem('user');
        navigation('/login');
      }
    }
    getSellers();
  }, [navigation, user]);

  useEffect(() => {
    async function getDeliveryData() {
      setDeliveryData({ sellerId, deliveryAddress, deliveryNumber, cart });
    }
    getDeliveryData();
  }, [sellerId, deliveryAddress, deliveryNumber, cart]);

  const finishOrder = async (orderData) => {
    const STATUS_CREATED = 201;
    console.log(orderData);
    try {
      if (!user) {
        navigation('/login');
      }
      const { id: userId, token } = JSON.parse(user);
      const { data, status } = await Axios({
        method: 'post',
        url: 'http://localhost:3001/sales',
        headers: { authorization: token },
        data: { userId, totalPrice, ...orderData },
      });
      if (status === STATUS_CREATED) {
        navigation(`/customer/orders/${data.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <h3>Detalhes e Endereço de Entrega</h3>
      <form>
        <label htmlFor="sellers">
          Pessoa Vendedora Responsável:
          <select
            name="sellers"
            id="sellers"
            data-testid="customer_checkout__select-seller"
            onChange={ ({ target }) => setSellerId(target.value) }
          >
            {sellers.map(({ id, name }) => (
              <option value={ id } key={ id }>{name}</option>
            ))}
          </select>
        </label>
        <label htmlFor="address">
          Endereço de Entrega:
          <input
            type="text"
            id="address"
            data-testid="customer_checkout__input-address"
            onChange={ ({ target }) => setDeliveryAddress(target.value) }
          />
        </label>
        <label htmlFor="addressNumber">
          Número:
          <input
            type="number"
            id="addressNumber"
            data-testid="customer_checkout__input-address-number"
            onChange={ ({ target }) => setDeliveryNumber(target.value) }
          />
        </label>
        <button
          type="button"
          id="submitOrder"
          data-testid="customer_checkout__button-submit-order"
          value="Finalizar Pedido"
          onClick={ () => finishOrder(deliveryData) }
        >
          Finalizar Pedido
        </button>
      </form>
    </section>
  );
}

DeliveryData.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default DeliveryData;
