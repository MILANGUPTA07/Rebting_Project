import React, { useState } from "react";

const categories = ["All", "Beds", "Chairs", "Outdoor", "Sofas", "Tables"];

const CategoriesSidebar = ({ selectedCategory, onSelectCategory }) => {
  const [open, setOpen] = useState(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 700;

  // Listen for window resize to auto-close dropdown if resizing to desktop
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) setOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return (
      <aside style={{ width: '100%', padding: 0, borderRight: 'none', marginBottom: 16 }}>
        <button
          style={{
            width: '100%',
            padding: '12px 0',
            fontWeight: 700,
            fontSize: 18,
            background: '#ff3e6c',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            marginBottom: 8,
            cursor: 'pointer',
          }}
          onClick={() => setOpen((v) => !v)}
        >
          Categories {open ? '▲' : '▼'}
        </button>
        {open && (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, background: '#fff', borderRadius: 6, boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
            {categories.map((cat) => (
              <li key={cat} style={{ marginBottom: 8 }}>
                <button
                  style={{
                    background: selectedCategory === cat ? "#ff3e6c" : "#fff",
                    color: selectedCategory === cat ? "#fff" : "#333",
                    border: "1px solid #ff3e6c",
                    borderRadius: 6,
                    padding: "8px 18px",
                    fontWeight: 600,
                    cursor: "pointer",
                    width: "100%",
                    textAlign: "left",
                    transition: "background 0.2s, color 0.2s"
                  }}
                  onClick={() => { onSelectCategory(cat); setOpen(false); }}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        )}
      </aside>
    );
  }

  // Desktop sidebar
  return (
    <aside style={{ width: 180, padding: 24, borderRight: "1px solid #eee", minHeight: "80vh" }}>
      <h3 style={{ marginBottom: 24, fontWeight: 700, fontSize: 20 }}>Categories</h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {categories.map((cat) => (
          <li key={cat} style={{ marginBottom: 16 }}>
            <button
              style={{
                background: selectedCategory === cat ? "#ff3e6c" : "#fff",
                color: selectedCategory === cat ? "#fff" : "#333",
                border: "1px solid #ff3e6c",
                borderRadius: 6,
                padding: "8px 18px",
                fontWeight: 600,
                cursor: "pointer",
                width: "100%",
                textAlign: "left",
                transition: "background 0.2s, color 0.2s"
              }}
              onClick={() => onSelectCategory(cat)}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CategoriesSidebar; 