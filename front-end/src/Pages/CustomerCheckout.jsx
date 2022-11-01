import Navbar from '../Components/Navbar';

export default function CustomerCheckout() {
  return (
    <div>
      <Navbar />
      <h3>Finalizar pedido</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              data-testid="customer_checkout__element-order-table-item-number-1"
            >
              1
            </td>
            <td
              data-testid="customer_checkout__element-order-table-name-1"
            >
              Stella Artois 275ml
            </td>
            <td>Body3 linha1</td>
            <td>Body1 linha1</td>
            <td>Body2 linha1</td>
            <td>Body3 linha1</td>
          </tr>
          <tr>
            <td
              data-testid="customer_checkout__element-order-table-item-number-2"
            >
              2
            </td>
            <td
              data-testid="customer_checkout__element-order-table-name-2"
            >
              Heineken 600ml
            </td>
            <td>Body3 linha1</td>
            <td>Body1 linha1</td>
            <td>Body2 linha1</td>
            <td>Body3 linha1</td>
          </tr>
          <tr>
            <td
              data-testid="customer_checkout__element-order-table-item-number-3"
            >
              3
            </td>
            <td
              data-testid="customer_checkout__element-order-table-name-3"
            >
              Skol Lata 250ml
            </td>
            <td>Body3 linha1</td>
            <td>Body1 linha1</td>
            <td>Body2 linha1</td>
            <td>Body3 linha1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
