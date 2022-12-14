import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Axios from 'axios';

function DeliveryData({ totalPrice, cart }) {
  const user = localStorage.getItem('user');
  const navigation = useNavigate();
  const priceFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

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
    <section className="flex flex-col items-center">
      <h1
        data-testid="customer_checkout__element-order-total-price"
        className="text-2xl font-bold m-4 p-4 w-9/12"
      >
        Total:
        {priceFormat.format(totalPrice)}
      </h1>
      <h3>Detalhes e Endere??o de Entrega</h3>
      <form className="border sm:flex w-9/12 gap-8 items-center justify-center">
        <label htmlFor="sellers" className="flex flex-col">
          Pessoa Vendedora Respons??vel:
          <select
            className="border border-black rounded p-2"
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
        <label htmlFor="address" className="flex flex-col">
          Endere??o de Entrega:
          <input
            className="border border-black rounded p-2"
            placeholder="Ex: Rua dos Bobos"
            type="text"
            id="address"
            value={ deliveryAddress }
            data-testid="customer_checkout__input-address"
            onChange={ ({ target }) => setDeliveryAddress(target.value) }
            required
          />
        </label>
        <label htmlFor="addressNumber" className="flex flex-col">
          N??mero:
          <input
            className="border border-black rounded p-2"
            placeholder="Ex: 123"
            required
            type="number"
            value={ deliveryNumber }
            id="addressNumber"
            data-testid="customer_checkout__input-address-number"
            onChange={ ({ target }) => setDeliveryNumber(target.value) }
          />
        </label>
      </form>
      <button
        className="border border-black rounded p-2 bg-primary text-white m-8"
        type="button"
        id="submitOrder"
        data-testid="customer_checkout__button-submit-order"
        // value="Finalizar Pedido"
        onClick={ () => finishOrder(deliveryData) }
      >
        Finalizar Pedido
      </button>
    </section>
  );
}

DeliveryData.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default DeliveryData;
