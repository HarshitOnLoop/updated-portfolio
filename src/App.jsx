import { useState } from "react";
import "./App.css";
import Header from "./Header";


const links = [
  { name: "Home", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "SKILLS", href: "#skills" },
  { name: "PROJECTS", href: "#projects" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "CONTACT", href: "#contact" },
  { name: "BLOG", href: "#blog" },
];


export default function Navbar() {
  const [active, setActive] = useState("Overview");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (name) => {
    setActive(name);
    setMenuOpen(false); // Close mobile menu when a link is selected
  };

  return (
    <>
    <div className={`navbar ${menuOpen ? "open" : ""}`}>
      <div className="navbar-header">
        <a href="#profile" className="brand">
          <img
            src="src/assets/dp.png"
            alt="Harshit"
            className="profile-image"
          />
          <span className="brand-name">HarshitOnLoop</span>
        </a>

        {/* Hamburger Toggle Button for Mobile */}
        <button
          className={`hamburger ${menuOpen ? "is-active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${menuOpen ? "show" : ""}`}>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`nav-link ${
              active === link.name ? "active" : ""
            }`}
            onClick={() => handleLinkClick(link.name)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
          <Header />
</>
  );
}