import { useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import SellerDetailCard from '../Components/SellerDetailCard';

function SellerOrderDetails() {
  const [products, setProducts] = useState([]);
  const [saleStatus, setSaleStatus] = useState('');
  const { salesProducts } = products;

  const navigation = useNavigate();
  const { id } = useParams();

  const user = localStorage.getItem('user');
  const date = new Date(products.saleDate);

  const STATUS = 'seller_order_details__element-order-details-label-delivery-status';

  const priceFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  useEffect(() => {
    async function getUserAccount() {
      const STATUS_OK = 201;
      try {
        if (!user) {
          navigation('/login');
        }
        const { token } = JSON.parse(user);
        const { data, status } = await Axios({
          method: 'get',
          url: `http://localhost:3001/user/orders/${id}`,
          headers: { authorization: token },
          data: {},
        });
        if (status === STATUS_OK) {
          setProducts(...data);
          setSaleStatus(data[0].status);
        }
      } catch (error) {
        localStorage.removeItem('user');
        navigation('/login');
      }
    }
    getUserAccount();
  }, [id, user, navigation]);

  useEffect(() => {
    async function updateStatus() {
      const { token } = JSON.parse(user);
      await Axios({
        method: 'put',
        url: `http://localhost:3001/sales/${id}`,
        headers: { authorization: token },
        data: { status: saleStatus },
      });
    }
    updateStatus();
  }, [id, saleStatus, user]);

  return (
    <div>
      <Navbar />
      Detalhes do pedido:
      <div>
        <div data-testid="seller_order_details__element-order-details-label-order-id">
          PEDIDO:
          {' '}
          {id}
        </div>
        <div data-testid="seller_order_details__element-order-details-label-order-date">
          {products && date.toLocaleDateString('pt-BR')}
        </div>
        <div
          data-testid={ STATUS }
        >
          {products && saleStatus}
        </div>
        <button
          data-testid="seller_order_details__button-preparing-check"
          type="button"
          onClick={ () => setSaleStatus('Preparando') }
          disabled={ saleStatus !== 'Pendente' }
        >
          PREPARAR PEDIDO
        </button>
        <button
          data-testid="seller_order_details__button-dispatch-check"
          type="button"
          disabled={ saleStatus !== 'Preparando' }
          onClick={ () => setSaleStatus('Em Trânsito') }
        >
          SAIU PARA ENTREGA
        </button>
      </div>
      <table border="1">
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {salesProducts && salesProducts.map((
            { products: product, quantity },
            index,
          ) => {
            const { id: productId, name, price } = product;
            const subTotal = (quantity * price).toFixed(2);
            return (
              <SellerDetailCard
                id={ index }
                name={ name }
                quantity={ quantity }
                unitPrice={ price }
                subTotal={ subTotal }
                productId={ productId }
                key={ productId }
              />
            );
          })}
        </tbody>
      </table>
      <h1 data-testid="seller_order_details__element-order-total-price">
        Total:
        {' '}
        {priceFormat.format(products.totalPrice)}
      </h1>
    </div>
  );
}

export default SellerOrderDetails;
