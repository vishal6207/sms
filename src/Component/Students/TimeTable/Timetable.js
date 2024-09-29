import React, { useState } from 'react';
import styles from './Timetable.module.css'; // Import your styles

const Timetable = () => {
  const [currentDayIndex, setCurrentDayIndex] = useState(0); // Start with Monday (index 0)
  const [isEditing, setIsEditing] = useState(false);
  
  // Timetable data for each day
  const [weekData, setWeekData] = useState({
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
      { id: 2, start: "08:00", end: "09:00", subject: "Science" },
      { id: 3, start: "09:00", end: "10:00", subject: "English" },
      { id: 4, start: "10:00", end: "11:00", subject: "History" },
      { id: 5, start: "11:00", end: "12:00", subject: "Geography" },
    ],
    Wednesday: [
      { id: 1, start: "07:00", end: "08:00", subject: "Math" },
      { id: 2, start: "08:00", end: "09:00", subject: "Science" },
      { id: 3, start: "09:00", end: "10:00", subject: "English" },
    ],
    Thursday: [
      { id: 1, start: "07:00", end: "08:00", subject: "Math" },
      { id: 2, start: "08:00", end: "09:00", subject: "Science" },
    ],
    Friday: [
      { id: 1, start: "07:00", end: "08:00", subject: "Math" },
    ],
    Saturday: [],
    Sunday: [] // Sunday will show as a Holiday
  });

  const daysOfWeek = Object.keys(weekData); // ["Monday", "Tuesday", "Wednesday", ...]
  const currentDay = daysOfWeek[currentDayIndex];

  // Handle next day button click
  const handleNextDay = () => {
    setCurrentDayIndex((prevIndex) => (prevIndex + 1) % daysOfWeek.length); // Loop to next day
  };

  // Handle previous day button click
  const handlePrevDay = () => {
    setCurrentDayIndex((prevIndex) => (prevIndex - 1 + daysOfWeek.length) % daysOfWeek.length); // Loop to previous day
  };

  // Handle Edit click (toggles between edit and save mode)
  const handleEditClick = () => {
    setIsEditing((prev) => !prev);
  };

  // Handle content changes in the table
  const handleCellChange = (day, rowId, field, value) => {
    setWeekData((prevWeekData) => {
      const updatedDayData = prevWeekData[day].map((row) =>
        row.id === rowId ? { ...row, [field]: value } : row
      );
      return { ...prevWeekData, [day]: updatedDayData };
    });
  };

  return (
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
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Subject</th>
              </tr>
            </thead>
            <tbody>
              {weekData[currentDay].map((row) => (
                <tr key={row.id}>
                  <td
                    contentEditable={isEditing}
                    suppressContentEditableWarning={true}
                    onBlur={(e) =>
                      handleCellChange(currentDay, row.id, "start", e.target.innerText)
                    }
                  >
                    {row.start}
                  </td>
                  <td
                    contentEditable={isEditing}
                    suppressContentEditableWarning={true}
                    onBlur={(e) =>
                      handleCellChange(currentDay, row.id, "end", e.target.innerText)
                    }
                  >
                    {row.end}
                  </td>
                  <td
                    contentEditable={isEditing}
                    suppressContentEditableWarning={true}
                    onBlur={(e) =>
                      handleCellChange(currentDay, row.id, "subject", e.target.innerText)
                    }
                  >
                    {row.subject}
                  </td>
                </tr>
              ))}
            </tbody>
            <button className={styles.editButton} onClick={handleEditClick}>
                {isEditing ? "Save" : "Edit"}
            </button>
          </table>
        ) : (
          <p className={styles.noClassesText}>
            {currentDay === "Sunday" ? "Holiday" : "No classes available for today."}
          </p>
        )}
      </div>
    </div>
  );
};

export default Timetable;
