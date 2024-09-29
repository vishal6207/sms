import React, { useState } from 'react';
import styles from "./AddStudent.module.css";
import CommonInputField from '../../../CommonFields/Input/CommonInputField';
import DataTable from '../../../CommonFields/DataTable/DataTable';

function AddStudent() {
  const [formData, setFormData] = useState({
    id: '', name: '', address: '', city: '', nationality: '', phone: '',
    email: '', previous_attended: '', previous_address: '', previous_purpose: '',
    class_study: '', teacher_certificate: '', dob_certificate: '', physically_handicap: '',
    class_id: '', section_id: '', parent: '', roll_no: '', transport: '',
    dormitory: '', house: '', dormitory_room_no: '', more_entries: '', login_status: '',
    user: '', school: '', branch: '', grade: ''
  });

  const [showForm, setShowForm] = useState(false); // Popup state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowForm(true); 
  };

  return (
    <div className={styles.container}>
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h1 className={styles.title}>Add Student Details</h1>
            <form onSubmit={handleSubmit} className={styles.studentForm}>

              {/* Student Details Section */}
              <div className={styles.studentData}>
                <section className={styles.formSection}>
                  <h3>Student Details</h3>
                  <CommonInputField field="input" label="Student ID" name="id" value={formData.id} placeholder="Enter ID" onChange={handleInputChange} required />
                  <CommonInputField field="input" label="Full Name" name="name" value={formData.name} placeholder="Enter Full Name" onChange={handleInputChange} required />
                  <CommonInputField field="input" label="Address" name="address" value={formData.address} placeholder="Enter Address" onChange={handleInputChange} required />
                  <CommonInputField field="input" label="City" name="city" value={formData.city} placeholder="Enter City" onChange={handleInputChange} required />
                  <CommonInputField field="input" label="Nationality" name="nationality" value={formData.nationality} placeholder="Enter Nationality" onChange={handleInputChange} required />
                  <CommonInputField field="input" label="Phone Number" name="phone" value={formData.phone} placeholder="Enter Phone Number" onChange={handleInputChange} required />
                  <CommonInputField field="input" label="Email" name="email" value={formData.email} placeholder="Enter Email Address" onChange={handleInputChange} required />
                  <CommonInputField field="input" label="Class/Grade" name="class_study" value={formData.class_study} placeholder="Enter Class" onChange={handleInputChange} required />
                  <CommonInputField field="input" label="Date of Birth Certificate" name="dob_certificate" value={formData.dob_certificate} placeholder="Enter Date of Birth Certificate" onChange={handleInputChange} required />
                </section>

                <section className={styles.formSection}>
                  <h3>Previous Education Details</h3>
                  <CommonInputField field="input" label="Previous School Attended" name="previous_attended" value={formData.previous_attended} placeholder="Enter Previous School" onChange={handleInputChange} required />
                  <CommonInputField field="input" label="Previous School Address" name="previous_address" value={formData.previous_address} placeholder="Enter Previous Address" onChange={handleInputChange} required />
                  <CommonInputField field="input" label="Purpose of Leaving" name="previous_purpose" value={formData.previous_purpose} placeholder="Enter Purpose of Leaving" onChange={handleInputChange} required />
                </section>

                {/* Parent/Guardian Details Section */}
                <section className={styles.formSection}>
                  <h3>Parent/Guardian Details</h3>
                  <CommonInputField field="input" label="Parent/Guardian Name" name="parent" value={formData.parent} placeholder="Enter Parent Name" onChange={handleInputChange} required />
                  <CommonInputField field="input" label="Roll Number" name="roll_no" value={formData.roll_no} placeholder="Enter Roll Number" onChange={handleInputChange} required />
                  <CommonInputField field="input" label="Transport Required?" name="transport" value={formData.transport} placeholder="Yes/No" onChange={handleInputChange} required />
                </section>

                {/* Additional Information Section */}
                <section className={styles.formSection}>
                  <h3>Additional Information (Optional)</h3>
                  <CommonInputField field="input" label="Teacher Certificate" name="teacher_certificate" value={formData.teacher_certificate} placeholder="Enter Teacher Certificate (Optional)" onChange={handleInputChange} />
                  <CommonInputField field="input" label="Physically Handicapped?" name="physically_handicap" value={formData.physically_handicap} placeholder="Yes/No" onChange={handleInputChange} />
                  <CommonInputField field="input" label="Class ID" name="class_id" value={formData.class_id} placeholder="Enter Class ID (Optional)" onChange={handleInputChange} />
                  <CommonInputField field="input" label="Section ID" name="section_id" value={formData.section_id} placeholder="Enter Section ID (Optional)" onChange={handleInputChange} />
                  <CommonInputField field="input" label="Dormitory Required?" name="dormitory" value={formData.dormitory} placeholder="Yes/No" onChange={handleInputChange} />
                  <CommonInputField field="input" label="House" name="house" value={formData.house} placeholder="Enter House (Optional)" onChange={handleInputChange} />
                  <CommonInputField field="input" label="Dormitory Room Number" name="dormitory_room_no" value={formData.dormitory_room_no} placeholder="Enter Dormitory Room Number (Optional)" onChange={handleInputChange} />
                  <CommonInputField field="input" label="Any Additional Information" name="more_entries" value={formData.more_entries} placeholder="Enter Additional Information (Optional)" onChange={handleInputChange} />
                </section>
              </div>
            </form>
          </div>
        </div>
      
     
    </div>
    
  );
}

export default AddStudent;
