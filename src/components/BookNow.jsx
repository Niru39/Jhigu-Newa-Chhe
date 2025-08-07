import React, { useState, useRef, useEffect } from 'react';
import '../css/BookNow.css';

function BookNow() {
    //  Featured dishes data 
    const featuredDishes = [
        {
            name: 'Yomari',
            image: '/images/yomari.jpeg',
            description: 'Sweet steamed dumplings with molasses filling.',
        },
        {
            name: 'Samay Baji',
            image: '/images/khaja set.jpg',
            description: 'Festive set with beaten rice, egg, choila and more.',
        },
        {
            name: 'Plain Bara',
            image: '/images/bara.jpeg',
            description: 'Soft and savory lentil pancakes, pan-fried to a golden crisp.',
        },
        {
            name: 'Egg Bara',
            image: '/images/egg bara.jpg',
            description: 'Lentil pancakes with egg — crispy and delicious.',
        },
        {
            name: 'Buff Choila',
            image: '/images/buff choila.jpeg',
            description: 'Spicy grilled buffalo meat, a Newari specialty.',
        },
        {
            name: 'Dyakula',
            image: '/images/dyakula.jpeg',
            description: 'Spicy grilled buffalo meat, a Newari specialty.',
        },
        {
            name: 'Syaphu Michha',
            image: '/images/sapu michha.jpeg',
            description: 'Crunchy beaten rice snack, served with beans and spices.'

            ,
        },
    ];

    //  Booking form state 
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        time: '',
        date: '',
        people: '',
        description: '',
    });

    //  Order form state 
    const [orderData, setOrderData] = useState({
        name: '',
        phone: '',
        address: '',
        dish: '',
        quantity: 1,
    });

    const [showOrderForm, setShowOrderForm] = useState(false);
    const orderRef = useRef(null);

    //  Dish slider state 
    const [currentPage, setCurrentPage] = useState(1);
    const dishesPerPage = 2;

    const indexOfLast = currentPage * dishesPerPage;
    const indexOfFirst = indexOfLast - dishesPerPage;
    const currentDishes = featuredDishes.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(featuredDishes.length / dishesPerPage);

    //  Event Handlers 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleReset = () => {
        setFormData({
            fullname: '',
            email: '',
            phone: '',
            time: '',
            date: '',
            people: '',
            description: '',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Booking submitted for ${formData.email}`);
    };

    const handleOrderChange = (e) => {
        const { name, value } = e.target;
        setOrderData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleOrderSubmit = (e) => {
        e.preventDefault();
        alert(`Order submitted for ${orderData.quantity} x ${orderData.dish}`);
        setOrderData({
            name: '',
            phone: '',
            address: '',
            dish: '',
            quantity: 1,
        });
        setShowOrderForm(false);
    };

    useEffect(() => {
        if (orderRef.current) {
            orderRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [currentPage]);

    //  JSX Output 
    return (
        <div>
            {/* Booking Hero Section */}
            <section className="booking-section">
                <div className="bookmain-content">
                    <h1>“Reserve Your Spot at Our Newari Home”</h1>
                    <p>Whether you're planning a cozy dinner or a family gathering, we’re here to make it memorable. Book now and enjoy authentic Newari flavors.</p>
                </div>
            </section>

            {/* Booking Form */}
            <section className="form-section">
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <h2>Book now</h2>

                        <div className="form-group">
                            <label htmlFor="fullname">Full Name:</label>
                            <input
                                type="text"
                                id="fullname"
                                name="fullname"
                                value={formData.fullname}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number:</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="time">Preferred Time:</label>
                            <input
                                type="time"
                                id="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="date">Preferred Date:</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="people">Number of Guests:</label>
                            <input
                                type="number"
                                id="people"
                                name="people"
                                value={formData.people}
                                onChange={handleChange}
                                placeholder="0"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Special Requests:</label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows={3}
                                placeholder="Enter your request"
                            />
                        </div>

                        <div className="form-button">
                            <button type="submit">Submit</button>
                            <button type="button" onClick={handleReset}>Reset</button>
                        </div>
                    </form>
                </div>

            </section>

            {/* Order Now Section */}
            <section className="order-now-section" ref={orderRef}>
                <div className="order-now-container">
                    <h2>Order Your Favorite Newari Dishes</h2>
                    <p>Enjoy authentic flavors from the comfort of your home. Place your order online now.</p>

                    {/* Dish Slider */}
                    <div className="dish-slider-container">
                        <div className="featured-dishes">
                            {currentDishes.map((dish, index) => (
                                <div className="dish-card" key={index}>
                                    <img src={dish.image} alt={dish.name} />
                                    <h4>{dish.name}</h4>
                                    <p>{dish.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="dot-pagination">
                        {[...Array(totalPages)].map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${currentPage === index + 1 ? 'active' : ''}`}
                                onClick={() => setCurrentPage(index + 1)}
                            ></span>
                        ))}
                    </div>

                    {/* Order Form Toggle */}
                    <button className="order-now-button" onClick={() => setShowOrderForm(!showOrderForm)}>
                        {showOrderForm ? 'Close Form' : 'Order Now'}
                    </button>

                    {/* Order Form */}
                    {showOrderForm && (
                        <form className="order-form" onSubmit={handleOrderSubmit}>
                            <h3>Place Your Order</h3>
                            <input type="text" name="name" placeholder="Full Name" value={orderData.name} onChange={handleOrderChange} required />
                            <input type="text" name="phone" placeholder="Phone Number" value={orderData.phone} onChange={handleOrderChange} required />
                            <input type="text" name="address" placeholder="Delivery Address" value={orderData.address} onChange={handleOrderChange} required />

                            <select name="dish" value={orderData.dish} onChange={handleOrderChange} required>
                                <option value="">Select Dish</option>
                                {featuredDishes.map((dish, index) => (
                                    <option key={index} value={dish.name}>{dish.name}</option>
                                ))}
                            </select>

                            <input type="number" name="quantity" placeholder="Quantity" value={orderData.quantity} onChange={handleOrderChange} min="1" required />

                            <button type="submit">Submit Order</button>
                        </form>
                    )}
                </div>
            </section>

            {/* Info Section */}
            <section className="info-section">
                <div className="info-container">
                    <div className="info-item">
                        <img src='/images/clock.png' alt='clock' />
                        <h2>Opening Hours</h2>
                        <p>Mon–Fri: 10am–9pm</p>
                        <p>Sat–Sun: 10am–10pm</p>
                    </div>
                    <div className="info-item">
                        <img src='/images/booking.png' alt='booking' />
                        <h2>Booking Hours</h2>
                        <p>Lunch: 11:30 AM – 2:30 PM</p>
                        <p>Dinner: 6:00 PM – 9:00 PM</p>
                    </div>
                    <div className="info-item">
                        <img src='/images/call.png' alt='phone' />
                        <h2>Contact Us</h2>
                        <p>Phone: 9845678909</p>
                        <p>Email: jhigunewachhe@info.com</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default BookNow;
