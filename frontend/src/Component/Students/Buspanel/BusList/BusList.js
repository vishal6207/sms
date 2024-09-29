import React from 'react';
import './BusList.css';

const BusList = () => {
    const busData = [
        { id: 1, busNumber: '1234', driverName: 'John Doe', route: 'Route A', capacity: 50 },
        { id: 2, busNumber: '5678', driverName: 'Jane Smith', route: 'Route B', capacity: 40 },
        // Add more buses as needed
    ];

    return (
        <div>
            <h2>Bus List</h2>
            <table className="bus-table">
                <thead>
                    <tr>
                        <th>Bus Number</th>
                        <th>Driver Name</th>
                        <th>Route</th>
                        <th>Capacity</th>
                    </tr>
                </thead>
                <tbody>
                    {busData.map(bus => (
                        <tr key={bus.id}>
                            <td>{bus.busNumber}</td>
                            <td>{bus.driverName}</td>
                            <td>{bus.route}</td>
                            <td>{bus.capacity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BusList;
