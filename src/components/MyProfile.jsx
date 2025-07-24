import React from "react";

const MyProfile = ({ user }) => (
  <div style={{ maxWidth: 500, margin: '32px auto', background: '#fff', borderRadius: 10, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: '32px 24px' }}>
    <h2 style={{ color: '#ff3e6c', marginBottom: 24 }}>My Profile</h2>
    {!user ? (
      <div style={{ color: '#888', fontSize: 18 }}>No profile information available. Place an order to set your profile.</div>
    ) : (
      <div style={{ fontSize: 17 }}>
        <div style={{ marginBottom: 14 }}><strong>Name:</strong> {user.name}</div>
        <div style={{ marginBottom: 14 }}><strong>Address:</strong> {user.address}</div>
        <div style={{ marginBottom: 14 }}><strong>Contact Number:</strong> {user.phone}</div>
        <div style={{ marginBottom: 14 }}><strong>Email:</strong> {user.email || <span style={{ color: '#aaa' }}>Not provided</span>}</div>
      </div>
    )}
  </div>
);

export default MyProfile; 