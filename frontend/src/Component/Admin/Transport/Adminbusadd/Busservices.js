import React, { useState } from 'react';
import styles from './Busservice.module.css'; // Import CSS module
import { FaBus, FaPlus, FaEdit, FaTrash, FaMapMarkerAlt, FaClock, FaSchool, FaUser, FaPhone } from 'react-icons/fa';
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill } from 'react-icons/bs';

function Busservices() {
  const [buses, setBuses] = useState([
    {
      id: 1,
      busNumber: 'XXXXXX',
      driver: 'Driver',
      driverContact: '8080808080',
      helper: 'Helper',
      helperContact: '0000000000',
      route: [
        { stop: 'Gavarapalem', time: '06:45 AM', type: 'stop' },
        { stop: 'Delhi', time: '12:01 PM', type: 'stop' },
        { stop: 'SCHOOL', time: '10:00 AM', type: 'destination' },
      ],
    },
  ]);

  const [selectedBusId, setSelectedBusId] = useState(null);
  const [showBusList, setShowBusList] = useState(false);

  const handleBusClick = (busId) => setSelectedBusId(busId);

  const handleAddBus = () => {
    const newBus = {
      id: buses.length + 1,
      busNumber: '',
      driver: '',
      driverContact: '',
      helper: '',
      helperContact: '',
      route: [],
    };
    setBuses([...buses, newBus]);
    setSelectedBusId(newBus.id);
  };

  const handleBusUpdate = (busId, updatedBus) => {
    setBuses(
      buses.map((bus) => (bus.id === busId ? updatedBus : bus))
    );
  };

  const handleDeleteBus = (busId) => {
    setBuses(buses.filter((bus) => bus.id !== busId));
    setSelectedBusId(null);
  };

  const handleRouteUpdate = (busId, route) => {
    const updatedBus = { ...buses.find((bus) => bus.id === busId), route };
    handleBusUpdate(busId, updatedBus);
  };

  const handleAddStop = (busId) => {
    const updatedBus = {
      ...buses.find((bus) => bus.id === busId),
      route: [...buses.find((bus) => bus.id === busId).route, { stop: '', time: '', type: 'stop' }],
    };
    handleBusUpdate(busId, updatedBus);
  };

  const handleDeleteStop = (busId, stopIndex) => {
    const updatedBus = {
      ...buses.find((bus) => bus.id === busId),
      route: [
        ...buses.find((bus) => bus.id === busId).route.slice(0, stopIndex),
        ...buses.find((bus) => bus.id === busId).route.slice(stopIndex + 1),
      ],
    };
    handleBusUpdate(busId, updatedBus);
  };

  const handleBusListToggle = () => setShowBusList(!showBusList);

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.appTitle}>Bus Service</h1>
      <div className={styles.appContent}>
        <div className={styles.busListContainer}>
          <div className={styles.busListHeader}>
            <FaBus className={styles.busListIcon} />
            <span className={styles.busListTitle}>Buses</span>
            <FaPlus className={styles.busListAddIcon} onClick={handleAddBus} />
          </div>
          <div className={styles.busListItems}>
            {buses.map((bus) => (
              <div
                key={bus.id}
                className={`${styles.busListItem} ${selectedBusId === bus.id ? styles.selected : ''}`}
                onClick={() => handleBusClick(bus.id)}
              >
                <span className={styles.busListItemLabel}>Bus {bus.id}</span>
              </div>
            ))}
          </div>
          <div className={styles.busListToggle}>
            {showBusList ? (
              <BsFillArrowUpCircleFill className={styles.busListToggleIcon} onClick={handleBusListToggle} />
            ) : (
              <BsFillArrowDownCircleFill className={styles.busListToggleIcon} onClick={handleBusListToggle} />
            )}
          </div>
        </div>
        {selectedBusId && (
          <div className={styles.busDetailsContainer}>
            <div className={styles.busDetails}>
              <div className={styles.busDetailsHeader}>
                <FaBus className={styles.busDetailsIcon} />
                <span className={styles.busDetailsTitle}>Bus {selectedBusId}</span>
              </div>
              <div className={styles.busDetailsInfo}>
                <div className={styles.busDetailsInfoItem}>
                  <label htmlFor="busNumber">Bus number:</label>
                  <input
                    type="text"
                    id="busNumber"
                    value={buses.find((bus) => bus.id === selectedBusId).busNumber}
                    onChange={(e) =>
                      handleBusUpdate(selectedBusId, { ...buses.find((bus) => bus.id === selectedBusId), busNumber: e.target.value })
                    }
                  />
                </div>
                <div className={styles.busDetailsInfoItem}>
                  <label htmlFor="driver">Driver:</label>
                  <div className={styles.busDetailsInfoItemInner}>
                    <input
                      type="text"
                      id="driver"
                      value={buses.find((bus) => bus.id === selectedBusId).driver}
                      onChange={(e) =>
                        handleBusUpdate(selectedBusId, { ...buses.find((bus) => bus.id === selectedBusId), driver: e.target.value })
                      }
                    />
                    <FaUser className={styles.busDetailsInfoIcon} />
                  </div>
                </div>
                <div className={styles.busDetailsInfoItem}>
                  <label htmlFor="driverContact">Contact:</label>
                  <div className={styles.busDetailsInfoItemInner}>
                    <input
                      type="text"
                      id="driverContact"
                      value={buses.find((bus) => bus.id === selectedBusId).driverContact}
                      onChange={(e) =>
                        handleBusUpdate(selectedBusId, { ...buses.find((bus) => bus.id === selectedBusId), driverContact: e.target.value })
                      }
                    />
                    <FaPhone className={styles.busDetailsInfoIcon} />
                  </div>
                </div>
                <div className={styles.busDetailsInfoItem}>
                  <label htmlFor="helper">Helper:</label>
                  <div className={styles.busDetailsInfoItemInner}>
                    <input
                      type="text"
                      id="helper"
                      value={buses.find((bus) => bus.id === selectedBusId).helper}
                      onChange={(e) =>
                        handleBusUpdate(selectedBusId, { ...buses.find((bus) => bus.id === selectedBusId), helper: e.target.value })
                      }
                    />
                    <FaUser className={styles.busDetailsInfoIcon} />
                  </div>
                </div>
                <div className={styles.busDetailsInfoItem}>
                  <label htmlFor="helperContact">Contact:</label>
                  <div className={styles.busDetailsInfoItemInner}>
                    <input
                      type="text"
                      id="helperContact"
                      value={buses.find((bus) => bus.id === selectedBusId).helperContact}
                      onChange={(e) =>
                        handleBusUpdate(selectedBusId, { ...buses.find((bus) => bus.id === selectedBusId), helperContact: e.target.value })
                      }
                    />
                    <FaPhone className={styles.busDetailsInfoIcon} />
                  </div>
                </div>
              </div>
              <div className={styles.busDetailsActions}>
                <FaEdit className={styles.busDetailsActionIcon} />
                <FaTrash className={styles.busDetailsActionIcon} onClick={() => handleDeleteBus(selectedBusId)} />
              </div>
            </div>
            <div className={styles.busRouteContainer}>
              <div className={styles.busRouteHeader}>
                <FaMapMarkerAlt className={styles.busRouteIcon} />
                <span className={styles.busRouteTitle}>Route</span>
                <FaPlus className={styles.busRouteAddIcon} onClick={() => handleAddStop(selectedBusId)} />
              </div>
              <div className={styles.busRouteItems}>
                {buses
                  .find((bus) => bus.id === selectedBusId)
                  .route.map((stop, index) => (
                    <div key={index} className={styles.busRouteItem}>
                      <input
                        type="text"
                        value={stop.stop}
                        onChange={(e) =>
                          handleRouteUpdate(selectedBusId, [
                            ...buses.find((bus) => bus.id === selectedBusId).route.slice(0, index),
                            { ...stop, stop: e.target.value },
                            ...buses.find((bus) => bus.id === selectedBusId).route.slice(index + 1),
                          ])
                        }
                      />
                      <input
                        type="text"
                        value={stop.time}
                        onChange={(e) =>
                          handleRouteUpdate(selectedBusId, [
                            ...buses.find((bus) => bus.id === selectedBusId).route.slice(0, index),
                            { ...stop, time: e.target.value },
                            ...buses.find((bus) => bus.id === selectedBusId).route.slice(index + 1),
                          ])
                        }
                      />
                      <FaClock className={styles.busRouteTimeIcon} />
                      <FaTrash className={styles.busRouteDeleteIcon} onClick={() => handleDeleteStop(selectedBusId, index)} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Busservices;
