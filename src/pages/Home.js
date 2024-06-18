import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"; // Import the CSS file

const Home = () => {
  const heroImageUrl =
    "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/da4b9237bacccdf19c0760cab7aec4a8359010b0/photos/min-crop.u_ICVXNWm.jpg?t=161652568550"; // New image URL

  return (
    <div className="home-container">
      <h1>Bachana Mosulishvili</h1>
      <div className="hero-image-container">
        <Link to="/gallery" className="gallery-link">
          Go To Gallery
        </Link>
        <img src={heroImageUrl} alt="Hero" className="hero-image" />
      </div>
    </div>
  );
};

export default Home;
