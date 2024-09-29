import React from 'react';
import styles from './NoticeBoard.module.css';

function NoticeBoard() {
  return (
    <div className={styles.NoticeContainer}>
      <div className=" p-3 mb-4">
        <h4 className="text-dark">Notice</h4>
        <div className={styles.noticeCard}>
          <h5 className="mb-1"><i className="bi bi-megaphone-fill"></i> </h5>
          <p className="mb-0">In Mid September</p>
          <small><i className="bi bi-clock"></i> 2024-08-29 22:30:39</small>
        </div>
        <div className={styles.noticeCard}>
          <h5 className="mb-1"><i className="bi bi-megaphone-fill"></i> Fresher Party</h5>
          <p className="mb-0">Will Be In September</p>
          <small><i className="bi bi-clock"></i> 2024-08-28 10:06:04</small>
        </div>
        <div className={styles.noticeCard}>
          <h5 className="mb-1"><i className="bi bi-megaphone-fill"></i> Notes Uploaded</h5>
          <p className="mb-0">You Can Dowload</p>
          <a href="#view" className={styles.noticeLink}><i className="bi bi-eye"></i> View Notes</a>
          <small><i className="bi bi-clock"></i> 2024-08-26 00:29:34</small>
        </div>
      </div>

    </div>

  );
}

export default NoticeBoard;
