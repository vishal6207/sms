import React, { useState } from 'react';
import styles from './Classfee.module.css';

const Classfee = () => {
  // Unique class names
  const classOptions = [
    'NUR', 'LKG', 'UKG', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'
  ];

  // Fee types
  const feeTypes = [
    'ANNUAL FEE', 'DC FEE', 'I CARD FEE', 'TUITION FEE','REGISTRATION FEE','ENROLLMENT FEE','EXAMINATION FEE','MATERIAL AND BOOK FEE','EXTRACURRICULAR ACTIVITY FEE','TRANSPORTATION FEE','BUILDING FEE'
  ];

  const [fees, setFees] = useState([
    { class: 'NUR', feeType: 'ANNUAL FEE', dayScholar: 3500, hostler: 0 },
    { class: 'NUR', feeType: 'DC', dayScholar: 5000, hostler: 1000 },
    { class: 'NUR', feeType: 'I CARD', dayScholar: 0, hostler: 0 },
    { class: 'NUR', feeType: 'TUITION FEE', dayScholar: 1500, hostler: 500 },
  ]);

  const [newFee, setNewFee] = useState({ class: '', feeType: '', dayScholar: '', hostler: '' });
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFee((prevFee) => ({
      ...prevFee,
      [name]: value,
    }));
  };

  const handleCreate = () => {
    setFees([...fees, newFee]);
    setNewFee({ class: '', feeType: '', dayScholar: '', hostler: '' });
  };

  const handleUpdate = () => {
    const updatedFees = [...fees];
    updatedFees[selectedIndex] = newFee;
    setFees(updatedFees);
    setNewFee({ class: '', feeType: '', dayScholar: '', hostler: '' });
    setSelectedIndex(null);
  };

  const handleDelete = (index) => {
    const updatedFees = fees.filter((_, i) => i !== index);
    setFees(updatedFees);
  };

  const handleEdit = (index) => {
    setNewFee(fees[index]);
    setSelectedIndex(index);
  };

  return (
   
    <div className="card">
    <div className={styles.cfContainer}>
      <h2 className={styles.cfHeading}>Create Class Fee:</h2>

      <div className={styles.cfForm}>
        <select
          name="class"
          value={newFee.class}
          onChange={handleInputChange}
          className={styles.cfInput}
        >
          <option value="" className='classfeeoption'>Select Class</option>
          {classOptions.map((className, index) => (
            <option key={index} value={className}>{className}</option>
          ))}
        </select>
        <select
          name="feeType"
          value={newFee.feeType}
          onChange={handleInputChange}
          className={styles.cfInput}
        >
          <option value="">Select Fee Type</option>
          {feeTypes.map((feeType, index) => (
            <option key={index} value={feeType}>{feeType}</option>
          ))}
        </select>
        </div>
        <div className={styles.cfForm}>
        <input
          name="dayScholar"
          placeholder="Day Scholar Amount"
          value={newFee.dayScholar}
          onChange={handleInputChange}
          className={styles.cfInput}
        />
        <input
          name="hostler"
          placeholder="Hostler Amount"
          value={newFee.hostler}
          onChange={handleInputChange}
          className={styles.cfInput}
        />
      </div>
     
          <div className='cardfeeclass'>
          <div className={styles.cfButtonContainer}>
        <button className={styles.cfButton} onClick={handleCreate}>Create</button>
        <button className={styles.cfButton} onClick={handleUpdate}>Update</button>
      </div>
          </div>

      <table className={styles.cfTable}>
        <thead>
          <tr>
            <th>Class</th>
            <th>Fees</th>
            <th>Day Scholar Amount</th>
            <th>Hostler Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {fees.map((fee, index) => (
            <tr key={index}>
              <td>{fee.class}</td>
              <td>{fee.feeType}</td>
              <td>{fee.dayScholar}</td>
              <td>{fee.hostler}</td>
              <td>
                <button className={styles.editButton} onClick={() => handleEdit(index)}>Edit</button>
                <button className={styles.deleteButton} onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Classfee;
