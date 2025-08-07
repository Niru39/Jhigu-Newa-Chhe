import React from 'react'
import '../css/Gallery.css'
import ImageSlider from './ImageSlider'
import { Link } from 'react-router-dom'

function Gallery() {
  return (
    <div>
        <section className='gallerymain-section'>
            <div className="gallerymain-container">
                <h1>Experience Jhigu Newa Chhe Through Images</h1>
                <p>A visual taste of our Newari culture, cuisine, and cozy ambience.</p>
            </div>
        </section>

        <section className="foodgallery">
            <div className="albumgallery-container">
            <h2>Food Highlights</h2>
            <p>"Authentic Newari dishes, crafted with love."</p>
            <div className="image-container">
            <img src="/images/aachar.jpg" alt="aachar" className='gallery-big' />
            <img src="/images/aalu tama.jpeg" alt="alu tama"className='gallery-small' />
            <img src="/images/bara.jpeg" alt=" bara" className='gallery-small'/>
            <img src="/images/bodi.jpeg" alt="bodi"className='gallery-small' />
            <img src="/images/chatmari.jpg" alt="chatamari"className='gallery-small' />
            <img src="/images/buff choila.jpeg" alt=" buff choila"className='gallery-big' />
            <img src="/images/dyakula.jpeg" alt="dyakula"className='gallery-small' />
            <img src="/images/sukuti.jpg" alt="sukuti"className='gallery-medium' />
            <img src="/images/yomari.jpeg" alt="yomari"className='gallery-big' />
            <img src="/images/khaja set.jpg" alt="khaja set" className='gallery-medium'/>
            </div>
        </div>
        </section>

        <section className="ambiencegallery">
              <div className="albumgallery-container">
            <h2>Ambience & Interior</h2>
            <p>"Step inside a traditional Newa home."</p>
                 <div className="image-container">
            <img src="/images/aachar.jpg" alt="aachar" className='gallery-medium' />
            <img src="/images/aalu tama.jpeg" alt="alu tama"className='gallery-medium' />
            <img src="/images/bara.jpeg" alt=" bara" className='gallery-medium'/>
            <img src="/images/bodi.jpeg" alt="bodi"className='gallery-medium' />
            <img src="/images/chatmari.jpg" alt="chatamari"className='gallery-medium' />
            <img src="/images/buff choila.jpeg" alt=" buff choila"className='gallery-medium' />
            <img src="/images/dyakula.jpeg" alt="dyakula"className='gallery-medium' />
            <img src="/images/sukuti.jpg" alt="sukuti"className='gallery-medium' />
            <img src="/images/yomari.jpeg" alt="yomari"className='gallery-medium' />
            <img src="/images/khaja set.jpg" alt="khaja set" className='gallery-medium'/>
            </div>

            </div>

        </section>

          <section className="ambiencegallery">
              <div className="albumgallery-container">
            <h2>Ambience & Interior</h2>
            <p>"Step inside a traditional Newa home."</p>
                 <div className="image-slider">
            <ImageSlider/>
            </div>

            </div>

        </section>

        
        <section className="ambiencegallery">
              <div className="albumgallery-container">
            <h2>Ambience & Interior</h2>
            <p>"Step inside a traditional Newa home."</p>
                 <div className="image-container">
            <img src="/images/aachar.jpg" alt="aachar" className='gallery-medium' />
            <img src="/images/aalu tama.jpeg" alt="alu tama"className='gallery-small' />
            <img src="/images/yomari.jpeg" alt=" yomari" className='gallery-small'/>
            <img src="/images/bodi.jpeg" alt="bodi"className='gallery-small' />
            <img src="/images/chatmari.jpg" alt="chatamari"className='gallery-small' />
            <img src="/images/buff choila.jpeg" alt=" buff choila"className='gallery-small' />
            <img src="/images/sukuti.jpg" alt="sukuti"className='gallery-medium' />
            <img src="/images/dyakula.jpeg" alt="dyakula"className='gallery-small' />
            <img src="/images/bara.jpeg" alt="bara"className='gallery-medium' />
            <img src="/images/khaja set.jpg" alt="khaja set" className='gallery-small'/>
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

export default Gallery