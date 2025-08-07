import React from 'react';
import '../css/GallerySection.css';
import { Link } from 'react-router-dom';

const albums = [
  {
    title: 'Food',
    images: [
      '/images/sukuti.jpg',
      '/images/khaja set.jpg',
      '/images/yomari.jpeg',
      '/images/buff choila.jpeg',
    ],
  },
  {
    title: 'Ambience',
    images: [
      '/images/bg.png',
      '/images/1.png',
      '/images/2.png',
      '/images/logo.png',
    ],
  },
  {
    title: 'Album 3',
    images: [
      '/images/sukuti.jpg',
      '/images/khaja set.jpg',
      '/images/yomari.jpeg',
      '/images/buff choila.jpeg',
    ],
  },
];

const GallerySection = () => {
  return (
    <section className="gallery-section">
  <h1>Gallery</h1>
  <div className="gallery-container">
    {albums.map((album, index) => (
      <Link to="/gallery" key={index} className="album-link">
        <div className="album">
          <h2 className="album-title">{album.title}</h2>
          <div className="gallery-grid">
            <img src={album.images[0]} alt="Big" className="gallery-item big" />
            <img src={album.images[1]} alt="Small 1" className="gallery-item small" />
            <img src={album.images[2]} alt="Small 2" className="gallery-item small" />
            <img src={album.images[3]} alt="Small 3" className="gallery-item small" />
          </div>
        </div>
      </Link>
    ))}
  </div>
</section>

  );
};

export default GallerySection;
