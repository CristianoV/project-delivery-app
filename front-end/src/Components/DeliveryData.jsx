import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

function DeliveryData() {
  const user = localStorage.getItem('user');
  const navigation = useNavigate();

  const [sellers, setSellers] = useState([]);
  const [responsibleSeller, setResponsibleSeller] = useState('');
  const [address, setAddress] = useState('');
  const [adressNumber, setAdressNumber] = useState('');
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
          setSellers(data.map((item) => item.name));
          setResponsibleSeller(data[0].name);
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
      setDeliveryData({ responsibleSeller, address, adressNumber });
    }
    getDeliveryData();
  }, [responsibleSeller, address, adressNumber]);

  const finishOrder = async (orderData) => {
    const STATUS_CREATED = 201;
    try {
      if (!user) {
        navigation('/login');
      }
      const { token } = JSON.parse(user);
      const { status } = await Axios({
        method: 'post',
        url: 'http://localhost:3001/sales',
        headers: { authorization: token },
        data: orderData,
      });
      if (status === STATUS_CREATED) {
        navigation('/products');
      }
    } catch (error) {
      /* localStorage.removeItem('user');
      navigation('/login'); */
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
            onChange={ ({ target }) => setResponsibleSeller(target.value) }
          >
            {sellers.map((seller, id) => (
              <option value={ seller } key={ id }>{seller}</option>
            ))}
          </select>
        </label>
        <label htmlFor="address">
          Endereço de Entrega:
          <input
            type="text"
            id="address"
            data-testid="customer_checkout__input-address"
            onChange={ ({ target }) => setAddress(target.value) }
          />
        </label>
        <label htmlFor="addressNumber">
          Número:
          <input
            type="number"
            id="addressNumber"
            data-testid="customer_checkout__input-address-number"
            onChange={ ({ target }) => setAdressNumber(target.value) }
          />
        </label>
        <label htmlFor="submitOrder">
          <input
            type="button"
            id="submitOrder"
            data-testid="customer_checkout__button-submit-order"
            value="Finalizar Pedido"
            onClick={ () => finishOrder(deliveryData) }
          />
        </label>
      </form>
    </section>
  );
}

export default DeliveryData;
