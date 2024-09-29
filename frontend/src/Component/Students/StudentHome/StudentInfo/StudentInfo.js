import React from 'react';
import styles from './StudentInfo.module.css';
import logo from "../student.png";

function StudentInfo() {
  return (
    <div className={`${styles.studentCard} `}>
      <div className="d-flex align-items-center mb-3">
        <img src={logo} alt="Profile" className={`${styles.profileImage} rounded-circle`} width="50" height="50" />
        <div className="ms-3">
          <h5>Hey, <strong>Student</strong></h5>
          <small>ID: S1718791292</small>
        </div>
      </div>
      <div className={styles.studentDetails}>
        <ul>
          <li><i className="bi bi-person-circle"></i> <strong>Class:</strong> 12c</li>
          <li><i className="bi bi-building"></i> <strong>Section:</strong> A</li>
          <li><i className="bi bi-calendar"></i> <strong>DOB:</strong> 19-06-2024</li>
          <li><i className="bi bi-telephone"></i> <strong>Contact:</strong> 7894561230</li>
          <li><i className="bi bi-envelope"></i> <strong>Email:</strong> student@gmail.com</li>
          <li><i className="bi bi-house-door"></i> <strong>Address:</strong> Noida 63</li>
          <li><i className="bi bi-bus-front"></i> <strong>Bus Panel</strong></li>
          <li><i className="bi bi-cash-coin"></i> <strong>Pay-Fee</strong></li>
        </ul>
      </div>
    </div>
  );
}

export default StudentInfo;
