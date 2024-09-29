import React from 'react';
import styles from './FeeInvoice.module.css';

const FeeInvoice = () => {
  return (
    <div className={styles.invoiceContainer}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-stereo-smart-payment-bill-png-image_5049167.jpg" alt="School Logo" />
        </div>
        <div className={styles.schoolInfo}>
          <h1>School Management System</h1>
          <p>Pari Chowk, Greater Noida, G.B. Nagar</p>
          <p>Contact No: +91 8743007745</p>
        </div>
      </div>

      <h2 className={styles.invoiceTitle}>Fee Invoice</h2>

      <div className={styles.details}>
        <div className={styles.row}>
          <span><strong>Receipt No:</strong> 912</span>
          <span><strong>Date:</strong> 17/8/2016</span>
        </div>
        <div className={styles.row}>
          <span><strong>Student Name:</strong> AARAV CHIKARA</span>
          <span><strong>Adm. No:</strong> 1591</span>
        </div>
        <div className={styles.row}>
          <span><strong>Father's Name:</strong> MR/ANUJ KUMAR</span>
          <span><strong>Class:</strong> NUR A</span>
        </div>
        <div className={styles.row}>
          <span><strong>Roll No:</strong> 1</span>
          <span><strong>Month:</strong> MAY</span>
        </div>
      </div>

      <table className={styles.feeTable}>
        <thead>
          <tr>
            <th>Particulars</th>
            <th>Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TUITION FEE</td>
            <td>1500.00</td>
          </tr>
          <tr>
            <td>Total Fee</td>
            <td>1500.00</td>
          </tr>
          <tr>
            <td>Late Fine</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>Previous Dues</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>Concession</td>
            <td>0.00</td>
          </tr>
          <tr className={styles.totalRow}>
            <td>Total Amount</td>
            <td>1500.00</td>
          </tr>
          <tr>
            <td>Paid</td>
            <td>1500.00</td>
          </tr>
          <tr>
            <td>Balance</td>
            <td>0.00</td>
          </tr>
        </tbody>
      </table>

      <div className={styles.footer}>
        <p><strong>Amount in Words:</strong> Rupees One Thousand Five Hundred Only</p>
        <div className={styles.signature}>
          <span>Authorized Signature</span>
          <span>Infotech</span>
        </div>
      </div>
    </div>
  );
};

export default FeeInvoice;
