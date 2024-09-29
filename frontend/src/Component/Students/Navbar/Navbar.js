import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import styles from './Navbar.module.css'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <span className={styles.erp}>ERP</span>
          <button className={styles.toggleButton} onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className={`${styles.navItems} ${isMenuOpen ? styles.open : ''}`}>
          <button className={styles.closeButton} onClick={toggleMenu}>
            <i className="fas fa-times"></i>
          </button>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink} onClick={toggleMenu}>
              <i className={`fas fa-home ${styles.icon}`}></i> Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/timetable" className={styles.navLink} onClick={toggleMenu}>
              <i className={`fas fa-calendar-alt ${styles.icon}`}></i> Time Table
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/examination" className={styles.navLink} onClick={toggleMenu}>
              <i className={`fas fa-th-large ${styles.icon}`}></i> Examination
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/workspace" className={styles.navLink} onClick={toggleMenu}>
              <i className={`fas fa-file-alt ${styles.icon}`}></i> Workspace
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/bus-route" className={styles.navLink} onClick={toggleMenu}>
              <i className={`fas fa-bus ${styles.icon}`}></i> Bus Route
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/fee-panel" className={styles.navLink} onClick={toggleMenu}>
              <i className={`fas fa-credit-card ${styles.icon}`}></i> Fee Panel
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/change-password" className={styles.navLink} onClick={toggleMenu}>
              <i className={`fas fa-key ${styles.icon}`}></i> Change Password
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/logout" className={styles.navLink} onClick={toggleMenu}>
              <i className={`fas fa-sign-out-alt ${styles.icon}`}></i> Logout
            </Link>
          </li>
        </ul>
      </nav>
      <div className={`${styles.mainContent} ${isMenuOpen ? styles.blurBackground : ''}`}>
        
      </div>
    </div>
  );
};

export default Navbar;
