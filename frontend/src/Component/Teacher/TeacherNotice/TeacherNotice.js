import React, { useState, useRef } from 'react';
import CommonInputField from '../../../CommonFields/Input/CommonInputField';
import styles from './TeacherNotice.module.css'; // Assuming you have the styles file

function TeacherNotice() {
  // State variables for form inputs
  const [noticeTitle, setNoticeTitle] = useState('');
  const [noticeBody, setNoticeBody] = useState('');
  const [file, setFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  // Error state
  const [noticeTitleError, setNoticeTitleError] = useState(false);
  const [noticeBodyError, setNoticeBodyError] = useState(false);
  const [fileError, setFileError] = useState(false);

  // Reference for file input
  const fileInputRef = useRef(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    let hasError = false;
    if (!noticeTitle) {
      setNoticeTitleError(true);
      hasError = true;
    } else {
      setNoticeTitleError(false);
    }

    if (!noticeBody) {
      setNoticeBodyError(true);
      hasError = true;
    } else {
      setNoticeBodyError(false);
    }

    if (!file) {
      setFileError(true);
      hasError = true;
    } else {
      setFileError(false);
    }

    if (!hasError) {
      // Perform further form submission logic here
      setSuccessMessage('Notice posted successfully!');
      handleReset(); // Reset form after successful submission
    } else {
      setSuccessMessage('Please fill in all fields before posting.');
    }
  };

  // Handle file change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFileError(false); // Remove error message when a file is selected
  };

  // Reset only the input fields
  const handleReset = () => {
    setNoticeTitle('');
    setNoticeBody('');
    setFile(null);

    // Ensure the file input reference exists before accessing it
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }

    // Keep the error states intact until user interacts with fields
  };

  return (
    <div className={styles.noticeBoardContainer1}>
      <h2 className={styles.noticeHeading}>Create Notice</h2>
      <div className={styles.noticeBoardContainer}>
        <form className={styles.noticeForm} onSubmit={handleSubmit}>
          <div className={styles.noticeFormGroup}>
            <CommonInputField
              label="Notice Title"
              name="noticeTitle"
              value={noticeTitle}
              onChange={(e) => {
                setNoticeTitle(e.target.value);
                setNoticeTitleError(false); // Remove error message when user types
              }}
              placeholder="Title of notice"
              field="input"
              index={1}
              className={noticeTitleError ? styles.errorInput : ''}
            />
            {noticeTitleError && <p className={styles.errorMessage}>Notice title is required.</p>}
          </div>

          <div className={styles.noticeFormGroup3}>
            <div className={styles.noticeFormGroup2}>
              <CommonInputField
                label="Notice Body"
                name="noticeBody"
                value={noticeBody}
                onChange={(e) => {
                  setNoticeBody(e.target.value);
                  setNoticeBodyError(false); // Remove error message when user types
                }}
                placeholder="Write your notice here..."
                field="textarea"
                index={2}
                rows={6}
                className={noticeBodyError ? styles.errorInput : ''}
              />
              {noticeBodyError && <p className={styles.errorMessage}>Notice body is required.</p>}
            </div>

            <div className={styles.noticeFormGroup1}>
              <CommonInputField
                label="Any File"
                name="fileUpload"
                type="file"
                onChange={handleFileChange}
                field="input"
                inputRef={fileInputRef}
                index={3}
                className={fileError ? styles.errorInput : ''}
              />
              {fileError && <p className={styles.errorMessage}>Please upload a file.</p>}
            </div>
          </div>

          <div className={styles.noticeButtonGroup}>
            <button type="button" className={styles.noticeResetButton} onClick={handleReset}>
              Reset Fields
            </button>
            <button type="submit" className={styles.noticePostButton}>
              Post
            </button>
          </div>
        </form>

        {/* Display success message */}
        {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
      </div>
    </div>
  );
}

export default TeacherNotice;
