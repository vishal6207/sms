import React from 'react';
import styles from './SingleStudentFee.module.css';

const SingleStudentFee = () => {
  return (
    
        <nav className={styles.navbar}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search by Admission ID  or Name"
        />
        <div className={styles.infoContainer}>
          <div className={styles.infoItem}>
            <span className={styles.infoTitle}>Class:</span>
            <span className={styles.infoValue}>10th</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoTitle}>Roll No:</span>
            <span className={styles.infoValue}>23</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoTitle}>Name:</span>
            <span className={styles.infoValue}>Samar</span>
          </div>
        </div>
      </div>
        </nav>
    
    
  );
};

export default SingleStudentFee;
