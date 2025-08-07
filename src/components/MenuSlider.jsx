import React, { useState, useEffect } from 'react';
import '../css/MenuSlider.css';
import { Link } from 'react-router-dom';

const menuItems = [
    {
        name: "Samay Baji",
        description: "A festive Newari platter with beaten rice, choila, egg, and more.",
        image: "/images/khaja set.jpg",
    },
    {
        name: "Yomari",
        description: "A sweet steamed dumpling filled with jaggery and sesame.",
        image: "/images/yomari.jpeg",
    },
    {
        name: "Buff Choila",
        description: "Spicy grilled buffalo meat, a Newari specialty.",
        image: "/images/buff choila.jpeg",
    },
];

function MenuSlider() {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % menuItems.length);
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="menu-slider">
            <div className="arrow left" onClick={handlePrev}>&#10094;</div>

            <div
                className="menu-slider-track"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {menuItems.map((item, i) => (
                    <div className="menu-card" key={i}>
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <Link to="/booknow" state={{ openOrderForm: true }}>
                            <button className="order-now-button">Order Now</button>
                        </Link>

                    </div>
                ))}
            </div>

            <div className="arrow right" onClick={handleNext}>&#10095;</div>

            <div className="menu-slider-dots">
                {menuItems.map((_, i) => (
                    <span
                        key={i}
                        className={`dot ${i === index ? 'active' : ''}`}
                        onClick={() => setIndex(i)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default MenuSlider;
