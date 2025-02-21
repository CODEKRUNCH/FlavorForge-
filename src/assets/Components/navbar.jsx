import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import "./navbar.css";

function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Scrolling down, hide navbar
      } else {
        setIsVisible(true); // Scrolling up, show navbar
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`navbar ${isVisible ? "" : "hidden"}`}>
      <div className="logo">JauMango</div>
      <div className="Menubar">
        <Link to="/" className="menutbtn">Home</Link>
        <Link to="/recipes" className="menutbtn">Recipes</Link>
        <Link to="/quickmeal" className="menutbtn">Quick Meal</Link>
        <Link to="/contact" className="menutbtn">Contact</Link>
        <Link to="/about" className="menutbtn">About Us</Link>
      </div>
      <div className="socialicons">
        <button className="socialbtn">
          <img src="/Public/fblogo.png" alt="Facebook" />
        </button>
        <button className="socialbtn">
          <img src="/Public/003-twitter.png" alt="Twitter" />
        </button>
        <button className="socialbtn">
          <img src="/Public/004-instagram.png" alt="Instagram" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
