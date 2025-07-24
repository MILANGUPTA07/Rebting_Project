import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount, orders = [], showOrders = false, onShowOrders = () => {} }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileRef = useRef(null);
  const ordersRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
      if (ordersRef.current && !ordersRef.current.contains(event.target)) {
        onShowOrders(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onShowOrders]);

  return (
    <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: 16, borderBottom: "1px solid #ccc" }}>
      <span style={{ fontFamily: 'cursive, fantasy', fontWeight: 700, fontSize: 32, color: '#ff3e6c', letterSpacing: 2 }}>
        KK Rento
      </span>
      <div style={{ display: "flex", gap: 20, alignItems: 'center' }}>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart{cartCount > 0 ? ` (${cartCount})` : ""}</Link>
        <Link to="/orders">My Orders</Link>
        <Link to="/profile">My Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar; 