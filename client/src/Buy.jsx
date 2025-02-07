import React from 'react';
import './Buy.css';

function Buy() {
  return (
    <div className="buy-container">
      <div className="buy-header">
        <h1>Buy Products</h1>
      </div>
      <div className="product-list">
        {/* Example product items */}
        <div className="product-item">
          <img src="https://marutiagroproducts.in/wp-content/uploads/2024/07/Frozen-Totapuri-Mango-Slices-Dices-and-Chunks.jpg" alt="Product" />
          <h2>Mango</h2>
          <p>Ratnagiri's Alphanso Mango</p>
          <button className="buy-button">Buy Now</button>
        </div>
        <div className="product-item">
          <img src="https://image.made-in-china.com/2f0j00ZcVkUgobZnqa/100-Natural-Product-Fresh-Vegetables-Fresh-Potatoes-for-Sale.webp" alt="Product" />
          <h2>Potato</h2>
          <p>Banaskantha's Potatos</p>
          <button className="buy-button">Buy Now</button>
        </div>
        <div className="product-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ045E-AzdLqTcZmIdZCNBNSV2svopYsiJ4iQ&s" alt="Product" />
          <h2>Sugarcane</h2>
          <p>Valsad's Sugarcane</p>
          <button className="buy-button">Buy Now</button>
        </div>
        <div className="product-item">
          <img src="https://www.commodityonline.com/leads/2024/01/1676375034_63eb73fa68586_3.webp" alt="Product" />
          <h2>Groundnut</h2>
          <p>Junagarh's Groundnut</p>
          <button className="buy-button">Buy Now</button>
        </div>
        <div className="product-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWrTtTmTZ6yoEWiNBF5ipCHD-HnmOeHv4QQw&s" alt="Product" />
          <h2>Apple</h2>
          <p>Kashmir's Apple</p>
          <button className="buy-button">Buy Now</button>
        </div>
        {/* Add more product items as needed */}
      </div>
    </div>
  );
}

export default Buy;