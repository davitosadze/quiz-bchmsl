import React from "react";
import "../styles/ErrorPage.css";

function ErrorPage() {
  return (
    <div className="error-page">
      <h1>404 Not Found</h1>
      <p>Oops! Looks like you've reached a page that doesn't exist.</p>
      <img
        src="https://media.giphy.com/media/YyKPbc5OOTSQE/giphy.gif"
        alt="Funny Gif"
      />
    </div>
  );
}

export default ErrorPage;
