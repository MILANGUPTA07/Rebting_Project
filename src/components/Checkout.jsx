import React, { useState } from "react";

const Checkout = ({ cart, onConfirm }) => {
  const [user, setUser] = useState({ name: "", address: "", phone: "" });

  const total = cart.reduce(
    (sum, item) => sum + item.product.pricePerDay * item.days,
    0
  );

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(user);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
        <input
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
          required
        />
        <br />
        <input
          name="address"
          placeholder="Address"
          value={user.address}
          onChange={handleChange}
          required
        />
        <br />
        <input
          name="phone"
          placeholder="Phone"
          value={user.phone}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Confirm Order</button>
      </form>
      <h3>Order Summary</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.product.id}>
            {item.product.name} x {item.days} days = ₹
            {item.product.pricePerDay * item.days}
          </li>
        ))}
      </ul>
      <h4>Total: ₹{total}</h4>
    </div>
  );
};

export default Checkout; 