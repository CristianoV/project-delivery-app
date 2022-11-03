import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardOrders from '../Components/CardOrders';
import Navbar from '../Components/Navbar';

function MyOrders() {
  const [sales, setSales] = useState([]);
  const MAX_SALES = 10;
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
      {sales.length !== 0 && sales.map((sale, index) => {
        if (index <= MAX_SALES) {
          return (
            <CardOrders
              orderId={ sale.id }
              statusOrder={ sale.status }
              date={ sale.saleDate }
              totalPrice={ sale.totalPrice }
            />
          );
        }
        return null;
      })}
    </div>
  );
}

export default MyOrders;
