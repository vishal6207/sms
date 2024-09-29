import React from 'react';
import './ScheduleManagement.css';

const ScheduleManagement = () => {
    const schedules = [
        { id: 1, busNumber: '1234', route: 'Route A', time: '7:00 AM' },
        { id: 2, busNumber: '5678', route: 'Route B', time: '7:30 AM' },
        // Add more schedules as needed
    ];

    return (
        <div>
            <h2>Schedule Management</h2>
            <table className="schedule-table">
                <thead>
                    <tr>
                        <th>Bus Number</th>
                        <th>Route</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {schedules.map(schedule => (
                        <tr key={schedule.id}>
                            <td>{schedule.busNumber}</td>
                            <td>{schedule.route}</td>
                            <td>{schedule.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ScheduleManagement;
