import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../css/Home.css';
import MenuTabs from './MenuTabs';
import GallerySection from './GallerSection';
import Footer from './Footer';

function Home() {

  const testimonials = [
    {
      name: "Sita Maharjan",
      text: "The food was absolutely delicious! I felt like I was back in my Newa home.",
      image: "/images/sita.jpeg"
    },
    {
      name: "Ram Shrestha",
      text: "Loved the ambience and authentic Newari flavors. Highly recommended!",
      image: "/images/ram.jpeg"
    },
    {
      name: "Anita Tuladhar",
      text: "The best Newari restaurant experience I've had so far. Great service too!",
      image: "/images/anita.jpeg"
    },
  ];

  const [index, setIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1>"Welcome to Jhigu Newa Chhe"</h1>
            <p>Discover the soul of Newar cuisine served with heritage, heart, and homely warmth.</p>
            <Link to="/menu">
              <button>Explore Our Menu</button>
            </Link>
          </div>


        </div>
      </section>
      <section className="about-section">
        <div className="about-container">

          <img src='/images/2.png' alt='backgorund' />


          <div className="about-content">
            <h1>Our Story & Philosophy</h1>
            <p>The story of Jhigu Newa Chhe is deeply personal. Founded by a passionate Newar woman who grew up surrounded by the rich aromas
              and traditions of her community, the restaurant is a heartfelt tribute to her roots. Inspired by the flavors from her
              grandmother’s kitchen and the festivals that brought people together around food, she dreamed of a space where Newari
              culture could be honored and shared with the world.</p>
            <p>What started as a family passion has grown into a cultural and culinary haven in the heart of Kathmandu.
              Every recipe tells a story—of heritage, of love, and of home. Our philosophy is grounded in authenticity,
              respect for tradition, and the joy of sharing food. Using only the freshest local ingredients and traditional cooking techniques,
              we aim to bring the soul of Newari cuisine to every plate.</p>
            <p> Whether it’s the festive Samay Baji, the comforting Yomari, or the savory Choila, each dish at Jhigu Newa Chhe
              is a celebration of a legacy lovingly passed down through generations of women.</p>
          </div>

        </div>
      </section>
      <section className="menu-section">
        <MenuTabs />

      </section>
      <section className="whyus-section">
        <h1>Why Jhigu Newa Chhe?</h1>
        <div className="whyus-container">

          <div className="whyus-item">
            <img src='/images/recipe.png' alt='recipe' />
            <h2>Authentic Newari Recipes</h2>
            <p>Traditional flavors passed down through generations, bringing true Newar taste.</p>
          </div>
          <div className="whyus-item">
            <img src='/images/home.png' alt='ambience' />
            <h2>Cozy Cultural Ambience</h2>
            <p>Inspired by Kathmandu’s warm and inviting homes for a comfortable dining experience.</p>
          </div>
          <div className="whyus-item">
            <img src='/images/fresh.png' alt='ingredients' />
            <h2>Locally Sourced Ingredients</h2>
            <p>Fresh, seasonal produce from trusted local farmers</p>
          </div>
          <div className="whyus-item">
            <img src='/images/heart.png' alt='hospitality' />
            <h2> Heartwarming Hospitality</h2>
            <p>Friendly, attentive service that makes you feel like family.</p>
          </div>

        </div>
      </section>
      <section className="gallery-section">
        <GallerySection />
      </section>
      <section className="testimonial-section">
        <h1>What our customers say?</h1>
        <div className="testimonial-slider">
          <div className="testimonial-card">
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="testimonial-image"
            />
            <p className="testimonial-text">“{testimonials[index].text}”</p>
            <p className="testimonial-name">— {testimonials[index].name}</p>
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === index ? 'active' : ''}`}
                onClick={() => setIndex(i)}
              ></span>
            ))}
          </div>
        </div>

      </section>
      <section className="booking-section">
        <div className="booking-container">
          <div className="booking-content">
            <h1>Step into a true Newari dining experience.</h1>
            <p>Reserve your table at Jhigu Newa Chhe and enjoy authentic Newari cuisine in a warm, welcoming atmosphere that feels like home. </p>
            <Link to="/booknow">
              <button>Book A Table</button>
            </Link>
          </div>

          <img src='/images/2.png' alt='backgorund' />
        </div>
      </section>

    </div>
  )
}

export default Home