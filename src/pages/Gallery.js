import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Gallery.css";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos?_limit=4"
        );
        setPhotos(response.data);
      } catch (error) {
        console.error("Error fetching the photos:", error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <div className="photos-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-item">
            <img src={photo.url} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
