const sellers = ['davi', 'liesli'];

function DeliveryData() {
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
