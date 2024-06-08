import React from "react";
import { useParams } from "react-router-dom";
import "../styles/Profile.css";

function Profile() {
  const { name } = useParams();

  return (
    <div className="profile-container">
      <h1>Made By {name ? name : "Davit Osadze"}</h1>
    </div>
  );
}

export default Profile;
