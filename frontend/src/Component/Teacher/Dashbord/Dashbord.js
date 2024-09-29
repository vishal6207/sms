import React, { useState } from 'react';
import styles from './Dashbord.module.css';
import CommonInputField from '../../../CommonFields/Input/CommonInputField'; // Ensure correct path

const Dashbord = () => {
  const [notices, setNotices] = useState([
    { title: 'hlo', date: '05 Sep, 2024', sender: 'You' },
    { title: 'ddjdjs', date: '05 Sep, 2024', sender: 'You' },
    { title: 'sdfrdgf', date: '02 Sep, 2024', sender: 'You' },
    { title: 'aaa', date: '02 Sep, 2024', sender: 'Gilbert opoku oppong' },
    { title: 'fgbnfg', date: '30 Aug, 2024', sender: 'You' },
  ]);

  const [reminders, setReminders] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [newReminder, setNewReminder] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleNoticeClick = (notice) => {
    console.log('Notice clicked:', notice);
  };

  const handleReminderClick = (reminder) => {
    console.log('Reminder clicked:', reminder);
  };

  const handleAddReminder = () => {
    setEditIndex(null); // Ensure you're not editing when adding a new reminder
    setShowPopup(true);
  };

  const handleSaveReminder = () => {
    if (newReminder.trim()) {
      if (editIndex !== null) {
        // Update existing reminder
        setReminders(reminders.map((reminder, index) =>
          index === editIndex ? { title: newReminder } : reminder
        ));
      } else {
        // Add new reminder
        setReminders([...reminders, { title: newReminder }]);
      }
      setNewReminder('');
      setShowPopup(false);
    }
  };

  const handleDeleteReminder = (indexToDelete) => {
    setReminders((prevReminders) =>
      prevReminders.filter((_, index) => index !== indexToDelete)
    );
  };

  const handleEditReminder = (indexToEdit) => {
    setEditIndex(indexToEdit);
    setNewReminder(reminders[indexToEdit].title);
    setShowPopup(true);
  };

  return (
    <div className={styles.dashboard1}>
      <div className={styles.dashboard}>
        <div className={styles.dashboardHeader}>
          <h1 className={styles.dashboardTitle}>Dashboard</h1>
        </div>
        <div className={styles.dashboardStats}>
          {/* Stats Links */}
          <a href="/teachers" className={styles.dashboardStat}>
            <div className={styles.dashboardStatIcon}>
              <i className="fa fa-user"></i>
            </div>
            <div className={styles.dashboardStatContent}>
              <p className={styles.dashboardStatNumber}>1</p>
              <p className={styles.dashboardStatLabel}>Teachers</p>
            </div>
          </a>
          <a href="/Addstudent" className={styles.dashboardStat}>
            <div className={styles.dashboardStatIcon}>
              <i className="fa fa-users"></i>
            </div>
            <div className={styles.dashboardStatContent}>
              <p className={styles.dashboardStatNumber}>3</p>
              <p className={styles.dashboardStatLabel}>Students</p>
            </div>
          </a>
          <a href="/notes" className={styles.dashboardStat}>
            <div className={styles.dashboardStatIcon}>
              <i className="fa fa-book"></i>
            </div>
            <div className={styles.dashboardStatContent}>
              <p className={styles.dashboardStatNumber}>0</p>
              <p className={styles.dashboardStatLabel}>Syllabus</p>
            </div>
          </a>
          <a href="/notices" className={styles.dashboardStat}>
            <div className={styles.dashboardStatIcon}>
              <i className="fa fa-bell"></i>
            </div>
            <div className={styles.dashboardStatContent}>
              <p className={styles.dashboardStatNumber}>12</p>
              <p className={styles.dashboardStatLabel}>Notices</p>
            </div>
          </a>
        </div>
        <div className={styles.dashboardContent}>
          {/* Notices Section */}
          <div className={styles.dashboardSection}>
            <div className={styles.dashboardSectionHeader}>
              <i className="fa fa-envelope"></i>
              <h2 className={styles.dashboardSectionTitle}>Latest Notices</h2>
            </div>
            <table className={styles.dashboardTable}>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Sender</th>
                </tr>
              </thead>
              <tbody>
                {notices.map((notice, index) => (
                  <tr key={index} onClick={() => handleNoticeClick(notice)}>
                    <td>
                      <span className={styles.noticeDot} />
                      {notice.title}
                    </td>
                    <td>{notice.date}</td>
                    <td>{notice.sender}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Reminders Section */}
          <div className={styles.dashboardSection}>
            <div className={styles.dashboardSectionHeader}>
              <i className="fa fa-bell"></i>
              <h2 className={styles.dashboardSectionTitle}>Reminders</h2>
              <i
                className={`fa fa-plus ${styles.addReminderIcon}`}
                onClick={handleAddReminder}
              />
            </div>

            <div className={styles.dashboardReminders}>
              {reminders.map((reminder, index) => (
                <div
                  key={index}
                  className={styles.dashboardReminder}
                >
                  <span>{reminder.title}</span>
                  <div className={styles.dltedit}>
                  <button
                    className={styles.editButton}
                    onClick={() => handleEditReminder(index)}
                  >
                    Edit
                  </button>
                  <button
                    className={styles.deleteButton}
                    onClick={() => handleDeleteReminder(index)}
                  >
                    Delete
                  </button>
                </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Popup to Add/Edit Reminder */}
        {showPopup && (
          <div className={styles.popup}>
            <div className={styles.popupContent}>
              <CommonInputField
                field="textarea"
                value={newReminder}
                onChange={(e) => setNewReminder(e.target.value)}
                placeholder="Enter reminder"
              />
              <div className={styles.savecancel}>
                <button onClick={handleSaveReminder} className={styles.canncel}>Save</button>
                <button onClick={() => setShowPopup(false)} className={styles.canncel}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashbord;
