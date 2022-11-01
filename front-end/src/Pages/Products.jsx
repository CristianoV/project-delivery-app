import { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Card from '../Components/Card';

export default function Products() {
  const [products, setProducts] = useState([]);
  const navigation = useNavigate();
  const MAX_PRODUCTS = 11;
  const user = localStorage.getItem('user');
  const { token } = JSON.parse(user);

  useEffect(() => {
    async function getUserAccount() {
      const STATUS_OK = 200;
      try {
        const { data, status } = await Axios({
          method: 'get',
          url: 'http://localhost:3001/products',
          headers: { authorization: token },
          data: {},
        });
        if (status === STATUS_OK) {
          setProducts(data);
        }
      } catch (error) {
        localStorage.removeItem('user');
        navigation('/login');
      }
    }
    getUserAccount();
  }, [token, navigation]);

  return (
    <div>
      <Navbar />
      {products && products.map((item, index) => {
        if (index <= MAX_PRODUCTS) {
          return (
            <Card
              image={ item.url_Image }
              title={ item.name }
              price={ item.price }
              id={ item.id }
              key={ item.id }
            />
          );
        }
        return null;
      })}
    </div>
  );
}