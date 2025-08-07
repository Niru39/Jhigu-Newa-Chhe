import React from 'react'
import { Link } from 'react-router-dom';
import '../css/About.css';

function About() {
  return (
    <div>
      <section className="abouthero-section">
        <div className="hero-container">
           <div className="hero-content">
           <h1>"Rooted in Tradition, Served with Heart"</h1>
          <p>From the heart of Newa heritage to your plate—welcome to where stories, flavors, and family come together.</p>
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
      <section className="mission-section">
       
        <div className="mission-container">
          <div className="mission-content">
           <h1>Our Mission</h1>
          <p>
            Our mission at Jhigu Newa Chhe is to serve the most authentic and delectable Newari cuisine,
            meticulously prepared with traditional techniques and the freshest local ingredients. We aim to provide every guest with a rich cultural experience that celebrates the heritage and hospitality of the Newar community, making our restaurant truly feel like "Our Newar Home."

          </p>
          </div>
          <img src='/images/2.png' alt='backgorund' />

        </div>
      </section>
      <section className="vision-section">
      
        <div className="vision-container">
          <img src='/images/2.png' alt='backgorund' />
          <div className="vision-content">
          <h1>Our Vision</h1>
          <p>
            We envision Jhigu Newa Chhe becoming a cherished cultural landmark in Kathmandu, renowned for preserving and promoting Newari culinary traditions.
            We aspire to be a vibrant gathering place where locals and visitors alike can connect with the heart of Newari culture through unforgettable food,
            a welcoming atmosphere, and a deep appreciation for our shared heritage.

          </p>
          </div>
        </div>
      </section>
      <section className="value-section">
       
        <div className="value-container">
          <div className="value-content">
            <h1>Our core values</h1>
                   <ul className='value-list'>
            <li>Authenticity</li>
            <li>Respect & Heritage</li>
            <li>Community & Connection</li>
            <li>Excellence in Experience</li>
          </ul>
          </div>
   
            <img src='/images/2.png' alt='backgorund' />

        </div>
      </section>
      <section className="team-section">
        <div className="team-container">

          <h1>Meet our team</h1>
        <div className="team-content">
          <div className="team-item">
            <img src='/images/bg.png' />
            <h2>Nistha Sharma</h2>
            <p>Owner</p>
          </div>
         <div className="team-item">
            <img src='/images/bg.png' />
            <h2>Nistha Sharma</h2>
            <p>Owner</p>
          </div>
          <div className="team-item">
            <img src='/images/bg.png' />
            <h2>Nistha Sharma</h2>
            <p>Owner</p>
          </div>
          <div className="team-item">
            <img src='/images/bg.png' />
            <h2>Nistha Sharma</h2>
            <p>Owner</p>
          </div>
          </div>
        </div>
      </section>

        <section className="aboutgallery-section">
          <div className="aboutgallery-container">
            <div className="aboutgallery-content">
              <h1>Get a glimpse of our newa cuisine and culture.</h1>
              <Link to="/gallery">
            <button>View more</button>
          </Link>
            </div>
           <div className="aboutimage-slider"> 
            <div className="aboutimage-slide">
              <img src="/images/1.png" alt="slide1" />
              <img src="/images/2.png" alt="slide2" />
              <img src="/images/bg.png" alt="slide3" />
            </div>
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

export default About