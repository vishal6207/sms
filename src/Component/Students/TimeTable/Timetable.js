import React, { useState } from 'react';
import DataTable from '../../../CommonFields/DataTable/DataTable';  // Adjust the path according to your project structure
import styles from './Timetable.module.css';
import Navbar from '../Navbar/Navbar';

const Timetable = () => {
  const [currentDayIndex, setCurrentDayIndex] = useState(0);

  const columns = [
    { Header: "Start Time", accessor: "start" },
    { Header: "End Time", accessor: "end" },
    { Header: "Subject", accessor: "subject" },
  ];

  const weekData = {
    Monday: [
      { id: 1, start: "07:00", end: "08:00", subject: "Math" },
      { id: 2, start: "08:00", end: "09:00", subject: "Science" },
      { id: 3, start: "09:00", end: "10:00", subject: "English" },
      { id: 4, start: "10:00", end: "11:00", subject: "History" },
      { id: 5, start: "11:00", end: "12:00", subject: "Geography" },
      { id: 6, start: "12:00", end: "01:00", subject: "LUNCH" },
      { id: 7, start: "01:00", end: "02:00", subject: "Art" },
      { id: 8, start: "02:00", end: "03:00", subject: "Physical Education" },
    ],
    Tuesday: [
      { id: 1, start: "07:00", end: "08:00", subject: "Math" },
      { id: 2, start: "08:00", end: "09:00", subject: "Physics" },
      { id: 3, start: "09:00", end: "10:00", subject: "Chemistry" },
      { id: 4, start: "10:00", end: "11:00", subject: "Biology" },
      { id: 5, start: "11:00", end: "12:00", subject: "Geography" },
      { id: 6, start: "12:00", end: "01:00", subject: "LUNCH" },
      { id: 7, start: "01:00", end: "02:00", subject: "Art" },
      { id: 8, start: "02:00", end: "03:00", subject: "Physical Education" },
    ],
    Wednesday: [{ id: 1, start: "07:00", end: "08:00", subject: "Math" },
        { id: 2, start: "08:00", end: "09:00", subject: "Physics" },
        { id: 3, start: "09:00", end: "10:00", subject: "Chemistry" },
        { id: 4, start: "10:00", end: "11:00", subject: "Biology" },
        { id: 5, start: "11:00", end: "12:00", subject: "Geography" },
        { id: 6, start: "12:00", end: "01:00", subject: "LUNCH" },
        { id: 7, start: "01:00", end: "02:00", subject: "Art" },
        { id: 8, start: "02:00", end: "03:00", subject: "Physical Education" },],
    Thursday: [
        { id: 1, start: "07:00", end: "08:00", subject: "Math" },
      { id: 2, start: "08:00", end: "09:00", subject: "Physics" },
      { id: 3, start: "09:00", end: "10:00", subject: "Chemistry" },
      { id: 4, start: "10:00", end: "11:00", subject: "Biology" },
      { id: 5, start: "11:00", end: "12:00", subject: "Geography" },
      { id: 6, start: "12:00", end: "01:00", subject: "LUNCH" },
      { id: 7, start: "01:00", end: "02:00", subject: "Art" },
      { id: 8, start: "02:00", end: "03:00", subject: "Physical Education" },
    ],
    Friday: [
        { id: 1, start: "07:00", end: "08:00", subject: "Math" },
      { id: 2, start: "08:00", end: "09:00", subject: "Physics" },
      { id: 3, start: "09:00", end: "10:00", subject: "Chemistry" },
      { id: 4, start: "10:00", end: "11:00", subject: "Biology" },
      { id: 5, start: "11:00", end: "12:00", subject: "Geography" },
      { id: 6, start: "12:00", end: "01:00", subject: "LUNCH" },
      { id: 7, start: "01:00", end: "02:00", subject: "Art" },
      { id: 8, start: "02:00", end: "03:00", subject: "Physical Education" },
    ],
    Saturday: [ { id: 1, start: "07:00", end: "08:00", subject: "Math" },
        { id: 2, start: "08:00", end: "09:00", subject: "Physics" },
        { id: 3, start: "09:00", end: "10:00", subject: "Chemistry" },
        { id: 4, start: "10:00", end: "11:00", subject: "Biology" },
        { id: 5, start: "11:00", end: "12:00", subject: "Geography" },
        { id: 6, start: "12:00", end: "01:00", subject: "LUNCH" },
        { id: 7, start: "01:00", end: "02:00", subject: "Art" },
        { id: 8, start: "02:00", end: "03:00", subject: "Physical Education" },],
    Sunday: [],
  };

  const daysOfWeek = Object.keys(weekData);
  const currentDay = daysOfWeek[currentDayIndex];

  const handlePrevDay = () => {
    setCurrentDayIndex((prevIndex) => (prevIndex === 0 ? daysOfWeek.length - 1 : prevIndex - 1));
  };

  const handleNextDay = () => {
    setCurrentDayIndex((prevIndex) => (prevIndex === daysOfWeek.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
    <Navbar/>
    <div className={styles.weeklyTimetableContainer}>
      <div className={styles.dayNavigation}>
        <button className={styles.navButton} onClick={handlePrevDay}>
          Prev
        </button>
        <h2 className={styles.dayHeading}>{currentDay}</h2>
        <button className={styles.navButton} onClick={handleNextDay}>
        Next
        </button>
      </div>
      <div className={styles.dailyTimetable}>
        {weekData[currentDay].length > 0 ? (
          <DataTable
            columns={columns}
            data={weekData[currentDay]}
            heading={`${currentDay} Timetable`}
            loading={false}  
          />
        ) : (
          <p className={styles.noClassesText}>
            {currentDay === "Sunday" ? "Holiday" : "No classes available."}
          </p>
        )}
      </div>
    </div>
    </>
  );
};

export default Timetable;
