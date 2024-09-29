import React, { useState } from 'react';
import styles from './StudentBusStop.module.css';

const StudentBusStop = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    cardNo: '',
    admNo: '',
    name: '',
    fatherName: '',
    route: '',
    busStop: '',
    class: '',
    rollNo: '',
    fareStartFrom: '',
    vehicle: ''
  });

  // State to track editing
  const [editing, setEditing] = useState(false);
  const [editRowIndex, setEditRowIndex] = useState(null);

  // Sample data (replace this with your actual data or state management)
  const [tableData, setTableData] = useState([
    {
      cardNo: '1545',
      admNo: '1545',
      name: 'AADITYA RAGHUVANSHI',
      class: 'II A',
      rollNo: '4',
      busStop: 'KARPURIPUR',
      route: 'Route-II',
      vehicle: '8842',
      fare: '700',
      fatherName: 'MR/GAJENDRA SINGH',
      secId: '9',
      fareStartFrom: '2024-09-01',
    },
    {
        cardNo: '1545',
        admNo: '1145',
        name: 'TONY STARK',
        class: 'II b',
        rollNo: '16',
        busStop: 'SALEMPUR',
        route: 'Route-II',
        vehicle: '8842',
        fare: '700',
        fatherName: 'MR/THOR SINGH',
        secId: '9',
        fareStartFrom: '2024-09-01',
      },
    // Add more rows here
  ]);

  // Handle form input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  // Handle Edit button click
  const handleEditClick = (index) => {
    const row = tableData[index];
    setFormData(row);
    setEditing(true);
    setEditRowIndex(index);
  };

  // Handle Update button click
  const handleUpdateClick = () => {
    const updatedData = [...tableData];
    updatedData[editRowIndex] = formData;
    setTableData(updatedData);
    setEditing(false);
    setFormData({
      cardNo: '',
      admNo: '',
      name: '',
      fatherName: '',
      route: '',
      busStop: '',
      class: '',
      rollNo: '',
      fareStartFrom: '',
      vehicle: ''
    });
  };

  return (
    <div className={styles.studentBusStopContainer1}>
      <div className={styles.studentBusStopTitle1}>
        <h1 className={styles.studentBusStopTitle}>Student Bus Stop</h1>
      </div>
      
      <div className={styles.studentBusStopContainer}>
        <div className={styles.studentBusStopFormContainer}>
          <div className={styles.studentBusStopInputGroup}>
            <label className={styles.studentBusStopLabel} htmlFor="cardNo">Card No:</label>
            <input 
              className={styles.studentBusStopInput} 
              type="text" 
              id="cardNo" 
              value={formData.cardNo} 
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.studentBusStopInputGroup}>
            <label className={styles.studentBusStopLabel} htmlFor="admNo">Adm. No:</label>
            <input 
              className={styles.studentBusStopInput} 
              type="text" 
              id="admNo" 
              value={formData.admNo} 
              onChange={handleInputChange} 
            />
          </div>
          <div className={styles.studentBusStopInputGroup}>
            <label className={styles.studentBusStopLabel} htmlFor="name">Name:</label>
            <input 
              className={styles.studentBusStopInput} 
              type="text" 
              id="name" 
              value={formData.name} 
              onChange={handleInputChange} 
            />
          </div>
          <div className={styles.studentBusStopInputGroup}>
            <label className={styles.studentBusStopLabel} htmlFor="fatherName">Father Name:</label>
            <input 
              className={styles.studentBusStopInput} 
              type="text" 
              id="fatherName" 
              value={formData.fatherName} 
              onChange={handleInputChange} 
            />
          </div>
          <div className={styles.studentBusStopInputGroup}>
            <label className={styles.studentBusStopLabel} htmlFor="route">Route:</label>
            <select 
              className={styles.studentBusStopDropdown} 
              id="route" 
              value={formData.route} 
              onChange={handleInputChange}
            >
              <option value="">Select</option>
              <option value="Route-I">Route-I</option>
              <option value="Route-II">Route-II</option>
            </select>
          </div>
          <div className={styles.studentBusStopInputGroup}>
            <label className={styles.studentBusStopLabel} htmlFor="busStop">Bus Stop:</label>
            <input 
              className={styles.studentBusStopInput} 
              type="text" 
              id="busStop" 
              value={formData.busStop} 
              onChange={handleInputChange} 
            />
          </div>
          <div className={styles.studentBusStopInputGroup}>
            <label className={styles.studentBusStopLabel} htmlFor="class">Class:</label>
            <select 
              className={styles.studentBusStopDropdown} 
              id="class" 
              value={formData.class} 
              onChange={handleInputChange}
            >
              <option value="">Select</option>
              <option value="I A">I A</option>
              <option value="II A">II A</option>
            </select>
          </div>
          <div className={styles.studentBusStopInputGroup}>
            <label className={styles.studentBusStopLabel} htmlFor="rollNo">Roll No.:</label>
            <input 
              className={styles.studentBusStopInput} 
              type="text" 
              id="rollNo" 
              value={formData.rollNo} 
              onChange={handleInputChange} 
            />
          </div>
          <div className={styles.studentBusStopInputGroup}>
            <label className={styles.studentBusStopLabel} htmlFor="fareStartFrom">Fare start from:</label>
            <input 
              className={styles.studentBusStopInput} 
              type="date" 
              id="fareStartFrom" 
              value={formData.fareStartFrom} 
              onChange={handleInputChange} 
            />
          </div>
          <div className={styles.studentBusStopInputGroup}>
            <label className={styles.studentBusStopLabel} htmlFor="vehicle">Vehicle:</label>
            <input 
              className={styles.studentBusStopInput} 
              type="text" 
              id="vehicle" 
              value={formData.vehicle} 
              onChange={handleInputChange} 
            />
          </div>
        </div>
      </div>
      <div className={styles.studentBusStopContainer2}>
      <div className={styles.studentBusStopTableContainer}>
        <table className={styles.studentBusStopTable}>
          <thead>
            <tr>
              <th className={styles.studentBusStopTh}>Stu_ADM_NO</th>
              <th className={styles.studentBusStopTh}>Stu_Name</th>
              <th className={styles.studentBusStopTh}>Class</th>
              <th className={styles.studentBusStopTh}>RollNo.</th>
              <th className={styles.studentBusStopTh}>STOP_DESC</th>
              <th className={styles.studentBusStopTh}>RT_DESC</th>
              <th className={styles.studentBusStopTh}>VEHICLE_NO</th>
              <th className={styles.studentBusStopTh}>Stop_Fa</th>
              <th className={styles.studentBusStopTh}>STU_FATHER_NAME</th>
              <th className={styles.studentBusStopTh}>SEC_ID</th>
              <th className={styles.studentBusStopTh}>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td className={styles.studentBusStopTd}>{row.admNo}</td>
                <td className={styles.studentBusStopTd}>{row.name}</td>
                <td className={styles.studentBusStopTd}>{row.class}</td>
                <td className={styles.studentBusStopTd}>{row.rollNo}</td>
                <td className={styles.studentBusStopTd}>{row.busStop}</td>
                <td className={styles.studentBusStopTd}>{row.route}</td>
                <td className={styles.studentBusStopTd}>{row.vehicle}</td>
                <td className={styles.studentBusStopTd}>{row.fare}</td>
                <td className={styles.studentBusStopTd}>{row.fatherName}</td>
                <td className={styles.studentBusStopTd}>{row.secId}</td>
                <td className={styles.studentBusStopTd}>
                  <button 
                    className={styles.studentBusStopButton} 
                    onClick={() => handleEditClick(index)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        
      <div className={styles.studentBusStopButtonContainer}>
        {editing ? (
          <button 
            className={styles.studentBusStopButton} 
            onClick={handleUpdateClick}
          >
            Update
          </button>
        ) : (
          <button 
            className={styles.studentBusStopButton}
          >
            Save
          </button>
        )}
        <button className={styles.studentBusStopButton}>Delete</button>
        <button className={styles.studentBusStopButton}>Cancel</button>
        <button className={styles.studentBusStopButton}>Close</button>
      </div>
    </div>
    </div>
  );
};

export default StudentBusStop;
