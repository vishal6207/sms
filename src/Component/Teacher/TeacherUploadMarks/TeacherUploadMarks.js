import React, { useState } from 'react';
import styles from './TeacherUploadMarks.module.css'; // Importing the CSS module
import CommonInputField from '../../../CommonFields/Input/CommonInputField'; // Importing CommonInputField

const TeacherUploadMark = () => {
  const [activeTab, setActiveTab] = useState('uploadMarks'); // To track which tab is active
  const [showForm, setShowForm] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');
  const [formData, setFormData] = useState({
    examTitle: '',
    class: '',
    section: '',
    totalMarks: '',
    passingMarks: '',
    subject: ''
  });
  const [students, setStudents] = useState([]);
  const [viewStudents, setViewStudents] = useState([]);
  const [showViewTable, setShowViewTable] = useState(false); // To control the visibility of "View Marks" table
  const [showBackButton, setShowBackButton] = useState(false); // To control the visibility of the back button

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Set the active tab
    setShowForm(false); // Reset form and table when switching tabs
    setShowTable(false);
    setShowViewTable(false); // Reset the view table when switching tabs
    setShowBackButton(false); // Hide back button when switching tabs
  };

  const handleUploadClick = () => {
    setShowForm(true);
    setSaveMessage('');
  };

  const handleCloseClick = () => {
    setShowForm(false);
  };

  const handleContinueClick = () => {
    setShowTable(true);
  };

  const handleBackClick = () => {
    setShowTable(false);
    setShowViewTable(false);
    setShowBackButton(false); // Hide back button when going back
  };
  

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAddStudent = () => {
    setStudents([
      ...students,
      {
        id: students.length + 1,
        rollNo: '',
        name: '',
        totalMarks: formData.totalMarks,
        obtainMarks: ''
      }
    ]);
  };

  const handleSaveData = () => {
    console.log('Data saved:', students);
    setSaveMessage('Data saved successfully!');
    setShowTable(false);
  };

  const handleFindClick = () => {
    // Generating 10 random student data
    const randomStudents = Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      rollNo: `Roll-${index + 1}`,
      name: `Student-${index + 1}`,
      totalMarks: 100,
      obtainMarks: Math.floor(Math.random() * 100) + 1
    }));
    setViewStudents(randomStudents);
    setShowViewTable(true); // Display the table when "Find" button is clicked
    setShowBackButton(true); // Show the back button
  };

  const handleCloseViewTable = () => {
    console.log('Closing view table...');
    setShowViewTable(false); // Close the table
    setActiveTab('uploadMarks'); // Switch back to the Upload Marks tab
    setShowBackButton(false); // Hide back button when closing the view table

    console.log('States after closing view table:');
    console.log('showViewTable:', showViewTable);
    console.log('activeTab:', activeTab);
    console.log('showBackButton:', showBackButton);
  };

  return (
    <div className={styles.container1}>

<h1 className={styles.title}>Marks</h1>
      <div className={styles.container}>
        

        {/* Tab Section */}
        <div className={styles.tabContainer}>
          <button
            className={`${styles.tabButton} ${activeTab === 'uploadMarks' ? styles.activeTab : ''}`}
            onClick={() => handleTabClick('uploadMarks')}
          >
            Upload Marks
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'viewMarks' ? styles.activeTab : ''}`}
            onClick={() => handleTabClick('viewMarks')}
          >
            View Marks
          </button>
        </div>

       
          {activeTab === 'uploadMarks' && (
            <div>
             

             
              { !showTable && (
                <div className={styles.formContainer}>

                  <form>
                    <div className={styles.flexdisplay} >
                    <CommonInputField
                      field="input"
                      label="Exam Title"
                      type="text"
                      name="examTitle"
                      placeholder="Enter Exam Title"
                      value={formData.examTitle}
                      onChange={handleInputChange}
                      className={styles.formInput}
                    />
                    <CommonInputField
                      field="select"
                      label="Section"
                      name="section"
                      option={['A', 'B', 'C', 'D']}
                      defaultoption="-- Select Section --"
                      value={formData.section}
                      onChange={handleInputChange}
                      className={styles.formInput}
                    />
                  
                    </div>
                    <div className={styles.flexdisplay} >

                    <CommonInputField
                    field="input"
                    label="Total Marks"
                    type="text"
                    name="totalMarks"
                    placeholder="Enter Total Marks"
                    value={formData.totalMarks}
                    onChange={handleInputChange}
                    className={styles.formInput}
                  />
                    <CommonInputField
                      field="select"
                      label="Class"
                      name="class"
                      option={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']}
                      defaultoption="-- Select Class --"
                      value={formData.class}
                      onChange={handleInputChange}
                      className={styles.formInput}
                    />
                   
                    
                    
                  </div>
                  <div className={styles.flexdisplay} >
                    

                      <CommonInputField
                      field="input"
                      label="Passing Marks"
                      type="text"
                      name="passingMarks"
                      placeholder="Enter Passing Marks"
                      value={formData.passingMarks}
                      onChange={handleInputChange}
                      className={styles.formInput}
                    />
                    <CommonInputField
                      field="select"
                      label="Subject"
                      name="subject"
                      option={['-- Select --']}
                      defaultoption="-- Select Subject --"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={styles.formInput}
                    />
                    </div>
                    <div className={styles.formSubmit1}>
                      <button type="button" onClick={handleContinueClick} className={styles.formSubmit}>
                        Continue
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Conditionally Render the Table */}
              {showTable && (
                <div className={styles.tableContainer}>
                  
                  <table className={styles.dataTable}>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Roll No</th>
                        <th>Name</th>
                        <th>Total Marks</th>
                        <th>Obtained Marks</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((student, index) => (
                        <tr key={index}>
                          <td>{student.id}</td>
                          <td>
                            <input
                              type="text"
                              value={student.rollNo}
                              onChange={(e) => {
                                const newStudents = [...students];
                                newStudents[index].rollNo = e.target.value;
                                setStudents(newStudents);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              value={student.name}
                              onChange={(e) => {
                                const newStudents = [...students];
                                newStudents[index].name = e.target.value;
                                setStudents(newStudents);
                              }}
                            />
                          </td>
                          <td>{student.totalMarks}</td>
                          <td>
                            <input
                              type="text"
                              value={student.obtainMarks}
                              onChange={(e) => {
                                const newStudents = [...students];
                                newStudents[index].obtainMarks = e.target.value;
                                setStudents(newStudents);
                              }}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className={styles.formSubmit1}>
                    <button onClick={handleSaveData} className={styles.formSubmit}>
                      Save
                    </button>
                    <button className={styles.formSubmit} onClick={handleBackClick}>
                      Close
                    </button>
                    
                  </div>
                </div>
              )}

              {saveMessage && (
                <div className={styles.saveMessage}>
                  <p>{saveMessage}</p>
                </div>
              )}
            </div>
          )}

          {/* Conditionally Render "View Marks" Section */}
          {activeTab === 'viewMarks' && (
            <div>
              
              
              <div className={styles.formContainer}>
              <div className={styles.formContain}>
                <CommonInputField
                  field="select"
                  label="Class"
                  name="class"
                  option={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']}
                  defaultoption="-- Select Class --"
                  className={styles.formInput}
                />
                <CommonInputField
                  field="select"
                  label="Section"
                  name="section"
                  option={['A', 'B', 'C', 'D']}
                  defaultoption="-- Select Section --"
                  className={styles.formInput}
                />
                </div>
                <CommonInputField
                  field="select"
                  label="Session"
                  name="session"
                  option={['2021-22', '2022-23', '2023-24', '2024-25']}
                  defaultoption="-- Select Session --"
                  className={styles.formInput}
                />
                 
                <div className={styles.formSubmit1}>
                  <button type="button" onClick={handleFindClick} className={styles.formSubmit}>
                    Find
                  </button>
                </div>
              </div>

              {/* Display Random Student Data */}
              {showViewTable && (
                <div className={styles.tableContainer}>
                
                  <table className={styles.dataTable}>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Roll No</th>
                        <th>Name</th>
                        <th>Total Marks</th>
                        <th>Obtained Marks</th>
                      </tr>
                    </thead>
                    <tbody>
                      {viewStudents.map((student, index) => (
                        <tr key={index}>
                          <td>{student.id}</td>
                          <td>{student.rollNo}</td>
                          <td>{student.name}</td>
                          <td>{student.totalMarks}</td>
                          <td>{student.obtainMarks}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className={styles.formSubmit1}>
                    <button className={styles.formSubmit} onClick={handleBackClick}>
                      Close
                    </button>
                    
                  </div>

                </div>
              )}
            </div>
          )}
        {/* </div> */}
      </div>
    </div>
  );
};

export default TeacherUploadMark;
