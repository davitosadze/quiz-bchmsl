import React from "react";
import "../styles/ErrorPage.css";

const ErrorPage = () => {
  const gifUrl = "https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"; // New GIF URL

  return (
    <div className="error-page">
      <h1>404 Not Found</h1>
      <p className="error-message">
        Oops! Looks like you've reached a page that doesn't exist.
      </p>
      <img src={gifUrl} alt="Funny Gif" />
    </div>
  );
};

export default ErrorPage;
