import React from "react";

const MyOrders = ({ orders }) => (
  <div style={{ maxWidth: 700, margin: '32px auto', background: '#fff', borderRadius: 10, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: '32px 24px' }}>
    <h2 style={{ color: '#ff3e6c', marginBottom: 24 }}>My Orders</h2>
    {orders.length === 0 ? (
      <div style={{ color: '#888', fontSize: 18 }}>No orders placed yet.</div>
    ) : (
      orders.map(order => (
        <div key={order.id} style={{ marginBottom: 28, borderBottom: '1px solid #eee', paddingBottom: 18 }}>
          <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 2 }}>Order #{order.id}</div>
          <div style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>{order.date}</div>
          <div style={{ fontSize: 15, marginBottom: 8 }}>
            {order.items.map(item => (
              <div key={item.product.id}>
                {item.product.name} x {item.days} days = ₹{item.product.pricePerDay * item.days}
              </div>
            ))}
          </div>
          <div style={{ fontWeight: 500, color: '#ff3e6c', fontSize: 16 }}>
            Total: ₹{order.items.reduce((sum, item) => sum + item.product.pricePerDay * item.days, 0)}
          </div>
        </div>
      ))
    )}
  </div>
);

export default MyOrders; 