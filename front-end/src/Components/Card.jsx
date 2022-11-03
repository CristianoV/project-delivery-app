import { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/store';

function Card({ image, title, price, id }) {
  const [quantity, setQuantity] = useState(0);
  const theme = useContext(MyContext);

  const priceFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  useEffect(() => {
    theme.spendInheritance({ id, quantity, price });
  }, [quantity, id, price]);

  return (
    <div>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ image }
        alt={ title }
      />
      <div>
        <h3 data-testid={ `customer_products__element-card-title-${id}` }>{title}</h3>
        <p data-testid={ `customer_products__element-card-price-${id}` }>
          {priceFormat.format(price)}
        </p>
        <div>
          <button
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            onClick={ () => quantity > 0 && setQuantity(quantity - 1) }
          >
            -
          </button>
          <input
            type="number"
            data-testid={ `customer_products__input-card-quantity-${id}` }
            name=""
            min={ 0 }
            id=""
            value={ quantity }
            onChange={ (e) => {
              if (e.target.value >= 0) {
                setQuantity(Number(e.target.value));
              }
            } }
          />
          <button
            type="button"
            data-testid={ `customer_products__button-card-add-item-${id}` }
            onClick={ () => setQuantity(quantity + 1) }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
