import React from "react";

const SearchBar = ({ value, onChange }) => (
  <div style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8 }}>
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{
        padding: '8px 14px',
        borderRadius: 4,
        border: '1px solid #ccc',
        width: 260,
        fontSize: 16
      }}
    />
  </div>
);

export default SearchBar; 