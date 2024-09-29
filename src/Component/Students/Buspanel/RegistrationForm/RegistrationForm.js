import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./RegistrationForm.css"; // Import the CSS file

const RegistrationForm = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    class: "",
    section: "",
    rollNo: "",
    gender: "",
    birthday: new Date(),
    fatherName: "",
    motherName: "",
    contactNo: "",
    fatherOccupation: "",
    motherOccupation: "",
    address: "",
    pickUpLocation: "",
    dropOffLocation: "",
    studentId: "",
    password: "",
    confirmPassword: "",
    awareOfBusRouting: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, birthday: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission here
    console.log(formData);
  };

  const handleBack = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className="registrationform-container">
      <form onSubmit={handleSubmit} className="registrationform-form">
        <h2 className="registrationform-heading">Registration FORM</h2>
        <p className="registrationform-description">New Member Kindly Fill Up Details Carefully! Each Field is Compulsory To Be Filled!</p>

        <div className="registrationform-containerr">
          <div className="registrationform-student-info">
            <h4 className="registrationform-subheading">STUDENT INFORMATION</h4>
            <label className="registrationform-label">
              First Name:
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="registrationform-input"
              />
            </label>
            <label className="registrationform-label">
              Last Name:
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="registrationform-input"
              />
            </label>
            <label className="registrationform-label">
              Class:
              <input
                type="text"
                name="class"
                value={formData.class}
                onChange={handleChange}
                required
                className="registrationform-input"
              />
            </label>
            <label className="registrationform-label">
              Section:
              <input
                type="text"
                name="section"
                value={formData.section}
                onChange={handleChange}
                required
                className="registrationform-input"
              />
            </label>
            <label className="registrationform-label">
              Roll No.:
              <input
                type="text"
                name="rollNo"
                value={formData.rollNo}
                onChange={handleChange}
                required
                className="registrationform-input"
              />
            </label>
            <label className="registrationform-label">
              Gender:
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="registrationform-select"
              >
                <option value="" disabled>
                  I AM ...
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label className="registrationform-label">
              Birthday:
              <DatePicker
                selected={formData.birthday}
                onChange={handleDateChange}
                dateFormat="MMMM d, yyyy"
                required
                className="registrationform-datepicker-input"
              />
            </label>
            <label className="registrationform-label">
              Student ID:
              <input
                type="text"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                maxLength={6}
                required
                className="registrationform-input"
              />
            </label>
            <label className="registrationform-label">
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                maxLength={8}
                required
                className="registrationform-input"
              />
            </label>
            <label className="registrationform-label">
              Confirm Password:
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                maxLength={8}
                required
                className="registrationform-input"
              />
            </label>
            <label className="registrationform-label">
              <input
                type="checkbox"
                name="awareOfBusRouting"
                checked={formData.awareOfBusRouting}
                onChange={handleChange}
                className="registrationform-checkbox"
              />
              I am aware of the functionality of school bus routing.
            </label>
          </div>

          <div className="registrationform-guardian-info">
            <h4 className="registrationform-subheading">GUARDIAN'S INFORMATION</h4>
            <label className="registrationform-label">
              Father's Name:
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                required
                className="registrationform-input"
              />
            </label>
            <label className="registrationform-label">
              Mother's Name:
              <input
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                required
                className="registrationform-input"
              />
            </label>
            <label className="registrationform-label">
              Contact No.:
              <input
                type="text"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                required
                className="registrationform-input"
              />
            </label>
            <label className="registrationform-label">
              Father's Occupation:
              <input
                type="text"
                name="fatherOccupation"
                value={formData.fatherOccupation}
                onChange={handleChange}
                className="registrationform-input"
              />
            </label>
            <label className="registrationform-label">
              Mother's Occupation:
              <input
                type="text"
                name="motherOccupation"
                value={formData.motherOccupation}
                onChange={handleChange}
                className="registrationform-input"
              />
            </label>
            <label className="registrationform-label">
              Address:
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="registrationform-textarea"
              />
            </label>
            <label className="registrationform-label">
              Pick-Up Location:
              <input
                type="text"
                name="pickUpLocation"
                value={formData.pickUpLocation}
                onChange={handleChange}
                required
                className="registrationform-input"
              />
            </label>
            <label className="registrationform-label">
              Drop-Off Location:
              <input
                type="text"
                name="dropOffLocation"
                value={formData.dropOffLocation}
                onChange={handleChange}
                required
                className="registrationform-input"
              />
            </label>
          </div>
        </div>

        <div className="registrationform-buttons">
          <button type="submit" className="registrationform-submit-button">Register</button>
          <button type="button" onClick={handleBack} className="registrationform-back-button">
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
