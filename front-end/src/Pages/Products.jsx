import { useEffect, useState } from 'react';
import Axios from 'axios';
import Navbar from '../Components/Navbar';
import Card from '../Components/Card';

export default function Products() {
  const [products, setProducts] = useState([]);

  async function getUserAccount() {
    const results = await (await Axios.get('http://localhost:3001/products')).data;
    return results;
  }

  useEffect(() => {
    getUserAccount().then((x) => setProducts(x));
  }, []);

  return (
    <div>
      <Navbar />
      {products && products.map((item) => (
        <Card
          image={ item.url_Image }
          title={ item.name }
          price={ item.price }
          id={ item.id }
          key={ item.id }
        />
      ))}
    </div>
  );
}
