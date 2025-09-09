import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#cceeff' }}>
      <div>
        <Link to="/">Home</Link> | 
        <Link to="/products"> Products</Link> | 
        <Link to="/cart"> Cart</Link>
      </div>
      <div>
        🛒 Cart: {totalItems}
      </div>
    </header>
  );
};

export default Header;
