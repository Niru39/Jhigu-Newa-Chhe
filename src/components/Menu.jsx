import React from 'react'
import { Link } from 'react-router-dom'
import MenuSlider from './MenuSlider'
import '../css/Menu.css'
function Menu() {
  return (
    <div>
      <section className="menuhero-section">
        <div className="hero-container">
        <div className="hero-content">
            <h1>"Explore the Flavors of Newa Cuisine"</h1>
          <p>From spicy Buff Choila to sweet Yomari — our menu is a celebration of tradition, taste, and home-cooked goodness.</p>

          <Link to="/booknow">
            <button>Book a table</button>
          </Link>
        </div>
        </div>
      </section>

      <section>
        <div className="menu-section">
          <div className="menu-container">
            <div className="menu-content">
              <h1>Starter</h1>
              <p>Savor a delicious mix of Newari snacks, including spicy Buff Choila, smoky Sukuti, tender Syaphu Micha, flavorful Kachila, crispy Bara (plain, egg, and keema varieties), and tangy salads like Bhatmas Sandheko and Aalu Sandheko. A perfect blend of bold, traditional flavors to start your meal.</p>
            </div>
            <div className="menu-slider">
              <MenuSlider />
            </div>
            <div className="menulist-container">
              <div className="menuitem-container">
                <div className="menuitem-content">
                  <h2>Plain Bara</h2>
                  <p>Rs 60</p>
                </div>
                <p>Soft and savory lentil pancakes, pan-fried to a golden crisp. Simple, classic, and perfect with chutney.</p>
              </div>
              <div className="menuitem-container">
                <div className="menuitem-content">
                  <h2>Egg Bara</h2>
                  <p>Rs 80</p>
                </div>
                <p>Soft and savory lentil pancakes, pan-fried to a golden crisp. Simple, classic, and perfect with chutney.</p>
              </div>


            </div>
             <div className="menulist-container">
              <div className="menuitem-container">
                <div className="menuitem-content">
                  <h2>Plain Bara</h2>
                  <p>Rs 60</p>
                </div>
                <p>Soft and savory lentil pancakes, pan-fried to a golden crisp. Simple, classic, and perfect with chutney.</p>
              </div>
              <div className="menuitem-container">
                <div className="menuitem-content">
                  <h2>Egg Bara</h2>
                  <p>Rs 80</p>
                </div>
                <p>Soft and savory lentil pancakes, pan-fried to a golden crisp. Simple, classic, and perfect with chutney.</p>
              </div>


            </div>
          </div>

           <div className="menu-container">
            <div className="menu-content">
              <h1>Starter</h1>
              <p>Savor a delicious mix of Newari snacks, including spicy Buff Choila, smoky Sukuti, tender Syaphu Micha, flavorful Kachila, crispy Bara (plain, egg, and keema varieties), and tangy salads like Bhatmas Sandheko and Aalu Sandheko. A perfect blend of bold, traditional flavors to start your meal.</p>
            </div>
            <div className="menu-slider">
              <MenuSlider />
            </div>
            <div className="menulist-container">
              <div className="menuitem-container">
                <div className="menuitem-content">
                  <h2>Plain Bara</h2>
                  <p>Rs 60</p>
                </div>
                <p>Soft and savory lentil pancakes, pan-fried to a golden crisp. Simple, classic, and perfect with chutney.</p>
              </div>
              <div className="menuitem-container">
                <div className="menuitem-content">
                  <h2>Egg Bara</h2>
                  <p>Rs 80</p>
                </div>
                <p>Soft and savory lentil pancakes, pan-fried to a golden crisp. Simple, classic, and perfect with chutney.</p>
              </div>


            </div>
             <div className="menulist-container">
              <div className="menuitem-container">
                <div className="menuitem-content">
                  <h2>Plain Bara</h2>
                  <p>Rs 60</p>
                </div>
                <p>Soft and savory lentil pancakes, pan-fried to a golden crisp. Simple, classic, and perfect with chutney.</p>
              </div>
              <div className="menuitem-container">
                <div className="menuitem-content">
                  <h2>Egg Bara</h2>
                  <p>Rs 80</p>
                </div>
                <p>Soft and savory lentil pancakes, pan-fried to a golden crisp. Simple, classic, and perfect with chutney.</p>
              </div>


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

export default Menu
