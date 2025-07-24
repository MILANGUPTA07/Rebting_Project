import React, { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
  const [days, setDays] = useState(1);

  const handleAdd = () => {
    if (days > 0) {
      addToCart(product, days);
      setDays(1);
    }
  };

  return (
    <div
      className="product-card"
      style={{
        width: '250px',
        minHeight: '100px',
        background: '#fff',
        marginBottom: '16px'
      }}
    >
      <img src={product.image} alt={product.name} width={200} height={150} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price per day: ₹{product.pricePerDay}</p>
      <input
        type="number"
        min="1"
        value={days}
        onChange={(e) => setDays(Number(e.target.value))}
        style={{ width: 60 }}
      />
      <button onClick={handleAdd}>Rent</button>
    </div>
  );
};

export default ProductCard; 