import ".././App.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; // Import the necessary FontAwesome icons

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Use useEffect to add a listener for window width changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 600) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav>
      <div className="wrapper">
        <div className="container">
          <div className="navbar-big">
            <a href="/" className="logo">
              <span>Alward Hie</span>
            </a>
            <ul>
              <li>
                <a href="/#about">About</a>
              </li>
              <li>
                <a href="/#services">Services</a>
              </li>
              <li>
                <a href="/#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/#contact">Contact</a>
              </li>
            </ul>
            <div className="burger" onClick={toggleMenu}>
              {showMenu ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
            </div>
          </div>
          <ul id="sidemenu" className={showMenu ? "active" : ""}>
            <li>
              <a href="/#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="/#services" onClick={toggleMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="/#portfolio" onClick={toggleMenu}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="/#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
