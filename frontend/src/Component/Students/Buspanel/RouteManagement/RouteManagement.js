import React from 'react';
import './RouteManagement.css';

const RouteManagement = () => {
    const routes = [
        { id: 1, routeName: 'Route A', stops: ['Stop 1', 'Stop 2', 'Stop 3'] },
        { id: 2, routeName: 'Route B', stops: ['Stop 4', 'Stop 5', 'Stop 6'] },
        // Add more routes as needed
    ];

    return (
        <div>
            <h2>Route Management</h2>
            <table className="route-table">
                <thead>
                    <tr>
                        <th>Route Name</th>
                        <th>Stops</th>
                    </tr>
                </thead>
                <tbody>
                    {routes.map(route => (
                        <tr key={route.id}>
                            <td>{route.routeName}</td>
                            <td>{route.stops.join(', ')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RouteManagement;
