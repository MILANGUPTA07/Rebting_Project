import React from "react";

const Cart = ({ cart, updateCartItem, removeCartItem, goToCheckout }) => {
  const total = cart.reduce(
    (sum, item) => sum + item.product.pricePerDay * item.days,
    0
  );

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, idx) => (
              <li key={item.product.id} style={{ marginBottom: 16 }}>
                <img src={item.product.image} alt={item.product.name} width={200} height={150} />
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 16, flex: 1 }}>
                  <span style={{ fontWeight: 700, fontSize: 18 }}>{item.product.name}</span>
                  <span style={{ color: '#555', fontSize: 15, margin: '4px 0 2px 0' }}>{item.product.description}</span>
                  <span style={{ color: '#ff3e6c', fontWeight: 600 }}>₹{item.product.pricePerDay}/day</span>
                </div>
                <input
                  type="number"
                  min="1"
                  value={item.days}
                  onChange={(e) => updateCartItem(item.product.id, Number(e.target.value))}
                  style={{ width: 50, marginLeft: 8 }}
                />
                <span> days</span>
                <button onClick={() => removeCartItem(item.product.id)} style={{ marginLeft: 8 }}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ₹{total}</h3>
          <button onClick={goToCheckout}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart; 