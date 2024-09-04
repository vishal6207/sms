import React, { useState, useEffect } from 'react';
import styles from './CreateRoot.module.css';

const CreateRoot = () => {
    const [routeName, setRouteName] = useState('');
    const [filteredRoutes, setFilteredRoutes] = useState([]);
    const [routes, setRoutes] = useState([
        { id: 30, desc: 'Route-I' },
        { id: 28, desc: 'Route-II' },
        { id: 15, desc: 'Route-III' },
        { id: 68, desc: 'Route-IV' },
        { id: 2, desc: 'Route-V' }
    ]);
    const [newRouteDesc, setNewRouteDesc] = useState('');
    const [selectedRoute, setSelectedRoute] = useState(null);

    useEffect(() => {
        setFilteredRoutes(routes);
    }, [routes]);

    const generateUniqueId = () => {
        const maxId = routes.reduce((max, route) => Math.max(max, route.id), 0);
        return maxId + 1;
    };

    const handleSearch = () => {
        const filtered = routes.filter(route =>
            route.desc.toLowerCase().includes(routeName.toLowerCase()) ||
            route.id.toString().includes(routeName)
        );
        setFilteredRoutes(filtered);
    };

    const handleChange = (e) => {
        setRouteName(e.target.value);
        handleSearch();
    };

    const handleNewRouteChange = (e) => {
        setNewRouteDesc(e.target.value);
    };

    const handleCreate = () => {
        if (newRouteDesc.trim()) {
            const newId = generateUniqueId();
            const newRoute = { id: newId, desc: newRouteDesc };
            setRoutes([...routes, newRoute]);
            setNewRouteDesc('');
            setRouteName('');
            handleSearch();
        }
    };

    const handleEdit = () => {
        if (selectedRoute && newRouteDesc.trim()) {
            const updatedRoutes = routes.map(route =>
                route.id === selectedRoute.id ? { ...route, desc: newRouteDesc } : route
            );
            setRoutes(updatedRoutes);
            setSelectedRoute(null);
            setNewRouteDesc('');
            handleSearch();
        }
    };

    const handleDelete = (id) => {
        const updatedRoutes = routes.filter(route => route.id !== id);
        setRoutes(updatedRoutes);
        setSelectedRoute(null);
        handleSearch();
    };

    return (

        <div className={styles.mainconatainerroute}>

            <div className={styles.cardHeader}>
                <h2 className={styles.createRootHeader}>CREATE ROUTE</h2>
            </div>
            <div className={styles.createRootContainer}>

                <div className={styles.cardBody}>
                    <label className={styles.createRootLabel} htmlFor="routeName">Search Route:</label>
                    <input
                        className={styles.createRootInput}
                        type="text"
                        id="routeName"
                        name="routeName"
                        value={routeName}
                        onChange={handleChange}
                    />

                    <table className={styles.createRootTable}>
                        <thead>
                            <tr>
                                <th>RT_ID</th>
                                <th>RT_DESC</th>
                                <th className={styles.actionsHeader}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRoutes.length > 0 ? (
                                filteredRoutes.map(route => (
                                    <tr key={route.id}>
                                        <td>{route.id}</td>
                                        <td>{route.desc}</td>
                                        <td className={styles.actionsCell}>
                                            <button
                                                className={styles.editButton}
                                                onClick={() => {
                                                    setSelectedRoute(route);
                                                    setNewRouteDesc(route.desc);
                                                }}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className={styles.deleteButton}
                                                onClick={() => handleDelete(route.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3">No Routes Found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className={styles.cardFooter}>
                    <label className={styles.createRootLabel} htmlFor="newRouteDesc"> Create New Route:</label>
                    <input
                        className={styles.createRootInput}
                        type="text"
                        id="newRouteDesc"
                        name="newRouteDesc"
                        value={newRouteDesc}
                        onChange={handleNewRouteChange}
                    />

                </div>
                {selectedRoute ? (
                    <button className={styles.updateButton} onClick={handleEdit}>Update</button>
                ) : (
                    <button className={styles.createButton} onClick={handleCreate}>Create</button>
                )}
            </div>
        </div>
    );
};

export default CreateRoot;
