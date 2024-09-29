import React, { useState } from 'react';
import styles from './BusStop.module.css';

const BusStop = () => {
    const [formData, setFormData] = useState({
        route: '',
        stopName: '',
        km: '',
        fare: '',
        onwardArrival: '',
        returnArrival: '',
        onwardDeparture: '',
        returnDeparture: ''
    });

    const [tableData, setTableData] = useState([
        {
            stopId: '26',
            stopDesc: 'AKASH NAGAR',
            routeDesc: 'Route-II',
            stopKm: '0',
            stopFare: '900',
            inTime: '00:00:00',
            outTime: '00:00:00'
        },
        {
            stopId: '27',
            stopDesc: 'ROHIT PANCHAL',
            routeDesc: 'Route-II',
            stopKm: '0',
            stopFare: '800',
            inTime: '00:00:00',
            outTime: '00:00:00'
        }
    ]);

    const [editIndex, setEditIndex] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCreateOrUpdate = () => {
        if (editIndex !== null) {
            // If we are editing, update the existing entry
            const updatedTableData = tableData.map((row, index) =>
                index === editIndex ? {
                    ...row,
                    stopDesc: formData.stopName,
                    routeDesc: formData.route,
                    stopKm: formData.km,
                    stopFare: formData.fare,
                    inTime: formData.onwardArrival,
                    outTime: formData.onwardDeparture
                } : row
            );
            setTableData(updatedTableData);
            setEditIndex(null);
        } else {
            // If we are creating a new entry
            const newEntry = {
                stopId: (tableData.length + 1).toString(),
                stopDesc: formData.stopName,
                routeDesc: formData.route,
                stopKm: formData.km,
                stopFare: formData.fare,
                inTime: formData.onwardArrival,
                outTime: formData.onwardDeparture
            };
            setTableData([...tableData, newEntry]);
        }
        // Reset form
        setFormData({
            route: '',
            stopName: '',
            km: '',
            fare: '',
            onwardArrival: '',
            returnArrival: '',
            onwardDeparture: '',
            returnDeparture: ''
        });
    };

    const handleEdit = (index) => {
        const selectedRow = tableData[index];
        setFormData({
            route: selectedRow.routeDesc,
            stopName: selectedRow.stopDesc,
            km: selectedRow.stopKm,
            fare: selectedRow.stopFare,
            onwardArrival: selectedRow.inTime,
            returnArrival: '',
            onwardDeparture: selectedRow.outTime,
            returnDeparture: ''
        });
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        const updatedTableData = tableData.filter((_, i) => i !== index);
        setTableData(updatedTableData);
    };

    return (
        <div className={styles.maincontainerbusstop}>
            <div className={styles.busStopHeader}>
                <h2 className={styles.busStopTitle}>Bus Stop</h2>
            </div>
            <div className={styles.busStopContainer}>
                <form className={styles.busStopForm}>
                    <div className={styles.busStopFormGroup}>
                        <label className={styles.busStopLabel}>Route:</label>
                        <select
                            name="route"
                            value={formData.route}
                            onChange={handleChange}
                            className={styles.busStopSelect}
                        >
                            <option value="">Select</option>
                            <option value="Route-I">Route-I</option>
                            <option value="Route-II">Route-II</option>
                        </select>
                    </div>
                    
                    <div className={styles.busStopFormGroup}>
                        <label className={styles.busStopLabel}>Stop Name:</label>
                        <input
                            type="text"
                            name="stopName"
                            value={formData.stopName}
                            onChange={handleChange}
                            className={styles.busStopInput}
                        />
                    </div>

                    <div className={styles.busStopFormGroup}>
                        <label className={styles.busStopLabel}>KM:</label>
                        <input
                            type="text"
                            name="km"
                            value={formData.km}
                            onChange={handleChange}
                            className={styles.busStopInput}
                        />
                    </div>

                    <div className={styles.busStopFormGroup}>
                        <label className={styles.busStopLabel}>Fare:</label>
                        <input
                            type="text"
                            name="fare"
                            value={formData.fare}
                            onChange={handleChange}
                            className={styles.busStopInput}
                        />
                    </div>

                    <div className={styles.busStopFormGroup}>
                        <label className={styles.busStopLabel}>Onward Arrival Time:</label>
                        <input
                            type="time"
                            name="onwardArrival"
                            value={formData.onwardArrival}
                            onChange={handleChange}
                            className={styles.busStopTimeInput}
                        />
                    </div>

                    <div className={styles.busStopFormGroup}>
                        <label className={styles.busStopLabel}>Return Arrival Time:</label>
                        <input
                            type="time"
                            name="returnArrival"
                            value={formData.returnArrival}
                            onChange={handleChange}
                            className={styles.busStopTimeInput}
                        />
                    </div>

                    <div className={styles.busStopFormGroup}>
                        <label className={styles.busStopLabel}>Onward Departure Time:</label>
                        <input
                            type="time"
                            name="onwardDeparture"
                            value={formData.onwardDeparture}
                            onChange={handleChange}
                            className={styles.busStopTimeInput}
                        />
                    </div>

                    <div className={styles.busStopFormGroup}>
                        <label className={styles.busStopLabel}>Return Departure Time:</label>
                        <input
                            type="time"
                            name="returnDeparture"
                            value={formData.returnDeparture}
                            onChange={handleChange}
                            className={styles.busStopTimeInput}
                        />
                    </div>
                </form>

                <table className={styles.busStopTable}>
                    <thead>
                        <tr>
                            <th className={styles.busStopTableHeader}>STOP_ID</th>
                            <th className={styles.busStopTableHeader}>STOP_DESC</th>
                            <th className={styles.busStopTableHeader}>RT_DESC</th>
                            <th className={styles.busStopTableHeader}>STOP_KM</th>
                            <th className={styles.busStopTableHeader}>STOP_FARE</th>
                            <th className={styles.busStopTableHeader}>INTIME</th>
                            <th className={styles.busStopTableHeader}>Outtime</th>
                            <th className={styles.busStopTableHeader}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index} className={styles.busStopTableRow}>
                                <td className={styles.busStopTableData}>{row.stopId}</td>
                                <td className={styles.busStopTableData}>{row.stopDesc}</td>
                                <td className={styles.busStopTableData}>{row.routeDesc}</td>
                                <td className={styles.busStopTableData}>{row.stopKm}</td>
                                <td className={styles.busStopTableData}>{row.stopFare}</td>
                                <td className={styles.busStopTableData}>{row.inTime}</td>
                                <td className={styles.busStopTableData}>{row.outTime}</td>
                                <td className={styles.busStopTableData}>
                                    <button onClick={() => handleEdit(index)} className={styles.busStopEditButton}>Edit</button>
                                    <button onClick={() => handleDelete(index)} className={styles.busStopDeleteButton}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className={styles.busStopButtonGroup}>
                    <button onClick={handleCreateOrUpdate} className={styles.busStopCreateButton}>
                        {editIndex !== null ? 'Update' : 'Create'}
                    </button>
                    <button className={styles.busStopPrintButton}>Print</button>
                </div>
            </div>
        </div>
    );
};

export default BusStop;
