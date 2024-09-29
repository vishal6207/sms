import React from 'react';
import styles from './Feedbacks.module.css';

function Feedbacks() {
  return (
    <div className={`${styles.feedbackCard} card`}>
      <h4 className="text-white">Feedbacks</h4>
      <div className={styles.feedbackItem}>
        <p className="mb-0"><i className="bi bi-chat-left-text"></i> <strong>Hello student</strong></p>
        <small><i className="bi bi-calendar"></i> 19 Jun, 2024</small>
      </div>
      <div className={styles.feedbackItem}>
        <p className="mb-0"><i className="bi bi-chat-left-text"></i> <strong>You are so naughty</strong></p>
        <small><i className="bi bi-calendar"></i> 19 Jun, 2024</small>
      </div>
    </div>
  );
}

export default Feedbacks;
