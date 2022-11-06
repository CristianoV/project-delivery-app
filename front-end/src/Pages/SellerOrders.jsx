import { useEffect/* , useState */ } from 'react';
import { Link, useNavigate } from 'react-router-dom';
/* import CardSellerOrder from '../Components/CardSellerOrder'; */
import Navbar from '../Components/Navbar';

function SellerOrders() {
  /* const [sales, setSales] = useState([]);
  const MAX_SALES = 10; */
  const navigation = useNavigate();
  const user = localStorage.getItem('user');

  useEffect(() => {
    async function getOrders() {
      const STATUS_OK = 200;
      try {
        // if (!user) {
        //   navigation('/login');
        // }
        const { token } = JSON.parse(user);
        const { data, status } = await Axios({
          method: 'get',
          url: 'http://localhost:3001/sales',
          headers: { authorization: token },
          data: {},
        });
        if (status === STATUS_OK) {
          setSales(data);
        }
      } catch (error) {
        // localStorage.removeItem('user');
        // navigation('/login');
      }
    }
    getOrders();
  }, [user, navigation]);
  return (
    <div>
      <Navbar />
      <button type="button" data-testid="seller_orders__element-delivery-status-1">
        <Link to="/seller/orders/1">Detalhes do pedido</Link>
      </button>
      {/* {sales.length !== 0 && sales.map((sale, index) => {
        if (index <= MAX_SALES) {
          return (
            <CardSellerOrder
              orderId={ sale.id }
              statusOrder={ sale.status }
              date={ sale.saleDate }
              totalPrice={ sale.totalPrice }
              address={ `${sale.deliveryAdress}, ${sale.deliveryNumber}` }
              // ! adicionado na template string acima.
              // addressNumber={ sale.deliveryNumber }
            />
          );
        }
        return null;
      })} */}
    </div>
  );
}

export default SellerOrders;
