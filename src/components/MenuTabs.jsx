import React, { useState } from 'react';
import '../css/MenuTabs.css';
import { Link } from 'react-router-dom';

const menuData = {
  snacks: [
    {
      name: 'Buff Choila',
      image: '/images/buff choila.jpeg',
      description: 'Spicy grilled buffalo meat marinated with Himalayan spices.',
    },
    {
      name: 'Syaphu',
      image: '/images/sapu michha.jpeg',
      description: 'Crunchy beaten rice snack, served with beans and spices.',
    },
    {
      name: 'Plain Bara',
      image: '/images/bara.jpeg',
      description: 'Traditional lentil pancake, lightly pan-fried.',
    },
  ],
  mains: [
    {
      name: 'Veg Khana Set',
      image: '/images/veg khana.jpeg',
      description: 'Traditional Newari thali with rice, lentils, and seasonal veggies.',
    },
    {
      name: 'Mutton Curry',
      image: '/images/dyakula.jpeg',
      description: 'Slow-cooked tender mutton in a rich Newari curry.',
    },
  ],
  desserts: [
    {
      name: 'Yomari',
      image: '/images/yomari.jpeg',
      description: 'Sweet steamed dumpling filled with molasses and sesame.',
    },

  ],
};

const MenuTabs = () => {
  const [activeTab, setActiveTab] = useState('snacks');

  return (
    <section className="menu-section">
      <h1>Our Menu</h1>
      <div className="menu-layout">
        <nav className="tab-column">
          {Object.keys(menuData).map((tab) => (

            <button
              key={tab}
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>

          ))}
        </nav>

        <div className="menu-content">
          <div className="menu-grid">
            {menuData[activeTab].map((item, index) => (
              <div className="menu-card" key={index}>
                <img src={item.image} alt={item.name} className="menu-img" />
                <h3>{item.name}</h3>
                <p className="menu-desc">{item.description}</p>
                <Link to="/booknow" state={{ openOrderForm: true }}>
                  <button className="order-now-button">Order Now</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

  );
};

export default MenuTabs;
