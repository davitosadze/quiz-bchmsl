import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"; // Import the CSS file

function Home() {
  return (
    <div className="home-container">
      <h1>Davit Osadze</h1>
      <div className="hero-image-container">
        <img
          src="https://via.placeholder.com/800x400"
          alt="Hero"
          className="hero-image"
        />
        <Link to="/gallery" className="gallery-link">
          Go To Gallery
        </Link>
      </div>
    </div>
  );
}

export default Home;
