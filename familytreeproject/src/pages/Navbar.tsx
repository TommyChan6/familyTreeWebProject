import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setIsFixed(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav style={{ position: isFixed ? 'fixed' : 'static', top: 0, width: '100%', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.2)', zIndex: 100 }}>
      <ul style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px', height: '60px', margin: 0 }}>
        <li><a href="#" style={{ color: '#333', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 'bold' }}>Logo</a></li>
        <li><a href="#" style={{ color: '#333', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 'bold' }}>Item 1</a></li>
        <li><a href="#" style={{ color: '#333', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 'bold' }}>Item 2</a></li>
        <li><a href="#" style={{ color: '#333', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 'bold' }}>Item 3</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;