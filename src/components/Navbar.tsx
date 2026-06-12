"use client";

import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when window is resized above mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Approach", href: "#approach" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        {/* Brand/Logo */}
        <a href="#" className={styles.brand} aria-label="Air Microservices LLC Home">
          <span>Air Microservices LLC</span>
          <span className={styles.brandDot} />
        </a>

        {/* Mobile Toggle Button */}
        <button
          className={`${styles.mobileMenuToggle} ${isOpen ? styles.mobileMenuOpen : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>

        {/* Navigation Section */}
        <nav className={`${styles.rightSection} ${isOpen ? styles.rightSectionActive : ""}`}>
          <ul className={styles.navLinks}>
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={styles.navLink}
                  onClick={handleLinkClick}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
