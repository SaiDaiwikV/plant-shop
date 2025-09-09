import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const plants = [
  { id: 1, name: 'Monstera', price: 25, category: 'Indoor', image: 'monstera.jpg' },
  { id: 2, name: 'Fiddle Leaf Fig', price: 30, category: 'Indoor', image: 'fiddle.jpg' },
  { id: 3, name: 'Snake Plant', price: 20, category: 'Low Light', image: 'snake.jpg' },
  { id: 4, name: 'Succulent', price: 10, category: 'Low Light', image: 'succulent.jpg' },
  { id: 5, name: 'Cactus', price: 15, category: 'Sunlight', image: 'cactus.jpg' },
  { id: 6, name: 'Aloe Vera', price: 12, category: 'Sunlight', image: 'aloe.jpg' },
];

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      <h1>Product Listing</h1>
      <div className="plant-grid">
        {plants.map((plant) => {
          const isInCart = cartItems.find(item => item.id === plant.id);
          return (
            <div key={plant.id} className="plant-card">
              <img src={plant.image} alt={plant.name} width="150" />
              <h3>{plant.name}</h3>
              <p>${plant.price}</p>
              <button 
                onClick={() => handleAddToCart(plant)} 
                disabled={!!isInCart}
              >
                {isInCart ? 'Added' : 'Add to Cart'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductListingPage;
