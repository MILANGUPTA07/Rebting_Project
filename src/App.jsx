import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import products from "./data/products";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Checkout from "./components/Checkout";
import CategoriesSidebar from "./components/CategoriesSidebar";
import SortDropdown from "./components/SortDropdown";
import SearchBar from "./components/SearchBar";
import MyOrders from "./components/MyOrders";
import MyProfile from "./components/MyProfile";

function AppContent() {
  const [cart, setCart] = useState([]);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orders, setOrders] = useState([]); // New state for orders
  const [showOrders, setShowOrders] = useState(false); // For toggling orders modal
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("price-asc");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/checkout" && orderConfirmed) {
      setOrderConfirmed(false);
    }
    setShowOrders(false);
  }, [location.pathname]);

  const addToCart = (product, days) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, days: item.days + days }
            : item
        );
      } else {
        return [...prev, { product, days }];
      }
    });
  };

  const updateCartItem = (productId, days) => {
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, days } : item
      )
    );
  };

  const removeCartItem = (productId) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const goToCheckout = () => {
    navigate("/checkout");
  };

  const handleConfirmOrder = (user) => {
    setOrderConfirmed(true);
    setOrders((prev) => [
      ...prev,
      {
        id: Date.now(),
        user,
        items: cart,
        date: new Date().toLocaleString(),
      },
    ]);
    setCart([]);
  };

  const onShowOrders = (value) => {
    if (typeof value === 'boolean') {
      setShowOrders(value);
    } else {
      setShowOrders((v) => !v);
    }
  };

  // Filter products by selected category
  const filteredByCategory = selectedCategory === "All"
    ? products
    : products.filter((p) => p.category === selectedCategory);

  // Further filter by search query
  const filteredProducts = filteredByCategory.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
  );

  // Sort products based on sortOption
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-asc":
        return a.pricePerDay - b.pricePerDay;
      case "price-desc":
        return b.pricePerDay - a.pricePerDay;
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  // Get the last user who placed an order
  const lastUser = orders.length > 0 ? orders[orders.length - 1].user : null;

  return (
    <>
      <Navbar cartCount={cart.length} />
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        {(location.pathname === "/" || location.pathname === "/cart") && (
          <CategoriesSidebar
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        )}
        <div style={{ flex: 1, padding: 24 }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SearchBar value={search} onChange={setSearch} />
                  <SortDropdown value={sortOption} onChange={setSortOption} />
                  <ProductList products={sortedProducts} addToCart={addToCart} />
                </>
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  updateCartItem={updateCartItem}
                  removeCartItem={removeCartItem}
                  goToCheckout={goToCheckout}
                />
              }
            />
            <Route
              path="/checkout"
              element={
                orderConfirmed ? (
                  <div style={{ padding: 32 }}>
                    <h2>Order Confirmed!</h2>
                    <p>Thank you for your order. We will contact you soon.</p>
                  </div>
                ) : (
                  <Checkout cart={cart} onConfirm={handleConfirmOrder} />
                )
              }
            />
            <Route
              path="/orders"
              element={<MyOrders orders={orders} />}
            />
            <Route
              path="/profile"
              element={<MyProfile user={lastUser} />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
