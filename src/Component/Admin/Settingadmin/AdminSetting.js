import React, { useState, useRef } from 'react';
import { FaUpload } from 'react-icons/fa'; // Import the upload icon
import styles from './Setting.module.css';
import profileImage from '../../../adminimage.jpg'; // Default profile image
import CommonInputField from '../../../CommonFields/Input/CommonInputField';

// Modal Component for Changing Password
const ChangePasswordModal = ({ isOpen, onClose }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSave = () => {
    if (newPassword !== confirmPassword) {
      setError('New Password and Confirm Password do not match');
      return;
    }
    console.log('Saving password:', { currentPassword, newPassword, confirmPassword });
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalHeading}>Change Password</h2>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.modalBody}>
          <CommonInputField
            field="input"
            type="password"
            placeholder="Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <CommonInputField
            field="input"
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <CommonInputField
            field="input"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <p className={styles.errorMessage}>{error}</p>}
          <button className={styles.saveButton} onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

// Modal Component for Editing Profile
const EditProfileModal = ({ isOpen, onClose, profileData, onSave }) => {
  const [userId, setUserId] = useState(profileData.userId);
  const [fullName, setFullName] = useState(profileData.fullName);
  const [dateOfBirth, setDateOfBirth] = useState(profileData.dateOfBirth);
  const [email, setEmail] = useState(profileData.email);
  const [gender, setGender] = useState(profileData.gender);
  const [phoneNo, setPhoneNo] = useState(profileData.phoneNo);
  const [address, setAddress] = useState(profileData.address);

  const handleSave = () => {
    const updatedProfile = {
      userId,
      fullName,
      dateOfBirth,
      email,
      gender,
      phoneNo,
      address,
    };
    onSave(updatedProfile);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalHeading}>Edit Profile</h2>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.modalBody}>
          <CommonInputField
            field="input"
            type="number"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <CommonInputField
            field="input"
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <CommonInputField
            field="date"
            placeholder="Date of Birth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
          <CommonInputField
            field="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CommonInputField
            field="select"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            option={['Male', 'Female']}
            defaultoption="Select Gender"
          />
          <CommonInputField
            field="input"
            type="tel"
            placeholder="Phone No"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
          <CommonInputField
            field="input"
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <button className={styles.saveButton} onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

// Main AdminSetting Component
const AdminSetting = () => {
  const [profile, setProfile] = useState({
    userId: 'A9876543210',
    fullName: 'Gilbert Opoku Oppong',
    dateOfBirth: '2024-11-12',
    email: 'admin@gmail.com',
    gender: 'Male',
    phoneNo: '1234567890',
    address: 'Accra',
  });

  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false);
  const [profileImageSrc, setProfileImageSrc] = useState(profileImage);

  const fileInputRef = useRef(null); // Ref for the file input

  const handleOpenEditProfileModal = () => setIsEditProfileModalOpen(true);
  const handleCloseEditProfileModal = () => setIsEditProfileModalOpen(false);
  const handleOpenChangePasswordModal = () => setIsChangePasswordModalOpen(true);
  const handleCloseChangePasswordModal = () => setIsChangePasswordModalOpen(false);

  const handleSaveProfile = (updatedProfile) => {
    setProfile(updatedProfile);
    console.log('Profile updated:', updatedProfile);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click(); // Trigger file input click
  };

  return (
    <div className={styles.settingContainer1}>
      <h1 className={styles.heading}>Settings</h1>

      <div className={styles.settingContainer}>
        <div className={styles.profileSection}>
          <div className={styles.profileImageContainer}>
            <img src={profileImageSrc} alt="Profile" className={styles.profileImage} />
            
            <p className={styles.imageInstructions}>
              Use an image at least 128px by 128px in .jpg format
            </p>
            <FaUpload 
              className={styles.uploadIcon} 
              onClick={triggerFileInput} 
            />
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleFileChange} 
              className={styles.fileInput}
              ref={fileInputRef}
              style={{ display: 'none' }} // Hide the input
            />
           
            <div className={styles.buttonContainer}>
              <button className={styles.changePasswordButton} onClick={handleOpenChangePasswordModal}>
                Change Password
              </button>
              <button className={styles.editProfileButton} onClick={handleOpenEditProfileModal}>
                Edit Profile
              </button>
            </div>
          </div>

          <div className={styles.profileInfoContainer}>
            <h2 className={styles.profileInfoHeading}>Profile Info</h2>
            <ul className={styles.profileDetailsList}>
              <li><span className={styles.profileLabel}>UID - </span>{profile.userId}</li>
              <li><span className={styles.profileLabel}>Name - </span>{profile.fullName}</li>
              <li><span className={styles.profileLabel}>BirthDay - </span>{profile.dateOfBirth}</li>
              <li><span className={styles.profileLabel}>Email - </span>{profile.email}</li>
              <li><span className={styles.profileLabel}>Phone - </span>{profile.phoneNo}</li>
              <li><span className={styles.profileLabel}>Gender - </span>{profile.gender}</li>
              <li><span className={styles.profileLabel}>Address - </span>{profile.address}</li>
            </ul>
          </div>
        </div>
      </div>

      <EditProfileModal
        isOpen={isEditProfileModalOpen}
        onClose={handleCloseEditProfileModal}
        profileData={profile}
        onSave={handleSaveProfile}
      />
      <ChangePasswordModal
        isOpen={isChangePasswordModalOpen}
        onClose={handleCloseChangePasswordModal}
      />
    </div>
  );
};

export default AdminSetting;
