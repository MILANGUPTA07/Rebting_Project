import React from "react";

const options = [
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A-Z" },
  { value: "name-desc", label: "Name: Z-A" },
];

const SortDropdown = ({ value, onChange }) => (
  <div style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8 }}>
    <label htmlFor="sort-products" style={{ fontWeight: 600 }}>Sort by:</label>
    <select
      id="sort-products"
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{ padding: '6px 12px', borderRadius: 4, border: '1px solid #ccc' }}
    >
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  </div>
);

export default SortDropdown; 