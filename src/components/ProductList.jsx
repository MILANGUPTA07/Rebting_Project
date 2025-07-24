import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, addToCart }) => (
  <div
    className="product-list"
    style={{
      minHeight: '200px',
      display: 'flex',
      flexDirection: 'row',
      gap: '32px',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexWrap: 'wrap'
    }}
  >
    {products.length === 0 ? (
      <div>No products found</div>
    ) : (
      products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))
    )}
  </div>
);

export default ProductList; 