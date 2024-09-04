import React, { useState } from 'react';
import styles from './FeeReceptReport.module.css';
import CommonInputField from '../../../CommonFields/Input/CommonInputField';

const FeeReceptReport = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [className, setClassName] = useState('');
  const [adminNo, setAdminNo] = useState('');
  const [mod, setMod] = useState('');
  const [hostel, setHostel] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fromDate, toDate, className, adminNo, mod, hostel, status);
  };

  return (
    <div className={styles.feeReceptContainer}>
      <h2 className={styles.feeReceptTitle}>Fee Receipt Report:</h2>
      <form className={styles.feeReceptForm} onSubmit={handleSubmit}>

        <CommonInputField
          field="date"
          name="fromDate"
          label="From Date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          mainclass={styles.feeReceptFormGroup}
          inputclass={styles.feeReceptInput}
          index={0}
        />

        <CommonInputField
          field="date"
          name="toDate"
          label="To Date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          mainclass={styles.feeReceptFormGroup}
          inputclass={styles.feeReceptInput}
          index={1}
        />

        <CommonInputField
          field="select"
          name="className"
          label="Class"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          option={["IIA", "IIB"]} // Replace with your actual class options
          defaultoption="Select Class"
          mainclass={styles.feeReceptFormGroup}
          inputclass={styles.feeReceptSelect}
          index={2}
        />

        <CommonInputField
          field="input"
          type="text"
          name="adminNo"
          label="Adm. No.:"
          value={adminNo}
          onChange={(e) => setAdminNo(e.target.value)}
          placeholder="Enter Admin Number"
          mainclass={styles.feeReceptFormGroup}
          inputclass={styles.feeReceptInput1}
          index={3}
        />

        <CommonInputField
          field="select"
          name="mod"
          label="Mod"
          value={mod}
          onChange={(e) => setMod(e.target.value)}
          option={["cash", "cheque"]} // Replace with your actual mode options
          defaultoption="Select Mode"
          mainclass={styles.feeReceptFormGroup}
          inputclass={styles.feeReceptSelect}
          index={4}
        />

        {/* Hostel Radio Buttons */}
        <div className={styles.feeReceptFormGroup}>
          <label className={styles.feeReceptLabel}>Hostel</label>
          <div className={styles.feeReceptRadioGroup}>
            <label className={styles.feeReceptRadio}>
              <input
                type="radio"
                name="hostel"
                value="hostler"
                checked={hostel === 'hostler'}
                onChange={(e) => setHostel(e.target.value)}
              />
              Hostler
            </label>
            <label className={styles.feeReceptRadio}>
              <input
                type="radio"
                name="hostel"
                value="dayScholar"
                checked={hostel === 'dayScholar'}
                onChange={(e) => setHostel(e.target.value)}
              />
              Day Scholar
            </label>
            <label className={styles.feeReceptRadio}>
              <input
                type="radio"
                name="hostel"
                value="both"
                checked={hostel === 'both'}
                onChange={(e) => setHostel(e.target.value)}
              />
              Both
            </label>
          </div>
        </div>

        {/* Status Radio Buttons */}
        <div className={styles.feeReceptFormGroup}>
          <label className={styles.feeReceptLabel}>Status</label>
          <div className={styles.feeReceptRadioGroup1}>
            <label className={styles.feeReceptRadio}>
              <input
                type="radio"
                name="status"
                value="paid"
                checked={status === 'paid'}
                onChange={(e) => setStatus(e.target.value)}
              />
              Paid
            </label>
            <label className={styles.feeReceptRadio}>
              <input
                type="radio"
                name="status"
                value="cancel"
                checked={status === 'cancel'}
                onChange={(e) => setStatus(e.target.value)}
              />
              Cancel
            </label>
          </div>
        </div>

        <div className={styles.feeReceptButtonGroup}>
          <button type="submit" className={`${styles.feeReceptButton} ${styles.feeReceptShow}`}>
            Show
          </button>
          <button type="button" className={`${styles.feeReceptButton} ${styles.feeReceptPrint}`}>
            Print
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeeReceptReport;
