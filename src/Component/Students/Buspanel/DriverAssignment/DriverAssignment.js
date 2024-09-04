import React from 'react';
import './DriverAssignment.css';

const DriverAssignment = () => {
    const drivers = [
        { id: 1, name: 'John Doe', busNumber: '1234', route: 'Route A' },
        { id: 2, name: 'Jane Smith', busNumber: '5678', route: 'Route B' },
        // Add more drivers as needed
    ];

    return (
        <div>
            <h2>Driver Assignment</h2>
            <table className="driver-table">
                <thead>
                    <tr>
                        <th>Driver Name</th>
                        <th>Bus Number</th>
                        <th>Route</th>
                    </tr>
                </thead>
                <tbody>
                    {drivers.map(driver => (
                        <tr key={driver.id}>
                            <td>{driver.name}</td>
                            <td>{driver.busNumber}</td>
                            <td>{driver.route}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DriverAssignment;
