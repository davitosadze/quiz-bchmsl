import React from "react";
import "../styles/Footer.css";

function Footer() {
  return <footer className="footer">&copy; {new Date().getFullYear()}</footer>;
}

export default Footer;
