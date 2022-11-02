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
      </form>
    </section>
  );
}

export default DeliveryData;
