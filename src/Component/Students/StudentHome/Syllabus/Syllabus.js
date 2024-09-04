import React from 'react';
import styles from './Syllabus.module.css';

function Syllabus() {
  return (
    <div className={`${styles.syllabusCard} card`}>
      <h4 className="text-dark">Syllabus</h4>
      <div className={styles.syllabusItem}>
        <span><i className="bi bi-book"></i> Hindi</span>
        <a href="#download" className={styles.syllabusLink}><i className="bi bi-download"></i> Download or View</a>
      </div>
      <div className={styles.syllabusItem}>
        <span><i className="bi bi-book"></i> English</span>
        <a href="#download" className={styles.syllabusLink}><i className="bi bi-download"></i> Download or View</a>
      </div>
    </div>
  );
}

export default Syllabus;
