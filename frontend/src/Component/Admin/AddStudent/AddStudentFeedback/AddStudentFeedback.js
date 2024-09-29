import React, { useState } from 'react';
import styles from './AddFeedback.module.css'; // Import CSS module
import IMG from '../../../../adminimage.jpg'; // Ensure the path is correct
import CommonInputField from '../../../../CommonFields/Input/CommonInputField'; // Import the CommonInputField component

const AddStudentFeedback = () => {
  const [selectedClass, setSelectedClass] = useState('12 (Commerce)');
  const [selectedSection, setSelectedSection] = useState('A');
  const [selectedStudent, setSelectedStudent] = useState('');
  const [showStudentDetails, setShowStudentDetails] = useState(false);
  const [studentData, setStudentData] = useState({
    name: '',
    id: '',
    phone: '',
    dob: '',
    feedback: '',
  });
  const [feedbacks, setFeedbacks] = useState([]);

  const studentsData = {
    '12 (Commerce)': {
      A: ['Kalwa', 'John', 'Sarah'],
      B: ['Michael', 'Laura', 'David'],
    },
    '12 (Science)': {
      A: ['Alice', 'Bob', 'Charlie'],
      B: ['Diana', 'Edward', 'Fiona'],
    },
    '12 (Art)': {
      A: ['Henry', 'Ivy', 'Jack'],
      B: ['Karen', 'Liam', 'Mia'],
    },
    '11 (Commerce)': {
      A: ['Kalwa', 'John', 'Sarah'],
      B: ['Michael', 'Laura', 'David'],
    },
    '11 (Science)': {
      A: ['Alice', 'Bob', 'Charlie'],
      B: ['Diana', 'Edward', 'Fiona'],
    },
    '11 (Art)': {
      A: ['Henry', 'Ivy', 'Jack'],
      B: ['Karen', 'Liam', 'Mia'],
    },
    '10 (Science)': {
      A: ['Alice', 'Bob', 'Charlie'],
      B: ['Diana', 'Edward', 'Fiona'],
    },
    '10 (Art)': {
      A: ['Henry', 'Ivy', 'Jack'],
      B: ['Karen', 'Liam', 'Mia'],
    },
    '9 (Science)': {
      A: ['Alice', 'Bob', 'Charlie'],
      B: ['Diana', 'Edward', 'Fiona'],
    },
    '9 (Art)': {
      A: ['Henry', 'Ivy', 'Jack'],
      B: ['Karen', 'Liam', 'Mia'],
    },
    '8 th': {
      A: ['Alice', 'Bob', 'Charlie'],
      B: ['Diana', 'Edward', 'Fiona'],
    },
    '7 th': {
      A: ['Henry', 'Ivy', 'Jack'],
      B: ['Karen', 'Liam', 'Mia'],
    },
    '6 th': {
      A: ['Alice', 'Bob', 'Charlie'],
      B: ['Diana', 'Edward', 'Fiona'],
    },
    '5 th': {
      A: ['Henry', 'Ivy', 'Jack'],
      B: ['Karen', 'Liam', 'Mia'],
    },
    '4 th': {
      A: ['Alice', 'Bob', 'Charlie'],
      B: ['Diana', 'Edward', 'Fiona'],
    },
    '3 rd': {
      A: ['Henry', 'Ivy', 'Jack'],
      B: ['Karen', 'Liam', 'Mia'],
    },
    '2 nd': {
      A: ['Henry', 'Ivy', 'Jack'],
      B: ['Karen', 'Liam', 'Mia'],
    },
    '1 st': {
      A: ['Alice', 'Bob', 'Charlie'],
      B: ['Diana', 'Edward', 'Fiona'],
    },
    'LKG': {
      A: ['Henry', 'Ivy', 'Jack'],
      B: ['Karen', 'Liam', 'Mia'],
    },
    'UKG': {
      A: ['Alice', 'Bob', 'Charlie'],
      B: ['Diana', 'Edward', 'Fiona'],
    },
    'NUR': {
      A: ['Henry', 'Ivy', 'Jack'],
      B: ['Karen', 'Liam', 'Mia'],
    },
  };

 
  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
    setSelectedStudent(''); 
  };

 
  const handleSectionChange = (event) => {
    setSelectedSection(event.target.value);
    setSelectedStudent(''); // Reset student when section changes
  };

  // Handler for student change
  const handleStudentChange = (event) => {
    setSelectedStudent(event.target.value);
  };

  // Handler for finding the student details
  const handleFind = () => {
    // Assuming this data comes from an API or database
    setStudentData({
      name: selectedStudent, // Add student's name from the dropdown
      id: 'S1726043026',
      phone: '1231231232',
      dob: '11/09/2024',
      feedback: '',
    });
    setShowStudentDetails(true);
  };

  // Handler for feedback input change
  const handleFeedbackChange = (event) => {
    setStudentData({ ...studentData, feedback: event.target.value });
  };

  // Handler for sending feedback
  const handleSendFeedback = () => {
    setFeedbacks([...feedbacks, { ...studentData, timestamp: new Date() }]);
    setStudentData({ ...studentData, feedback: '' }); // Clear the feedback input field
  };

  // Handler for editing feedback
  const handleEditFeedback = (index) => {
    const updatedFeedbacks = [...feedbacks];
    updatedFeedbacks[index].feedback = prompt('Edit Feedback:', updatedFeedbacks[index].feedback);
    setFeedbacks(updatedFeedbacks);
  };

  // Handler for deleting feedback
  const handleDeleteFeedback = (index) => {
    const updatedFeedbacks = [...feedbacks];
    updatedFeedbacks.splice(index, 1);
    setFeedbacks(updatedFeedbacks);
  };

  return (
    <div className={styles.studentfeedbackcontainer}>
      <h1 className={styles.titlefeedback}>Student Feedback</h1>
      <div className={styles.studentfeedbackform}>
        {/* Using CommonInputField for Class selection */}
        <CommonInputField
          label="Class:"
          field="select"
          name="class"
          value={selectedClass}
          onChange={handleClassChange}
          option={Object.keys(studentsData)} // Dynamically render available classes
        />
        
        {/* Using CommonInputField for Section selection */}
        <CommonInputField
          label="Section:"
          field="select"
          name="section"
          value={selectedSection}
          onChange={handleSectionChange}
          option={Object.keys(studentsData[selectedClass])} // Dynamically render available sections for selected class
        />
        
        {/* Using CommonInputField for Student selection */}
        <CommonInputField
          label="Student:"
          field="select"
          name="student"
          value={selectedStudent}
          onChange={handleStudentChange}
          option={studentsData[selectedClass][selectedSection]} // Render students based on selected class and section
        />

        <button className={styles.feedbackButton} onClick={handleFind}>Find</button>
      </div>

      {showStudentDetails && (
        <div className={styles.studentfeedbackdetails}>
          <div className={styles.studentfeedbackstudent}>
            <h2>Student Deatail :</h2>
            <div className={styles.studentfeedbackinfo}>
              <img src={IMG} alt="Student" className={styles.feedbackImg} />
              <p className={styles.feedbackParagraph}><strong>Name:</strong> {studentData.name}</p> {/* Display Student Name */}
              <p className={styles.feedbackParagraph}><strong>ID:</strong> {studentData.id}</p>
              <p className={styles.feedbackParagraph}><strong>Phone:</strong> {studentData.phone}</p>
              <p className={styles.feedbackParagraph}><strong>DOB:</strong> {studentData.dob}</p>
            </div>
          </div>

          <div className={styles.studentfeedbackfeedback}>
            <h2>Feedbacks</h2>
            
            <ul className={styles.feedbackUl}>
              {feedbacks.map((feedback, index) => (
                <li key={index} className={styles.feedbackLi}>
                  <p className={styles.feedbackParagraph}><strong>{new Date(feedback.timestamp).toLocaleString()}</strong></p>
                  <p className={styles.feedbackParagraph}>{feedback.feedback}</p>
                  <div className={styles.studentfeedbackactions}>
                    <button className={styles.feedbackButton} onClick={() => handleEditFeedback(index)}>Edit</button>
                    <button className={styles.feedbackButton} onClick={() => handleDeleteFeedback(index)}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className={styles.studentfeedbackfeedbackform}>
              <CommonInputField
                field="textarea"
                name="feedback"
                value={studentData.feedback}
                onChange={handleFeedbackChange}
                placeholder="Enter feedback here..."
                className={styles.feedbackTextarea}
              />
              <button className={styles.feedbackButton} onClick={handleSendFeedback}>Send</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddStudentFeedback;
