import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./Attendence.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Attendence() {
    const [date, setDate] = useState(new Date());
    const [percentage, setPercentage] = useState(4.4); 

  
    const presentDaysList = [
        new Date(2024, 8, 1), 
        new Date(2024, 8, 5),
        new Date(2024, 8, 3),
    ];

    const absentDaysList = [
        new Date(2024, 8, 18), 
        new Date(2024, 8, 2),
    ];

    const totalDays = 68;
    const presentDays = presentDaysList.length;
    const absentDays = absentDaysList.length;
    const lateDays = 0;
    const halfDays = 0;

    const attendancePercentage = ((presentDays / totalDays) * 100).toFixed(2);

    const tileClassName = ({ date, view }) => {
        if (view === 'month') {
            if (presentDaysList.some(d => isSameDay(d, date))) {
                return 'present-day';
            } else if (absentDaysList.some(d => isSameDay(d, date))) {
                return 'absent-day';
            }
        }
        return null;
    };

    const isSameDay = (a, b) => {
        return a.getFullYear() === b.getFullYear() &&
            a.getMonth() === b.getMonth() &&
            a.getDate() === b.getDate();
    };

    return (
        <div className="attendance-container">
            
            <div className="summary-card shadow-sm">
                <div className="card-body">
                    <h5 className="summary-title">Attendance Summary</h5>  
                    <div className="row text-center">
                        <div className="col-sm-12 mb-3">
                             <div>    
                            
                            <div className="attendance-box bg-light p-3 rounded  atd">
                                <div  style={{ width: '100px', }}>
                            <CircularProgressbar value={percentage} text={`${percentage}%`} />
                            </div>
                             <h6>Overall Attendance</h6>
                             <p>{presentDays}/{totalDays} days</p>
                             <h4 className="highlight">{attendancePercentage}%</h4>
                            </div>
                            
                            </div>
                        </div>
                     
<div className="col-sm-3 mb-3">
    <div className="attendance-box bg-present p-3 rounded">
        <h6>Present</h6>
        <p>{presentDays} days</p>
        <p>{((presentDays / totalDays) * 100).toFixed(1)}%</p>
    </div>
</div>

                       
                        <div className="col-sm-3 mb-3">
                            <div className="attendance-box bg-absent p-3 rounded">
                                <h6>Absent</h6>
                                <p>{absentDays} days</p>
                                <p>{((absentDays / totalDays) * 100).toFixed(1)}%</p>
                            </div>
                        </div>
                        
                        <div className="col-sm-3 mb-3">
                            <div className="attendance-box bg-late p-3 rounded">
                                <h6>Late</h6>
                                <p>{lateDays} days</p>
                                <p>{((lateDays / totalDays) * 100).toFixed(1)}%</p>
                            </div>
                        </div>
                    
                        <div className="col-sm-3 mb-3">
                            <div className="attendance-box bg-halfday p-3 rounded">
                                <h6>Half Day</h6>
                                <p>{halfDays} days</p>
                                <p>{((halfDays / totalDays) * 100).toFixed(1)}%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          
            <div className="calendar-card shadow-sm">
                <div className="calendar-header text-white">
                    Monthly Attendance
                </div>
                <div className="calendar-body">
                    <Calendar
                        onChange={setDate}
                        value={date}
                        tileClassName={tileClassName}
                    />
                </div>
            </div>
        </div>
    );
}

export default Attendence;
