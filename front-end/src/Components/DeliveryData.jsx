import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

function DeliveryData() {
  const user = localStorage.getItem('user');
  const navigation = useNavigate();

  const [sellers, setSellers] = useState([]);

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
        }
      } catch (error) {
        localStorage.removeItem('user');
        navigation('/login');
      }
    }
    getSellers();
  }, [navigation, user]);

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
          />
        </label>
        <label htmlFor="addressNumber">
          Número:
          <input
            type="number"
            id="addressNumber"
            data-testid="customer_checkout__input-address-number"
          />
        </label>
        <label htmlFor="submitOrder">
          <input
            type="submit"
            id="submitOrder"
            data-testid="customer_checkout__button-submit-order"
            value="Finalizar Pedido"
          />
        </label>
      </form>
    </section>
  );
}

export default DeliveryData;
