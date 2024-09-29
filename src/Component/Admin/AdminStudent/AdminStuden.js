import React, { useState } from 'react';
import styles from './AdminStudent.module.css';
import { FaUserPlus, FaUserMinus, FaEdit, FaTrash } from 'react-icons/fa';
import AddStudentFeedback from '../AddStudent/AddStudentFeedback/AddStudentFeedback';
import AddStudent from '../AddStudent/AddStudent';
import CommonInputField from '../../../CommonFields/Input/CommonInputField';
import ShowStudents from '../AddStudent/ShowStudents/ShowStudents'

const AdminStudent = () => {
    const [activeTab, setActiveTab] = useState('add');
    const [students, setStudents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [showAddStudentForm, setShowAddStudentForm] = useState(false); 
    const [showDeletePopup, setShowDeletePopup] = useState(false); // State for delete popup
    const [studentIdToDelete, setStudentIdToDelete] = useState(''); // State to hold entered student ID

    const [showPopup,setShowPopup] = useState(false);

    const PopupHandle = ()=>{
        setShowPopup(true);
    }

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setShowAddStudentForm(false); 
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleEdit = (id) => {
        console.log('Edit student with ID:', id);
    };

    const handleDelete = (id) => {
        console.log('Delete student with ID:', id);
        setStudents((prevStudents) => prevStudents.filter(student => student.id !== id));
    };

    const handleAddStudentClick = () => {
        setShowAddStudentForm(true); 
    };

    const handleRemoveStudentClick = () => {
        setShowDeletePopup(true); // Show the delete popup when "Remove Student" is clicked
    };

    const handleConfirmDelete = () => {
        handleDelete(studentIdToDelete); // Call the delete function with the entered student ID
        setShowDeletePopup(false); // Close the popup
    };

    const handleClosePopup = () => {
        setShowDeletePopup(false); // Close the popup without deleting
    };

    // Sample Student Data (Replace with actual data)
    const sampleStudents = [
        { id: 'S1726043026', name: 'Hello whatsapp', class: '12 (Commerce)', section: 'A' },
        // Add more students...
    ];

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentStudents = filteredStudents.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className={styles.adminContainer}>
            <h2 className={styles.header}>Students</h2>
            <div className={styles.tabs}>
                <button 
                    className={`${styles.tabButton} ${activeTab === 'add' ? styles.activeTab : ''}`} 
                    onClick={() => handleTabClick('add')}
                >
                    Add Student
                </button>
                <button 
                    className={`${styles.tabButton} ${activeTab === 'show' ? styles.activeTab : ''}`} 
                    onClick={() => handleTabClick('show')}
                >
                    Show Students
                </button>
                <button 
                    className={`${styles.tabButton} ${activeTab === 'feedback' ? styles.activeTab : ''}`} 
                    onClick={() => handleTabClick('feedback')}
                >
                    Feedback
                </button>
            </div>
            <div className={styles.adminContent}>
                {activeTab === 'add' && (
                    <div className={styles.addStudentForm}>
                        {!showAddStudentForm && (
                            
                            <div className={styles.actions}>
                                
                                <button className={styles.actionButton} onClick={handleAddStudentClick}>
                                    <FaUserPlus className={styles.icon} />
                                    <span>Add Student</span>
                                </button>
                                <button className={styles.actionButton} onClick={handleRemoveStudentClick}>
                                    <FaUserMinus className={styles.icon} />
                                    <span>Remove Student</span>
                                </button>
                            </div>
                        )}
                        {showAddStudentForm && (
                            <div className={styles.addStudentFormContainer}>
                                <AddStudent />
                            </div>
                        )}
                    </div>
                )}
                {activeTab === 'show' && (
                     <ShowStudents />
                )}
                {activeTab === 'feedback' && (
                    <AddStudentFeedback />
                )}

                {/* Delete Student Popup */}
                {showDeletePopup && (
                    <div className={styles.popup}>
                        <div className={styles.popupContent}>
                            <h3>Delete Student</h3>
                            <p>Enter the Student ID to delete:</p>
                            <CommonInputField
                                type="text"
                                field="input"
                                className={styles.popupInput}
                                value={studentIdToDelete}
                                onChange={(e) => setStudentIdToDelete(e.target.value)}
                                placeholder="Student ID"
                            />
                            <div className={styles.popupActions}>
                                <button className={styles.popupButton} onClick={handleConfirmDelete}>Delete</button>
                                <button className={styles.popupButton} onClick={handleClosePopup}>Cancel</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            
              
        </div>
    );
};

export default AdminStudent;
