// OffersDropdown.jsx
import React, { useState } from 'react';
import styles from './OffersDropdown.css';
import './OffersDropdown.css' 

const OffersDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdownHeader} onClick={toggleDropdown}>
        <span className={`${styles.chevron} ${isOpen ? styles.rotated : ''}`}>&#9660;</span>
        <span className={styles.dropdownTitle}>All offers</span>
      </div>
      <div className={`${styles.dropdownContent} ${isOpen ? styles.show : ''}`}>
        <ul className={styles.dropdownList}>
          <li>UI/UX designer</li>
          <li>web dev</li>
          <li className={styles.separator}></li>
          <li>security</li>
          <li>Frontend</li>
          <li>All</li>
        </ul>
      </div>
    </div>
  );
};

   export default OffersDropdown ;