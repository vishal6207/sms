import React, { useState } from 'react';
import styles from './Master.module.css';
 import AddSection from './AddSection/AddSection';
import Roles from './Roles/Roles'
import House from './Housecolor/House'
const Master = () => {
    const [activeTab, setActiveTab] = useState('class');
    const [students, setStudents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [showAddStudentForm, setShowAddStudentForm] = useState(false); // State for showing AddStudent form

    const [showPopup, setShowPopup] = useState(false);

    const PopupHandle = () => {
        setShowPopup(true);
    }

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setShowAddStudentForm(false); // Reset AddStudent form visibility when switching tabs
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleEdit = (id) => {
        // Handle edit functionality here
        console.log('Edit student with ID:', id);
    };

    const handleDelete = (id) => {
        // Handle delete functionality here
        console.log('Delete student with ID:', id);
    };

    const handleAddStudentClick = () => {
        setShowAddStudentForm(true); // Show AddStudent component when button is clicked
    };

    // Sample Student Data (Replace with actual data)
    const sampleStudents = [
        { id: 'S1726043026', name: 'Hello whatsapp', class: '12 (Commerce)', section: 'A' },
        // Add more students...
    ];

    // Filter students based on search term
    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Calculate pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentStudents = filteredStudents.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className={styles.adminContainer}>
            <h2 className={styles.header}>Students</h2>
            <div className={styles.tabs}>
                <button
                    className={`${styles.tabButton} ${activeTab === 'class' ? styles.activeTab : ''}`}
                    onClick={() => handleTabClick('class')}
                >
                    class
                </button>
                <button
                    className={`${styles.tabButton} ${activeTab === 'section' ? styles.activeTab : ''}`}
                    onClick={() => handleTabClick('section')}
                >
                    section
                </button>
                <button
                    className={`${styles.tabButton} ${activeTab === 'role' ? styles.activeTab : ''}`}
                    onClick={() => handleTabClick('role')}
                >
                    Role
                </button>
                <button
                    className={`${styles.tabButton} ${activeTab === 'house' ? styles.activeTab : ''}`}
                    onClick={() => handleTabClick('house')}
                >
                    House
                </button>
            </div>
            <div className={styles.adminContent}>

                {activeTab === 'class' && (
                    <div>
                        Hlo world
                    </div>
                )}

                {activeTab === 'section' && (
                    <div>
                     <AddSection/>
                    </div>
                )}

                {activeTab === 'role' && (
                    <div>
                        <Roles/>
                    </div>
                )}
                {activeTab === 'house' && (
                    <div>
                        <House/>
                    </div>
                )}
            </div>
        </div>

    );
};

export default Master;
 