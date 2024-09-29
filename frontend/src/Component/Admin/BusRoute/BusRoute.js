import React, { useState } from 'react';
import styles from './BusRoute.module.css';

const BusRoute = () => {
  const [selectedBus, setSelectedBus] = useState('Bus 1');
  const [isEditing, setIsEditing] = useState(false);
  const [stops, setStops] = useState([
    { name: 'Stop 1', time: '06:50 AM', completed: true },
    { name: 'Stop 2', time: '07:00 AM', completed: false },
    { name: 'Stop 3', time: '07:10 AM', completed: false },
    { name: 'School', time: '08:00 AM', completed: false },
  ]);

  const handleBusChange = (e) => {
    setSelectedBus(e.target.value);
  };

  const handleStopChange = (index, field, value) => {
    const updatedStops = [...stops];
    updatedStops[index][field] = value;
    setStops(updatedStops);
  };

  const addStop = () => {
    setStops([...stops, { name: '', time: '', completed: false }]);
  };

  const deleteStop = (index) => {
    const updatedStops = stops.filter((_, i) => i !== index);
    setStops(updatedStops);
  };

  const toggleStopCompletion = (index) => {
    const updatedStops = [...stops];
    updatedStops[index].completed = !updatedStops[index].completed;
    setStops(updatedStops);
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const saveChanges = () => {
    setIsEditing(false);
  };

  return (
    <div className={styles.busRouteContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>Bus Route for {selectedBus}</h2>
        <select className={styles.dropdown} onChange={handleBusChange}>
          <option>Bus 1</option>
          <option>Bus 2</option>
          <option>Bus 3</option>
          <option>Bus 4</option>
        </select>
      </div>

      <div className={styles.timeline}>
        {stops.map((stop, index) => (
          <div key={index} className={styles.stopContainer}>
            <div
              className={`${styles.stopCircle} ${
                stop.completed ? styles.completed : styles.upcoming
              }`}
              onClick={() => toggleStopCompletion(index)}
            ></div>
            <div className={styles.stopInfo}>
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={stop.name}
                    className={styles.input}
                    placeholder="Stop Name"
                    onChange={(e) => handleStopChange(index, 'name', e.target.value)}
                  />
                  <input
                    type="time"
                    value={stop.time}
                    className={styles.input}
                    placeholder="Stop Time"
                    onChange={(e) => handleStopChange(index, 'time', e.target.value)}
                  />
                  <button className={styles.deleteButton} onClick={() => deleteStop(index)}>
                    Delete
                  </button>
                </>
              ) : (
                <>
                  <p className={styles.stopName}>{stop.name}</p>
                  <p className={styles.stopTime}>{stop.time}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.buttonGroup}>
        {isEditing && <button className={styles.addButton} onClick={addStop}>Add Stop</button>}
        {isEditing && <button className={styles.saveButton} onClick={saveChanges}>Save</button>}
        <button className={styles.viewButton} onClick={toggleEditMode}>
          {isEditing ? 'VIEW' : 'EDIT'}
        </button>
      </div>
    </div>
  );
};

export default BusRoute;
