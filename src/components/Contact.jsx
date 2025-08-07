import { useState } from 'react'
import '../css/Contact.css'
import MapLeaflet from './MapLeaflet';

function Contact() {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        time: '',
        date: '',
        people: '',
        description: '',

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Booking submitted for ${formData.email}`);

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
    return (
        <div>
            <section className="contact-section">
                <div className="contactmain-content">
                    <h1>“Let’s Stay Connected!”</h1>
                    <p>Whether you’re craving a Newari feast or planning a special event, we’re just a message or call away.</p>
                </div>
            </section>

            <section className="form-section">
                <div className="form-container">

                    <form onSubmit={handleSubmit}>
                        <h2>Contact Us</h2>
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
                            <label htmlFor="text">Address:</label>
                            <input
                                type="text"
                                id="text"
                                name="text"
                                value={formData.text}
                                placeholder="Enter your address"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-button">
                            <button type='submit'> Submit</button>
                            <button type='button' onClick={handleReset}>Reset</button>

                        </div>

                    </form>
                </div>
            </section>
            <section className="location-section">
                <div className="location-conatiner">
                    <MapLeaflet /></div>
            </section>

            <section className="info-section">

                <div className="info-container">

                    <div className="info-item">
                        <img src='/images/clock.png' alt='clock' />
                        <h2>Opening Hours</h2>
                        <p>Mon-Fri: 10am-9pm</p>
                        <p>  Sun-Sat: 10am-10pm</p>

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
    )
}



export default Contact