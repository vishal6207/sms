import React, { useState } from 'react';
import styles from './Notes.module.css'; // Import CSS module
import CommonInputField from '../../../CommonFields/Input/CommonInputField'; // Import CommonInputField component

// Mock data for subjects per class (for simplicity)
const subjectData = {
  1: ['Hindi', 'English'],
  2: ['Hindi', 'Math', 'Science'],
  3: ['English', 'Social Science', 'Math'],
  4: ['Hindi', 'English'],
  5: ['Hindi', 'Math', 'Science'],
  6: ['English', 'Social Science', 'Math'],
  7: ['Hindi', 'English'],
  8: ['Hindi', 'Math', 'Science'],
  9: ['English', 'Social Science', 'Math'],
  // Add more classes with subjects as needed
};

function Notes() {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [showForm, setShowForm] = useState(false); // Toggle form visibility
  const [showTable, setShowTable] = useState(true); // Toggle table visibility

  // Handle field changes
  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  // Handle search button click
  const handleSearch = () => {
    // Get subjects based on the selected class
    if (selectedClass && subjectData[selectedClass]) {
      setSubjects(subjectData[selectedClass]);
      setShowTable(true); // Show the table after search
      setShowForm(false); // Hide the form if search is done
    } else {
      setSubjects([]); // Clear if no subjects found
    }
  };

  // Handle "Upload Notes" button click to show the form
  const handleUploadClick = () => {
    setShowForm(true);
    setShowTable(false); // Hide table when upload form is shown
  };

  // Close the form
  const handleCloseForm = () => {
    setShowForm(false);
  };

  // Close the subject table
  const handleCloseTable = () => {
    setShowTable(false);
  };

  return (

    <div className={styles.notesContainer1}>

<h2>Notes</h2>
    <div className={styles.notesContainer}>
      

      {/* Dropdown and Search button are hidden if form is visible */}
      {!showForm && (
        <div className={styles.formGroupRow}>
          {/* Class Dropdown */}
          <div className={styles.formGroup}>
            <CommonInputField
              field="select"
              label="Class:"
              name="class"
              value={selectedClass}
              onChange={handleClassChange}
              option={Array.from({ length: 12 }, (_, i) => (i + 1).toString())}
              defaultoption="-- Select Class --"
              mainclass={styles.formGroupSelect}
            />
          </div>

          <div className={styles.uploadSection}>
            <button
              className={styles.uploadButton}
              onClick={handleUploadClick}
            >
              <i className="fas fa-upload"></i> Upload Notes
            </button>
          </div>
        </div>
      )}

      {/* Search button is hidden if form is visible */}
      {!showForm && (
        <div className={styles.formGroup}>
          <button
            className={styles.searchButton}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      )}

      {/* Display Subject Table if subjects are found and showTable is true */}
      {subjects.length > 0 && showTable && !showForm && (
        <div className={styles.subjectTableContainer}>
          <div className={styles.tableHeader}>
            <h3>Subjects for Class {selectedClass}</h3>
            
          </div>
          <table className={styles.subjectTable}>
            <thead>
              <tr>
                <th>No</th>
                <th>Subject</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{subject}</td>
                </tr>
              ))}
            </tbody>
            <button className={styles.submitButton1} onClick={handleCloseTable}>
              Close
            </button>
          </table>
        </div>
      )}

      {/* Upload Form (conditionally displayed) */}
      {showForm && (
        
          <div className={styles.uploadNotesContainer}>
            <form>
              {/* Class and Subject Dropdowns */}
              <div className={styles.formGroupRow}>
                <div className={styles.formGroup}>
                  <CommonInputField
                    field="select"
                    label="Class:"
                    name="class"
                    value={selectedClass}
                    onChange={handleClassChange}
                    option={Array.from({ length: 12 }, (_, i) => (i + 1).toString())}
                    defaultoption="-- Select Class --"
                    mainclass={styles.formGroupSelect}
                  />
                </div>

                <div className={styles.formGroup}>
                  <CommonInputField
                    field="select"
                    label="Subject:"
                    name="subject"
                    value={selectedSubject}
                    onChange={handleSubjectChange}
                    option={subjects}
                    defaultoption="-- Select Subject --"
                    mainclass={styles.formGroupSelect}
                  />
                </div>
              </div>

              {/* Other fields (Title, Comment, File Upload) */}
              <div className={styles.formGroup}>
                <CommonInputField
                  field="input"
                  label="Title:"
                  name="title"
                  placeholder="Enter title"
                  mainclass={styles.formGroupInput}
                />
              </div>

              <div className={styles.formGroup}>
                <CommonInputField
                  field="textarea"
                  label="Comment:"
                  name="comment"
                  placeholder="Enter comment"
                  mainclass={styles.formGroupTextarea}
                  rows={4}
                />
              </div>

              <div className={styles.formGroup}>
                <CommonInputField
                  field="input"
                  type="file"
                  label="Upload File:"
                  name="file"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  mainclass={styles.formGroupInput}
                />
              </div>

              <div className={styles.buttonContainer}>
                <button type="reset" className={styles.submitButton}>
                  Reset
                </button>
                <button type="submit" className={styles.submitButton}>
                  Upload
                </button>
                <button className={styles.submitButton} onClick={handleCloseForm}>
              Close
            </button>
              </div>
            </form>
          </div>
        
      )}
    </div>
    </div>
  );
}

export default Notes;
