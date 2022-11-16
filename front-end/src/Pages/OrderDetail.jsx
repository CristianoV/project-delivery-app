import { useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import DetailCard from '../Components/DetailCard';

function OrderDetail() {
  const [products, setProducts] = useState([]);

  const { salesProducts } = products;
  const { seller } = products;
  const navigation = useNavigate();
  const { id } = useParams();

  const user = localStorage.getItem('user');
  const date = new Date(products.saleDate);
  const STATUS = 'customer_order_details__element-order-details-label-delivery-status';

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
        }
      } catch (error) {
        localStorage.removeItem('user');
        navigation('/login');
      }
    }
    getUserAccount();
  }, [id, user, navigation]);

  async function updateStatus(idSale) {
    setProducts({ ...products, status: 'Entregue' });
    const { token } = JSON.parse(user);
    await Axios({
      method: 'put',
      url: `http://localhost:3001/sales/${idSale}`,
      headers: { authorization: token },
      data: { status: 'Entregue' },
    });
  }

  return (
    <div className="flex flex-col">
      <Navbar />
      <h1 className="self-center font-bold mt-8">Detalhes do pedido:</h1>
      <div className="flex gap-2 items-center justify-center flex-wrap">
        <h1
          className="font-extrabold"
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          PEDIDOS:
          {' '}
          {id}
          ;
        </h1>
        <h1 data-testid="customer_order_details__element-order-details-label-seller-name">
          P.Vend:
          {' '}
          {seller && seller.name}
        </h1>
        <h1
          className="font-extrabold"
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          {products && date.toLocaleString('pt-BR')}
        </h1>
        <h1
          className="bg-[#CCB800] text-white font-bold py-2 px-4 rounded"
          data-testid={ STATUS }
        >
          {products && products.status}
        </h1>
        <button
          className={ `bg-primary text-white font-bold py-2
          px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed ` }
          data-testid="customer_order_details__button-delivery-check"
          type="button"
          disabled={ products.status !== 'Em Trânsito' }
          onClick={ () => updateStatus(id) }
        >
          MARCAR COMO ENTREGUE
        </button>
      </div>
      <table border="1" className="border border-black mx-auto mb-28 w-9/12">
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
              <DetailCard
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
      <h1
        className={ `bg-primary text-white font-bold py-2 px-4 rounded text-2xl
        fixed bottom-5 right-5 h-16` }
        data-testid="customer_order_details__element-order-total-price"
      >
        Total:
        {' '}
        {priceFormat.format(products.totalPrice)}
      </h1>
    </div>
  );
}

export default OrderDetail;
