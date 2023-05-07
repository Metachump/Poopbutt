import React from 'react';

export const HeaderComponent = () => {
  return (
    <header>
      <h1>WebShirt</h1>
    </header>
  );
};

export const FooterComponent = () => {
  return (
    <footer>
      <p>&copy; 2023 WebShirt. All rights reserved.</p>
    </footer>
  );
};

export const ProductListComponent = ({ products }) => {
  return (
    <div className='product-list'>
      {products.map((product) => (
        <div key={product.id} className='product-item'>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export const ShoppingCartComponent = ({ cartItems }) => {
  return (
    <div className='shopping-cart'>
      {cartItems.map((item) => (
        <div key={item.id} className='cart-item'>
          <img src={item.image} alt={item.name} />
          <h2>{item.name}</h2>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};