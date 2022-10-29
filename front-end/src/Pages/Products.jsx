import { useEffect, useState } from 'react';
import Axios from 'axios';
import Navbar from '../Components/Navbar';
import Card from '../Components/Card';

export default function Products() {
  const [products, setProducts] = useState([]);

  async function getUserAccount() {
    const { results } = await (await Axios.get('https://rickandmortyapi.com/api/character')).data;
    return results;
  }

  useEffect(() => {
    getUserAccount().then((x) => setProducts(x));
  }, []);

  return (
    <div>
      <Navbar />
      {/* {products && products.map((item) => (
        <Card
          image={ item.urlImage }
          title={ item.name }
          price={ item.price }
          id={ item.id }
          key={ item.id }
        />
      ))} */}
      {products && products.map((item) => (
        <Card
          image={ item.image }
          title={ item.name }
          price={ item.species }
          id={ item.status }
          key={ item.name }
        />
      ))}
    </div>
  );
}
