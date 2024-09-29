import React, { useState } from 'react';
import styles from './FeeTable.module.css';

const FeeTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedFees, setSelectedFees] = useState([]);
  const [selectedFeesRows, setSelectedFeesRows] = useState([]);

  const fees = [
    { name: 'DC', amount: 5000 },
    { name: 'TUITION FEE', amount: 1500 },
    { name: 'ANNUAL FEE', amount: 3500 },
    { name: 'TRANSPORT CONS.', amount: -100 },
  ];

  const handleRowSelect = (index) => {
    setSelectedRows((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const handleSelectedFeeRowSelect = (index) => {
    setSelectedFeesRows((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const moveSelected = () => {
    const selected = selectedRows.map((index) => fees[index]);
    setSelectedFees((prev) => [...prev, ...selected]);
    setSelectedRows([]);
  };

  const clearSelectedFee = () => {
    const remainingFees = selectedFees.filter((_, index) => !selectedFeesRows.includes(index));
    setSelectedFees(remainingFees);
    setSelectedFeesRows([]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <h1 className={styles.panelTitle}>Fee Available</h1>
        <table className={styles.feeTable}>
          <thead>
            <tr>
              <th>Fees Available</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {fees.map((fee, index) => (
              <tr
                key={index}
                className={selectedRows.includes(index) ? styles.selected : ''}
                onClick={() => handleRowSelect(index)}
              >
                <td>{fee.name}</td>
                <td>{fee.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className={styles.moveButton} onClick={moveSelected}>
          Move Selected
        </button>
      </div>

      <div className={styles.rightPanel}>
        <h1 className={styles.panelTitle}>Selected Fees</h1>
        <ul>
          {selectedFees.map((fee, index) => (
            <li
              key={index}
              className={`${styles.feeItem} ${selectedFeesRows.includes(index) ? styles.selected : ''}`}
              onClick={() => handleSelectedFeeRowSelect(index)}
            >
              {fee.name} - {fee.amount}
            </li>
          ))}
        </ul>

        <div className={styles.bottomButtons}>
          <button className={styles.saveButton}>
            Save
          </button>
          <button className={styles.closeButton} onClick={clearSelectedFee}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeeTable;
