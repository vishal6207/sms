import React, { useState } from 'react';
import styles from "./AddTeachers.module.css"; 
import CommonInputField from '../../../CommonFields/Input/CommonInputField';
import DataTable from '../../../CommonFields/DataTable/DataTable'; 
import TeacherLeave from '../TeacherLeave/TeacherLeave';

const columns = [
  { Header: 'Name', accessor: 'name' },
  { Header: 'Age', accessor: 'age' },
  { Header: 'Email', accessor: 'email' },
  { Header: 'Address', accessor: 'address' },
  { Header: 'Contact Number', accessor: 'contactNumber' },
  { Header: 'Gender', accessor: 'gender' },
  { Header: 'Actions', accessor: 'actions' }
];

function AddTeacher() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    address: '',
    contactNumber: '',
    gender: '',
  });
  const [selectedStudentIndex, setSelectedStudentIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLeave, setShowLeave] = useState(false); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedStudentIndex !== null) {
      const updatedStudents = students.map((student, index) =>
        index === selectedStudentIndex ? formData : student
      );
      setStudents(updatedStudents);
    } else {
      setStudents([...students, formData]);
    }
    resetForm();
    setIsModalOpen(false);
  };

  const handleEdit = (index) => {
    setFormData(students[index]);
    setSelectedStudentIndex(index);
    setIsModalOpen(true);
  };

  const handleRemove = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  const openStudentModal = () => {
    setShowLeave(false);
    resetForm();
    setSelectedStudentIndex(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLeave = () => {
    setShowLeave(prevShowLeave => !prevShowLeave); 
  };

  const resetForm = () => {
    setFormData({
      name: '',
      age: '',
      email: '',
      address: '',
      contactNumber: '',
      gender: '',
    });
  };

  const getTableData = () => {
    return students.map((student, index) => ({
      ...student,
      actions: (
        <div className={styles.btn}>
          <button onClick={() => handleEdit(index)} className={styles.editButton}>
            Edit
          </button>
          <button onClick={() => handleRemove(index)} className={styles.removeButton}>
            Remove
          </button>
        </div>
      ),
    }));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Manage Teacher</h1>
      
      <div className={styles.buttonContainer}>
        <button className={styles.addButton} onClick={openStudentModal}>
          <i className="fas fa-user-plus"></i> Add Teacher
        </button>

        <button className={styles.addButton} onClick={handleLeave}>
          <i className="fas fa-user-plus"></i> Teacher Leave
        </button>
      </div>

     
      {showLeave ? (
        <TeacherLeave />
      ) : (
        <>
          <div className={styles.studentList}>
            <h2>Teacher List</h2>
            <DataTable
              columns={columns}
              data={getTableData()}
              opendetail={() => {}}
              details={null}
              selectedrowShowButtonText="Delete"
              selectedrowFxn={(selectedRows) => console.log(selectedRows)}
              heading="Teacher"
              loading={false}
            />
          </div>

          {isModalOpen && (
            <div className={styles.modalOverlay}>
              <div className={styles.modalContent}>
                <span className={styles.closeButton} onClick={closeModal}>&times;</span>
                <h2>{selectedStudentIndex !== null ? 'Edit Teacher Details' : 'Add Teacher Details'}</h2>
                <form onSubmit={handleSubmit} className={styles.studentForm}>
                  <CommonInputField
                    field="input"
                    label="Name"
                    name="name"
                    value={formData.name}
                    placeholder="Enter Name"
                    onChange={handleInputChange}
                    required
                  />
                  <CommonInputField
                    field="input"
                    label="Age"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="Enter Age"
                    required
                  />
                  <CommonInputField
                    field="input"
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter Email"
                    required
                  />
                  <CommonInputField
                    field="textarea"
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                  <CommonInputField
                    field="input"
                    label="Contact Number"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    placeholder="Enter Contact Number"
                    required
                  />
                  <div className={styles.inputField}>
                    <label>Gender</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <button type="submit" className={styles.submitButton}>Submit</button>
                </form>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default AddTeacher;
