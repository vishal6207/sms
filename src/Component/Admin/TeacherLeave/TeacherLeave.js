import React, { useState } from 'react';
import styles from './TeacherLeave.module.css';
import DataTable from "../../../CommonFields/DataTable/DataTable"

const initialLeaves = [
  { id: 1, staffName: 'John Doe', leaveType: 'Sick Leave', appliedDate: '2024-09-01', dateRange: '2024-09-01 to 2024-09-03', status: 'pending' },
  { id: 2, staffName: 'Jane Smith', leaveType: 'Casual Leave', appliedDate: '2024-09-05', dateRange: '2024-09-10 to 2024-09-12', status: 'pending' },
  { id: 3, staffName: 'Mark Johnson', leaveType: 'Sick Leave', appliedDate: '2024-09-03', dateRange: '2024-09-04 to 2024-09-07', status: 'pending' },
  { id: 4, staffName: 'Emily Davis', leaveType: 'Maternity Leave', appliedDate: '2024-09-07', dateRange: '2024-09-15 to 2024-12-15', status: 'pending' },
];

const cardData = [
  { countKey: 'totalTeachers', label: 'Total Teachers', icon: 'fas fa-users' },
  { countKey: 'approvedLeaves', label: 'Approved Leaves', icon: 'fas fa-check-circle' },
  { countKey: 'pendingLeaves', label: 'Pending Leaves', icon: 'fas fa-hourglass-half' },
  { countKey: 'rejectedLeaves', label: 'Rejected Leaves', icon: 'fas fa-times-circle' },
];

const tabs = [
  { id: 'pending', label: 'Pending Leaves' },
  { id: 'approved', label: 'Approved Leaves' },
  { id: 'rejected', label: 'Rejected Leaves' },
];

const TeacherLeave = () => {
  const [pendingLeaves, setPendingLeaves] = useState(initialLeaves);
  const [approvedLeaves, setApprovedLeaves] = useState([]);
  const [rejectedLeaves, setRejectedLeaves] = useState([]);
  const [activeTab, setActiveTab] = useState('pending');

  const handleApprove = (leaveId) => {
    const leaveToApprove = pendingLeaves.find((leave) => leave.id === leaveId);
    if (leaveToApprove) {
      setApprovedLeaves([...approvedLeaves, { ...leaveToApprove, status: 'approved' }]);
      setPendingLeaves(pendingLeaves.filter((leave) => leave.id !== leaveId));
    }
  };

  const handleReject = (leaveId) => {
    const leaveToReject = pendingLeaves.find((leave) => leave.id === leaveId);
    if (leaveToReject) {
      setRejectedLeaves([...rejectedLeaves, { ...leaveToReject, status: 'rejected' }]);
      setPendingLeaves(pendingLeaves.filter((leave) => leave.id !== leaveId));
    }
  };

  const leaveCounts = {
    totalTeachers: 10,
    approvedLeaves: approvedLeaves.length,
    pendingLeaves: pendingLeaves.length,
    rejectedLeaves: rejectedLeaves.length,
  };

  const columns = [
    { Header: 'Staff Name', accessor: 'staffName' },
    { Header: 'Leave Type', accessor: 'leaveType' },
    { Header: 'Applied Date', accessor: 'appliedDate' },
    { Header: 'Date Range', accessor: 'dateRange' },
    { Header: 'Action', accessor: 'action' },
  ];

  const getLeavesForActiveTab = () => {
    switch (activeTab) {
      case 'approved':
        return approvedLeaves;
      case 'rejected':
        return rejectedLeaves;
      default:
        // Add approve and reject buttons in the data for pending leaves
        return pendingLeaves.map(leave => ({
          ...leave,
          action: (
            <>
              <button
                className={`${styles.actionButton} ${styles.approveButton}`}
                onClick={() => handleApprove(leave.id)}
              >
                Approve
              </button>
              <button
                className={`${styles.actionButton} ${styles.rejectButton}`}
                onClick={() => handleReject(leave.id)}
              >
                Reject
              </button>
            </>
          ),
        }));
    }
  };

  return (
    <div className={styles.teacherLeaveContainer}>
      <div className={styles.cardContainer}>
        {cardData.map(({ countKey, label, icon }, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardIcon}>
              <i className={icon}></i>
            </div>
            <div className={styles.cardContent}>
              <span className={styles.cardCount}>{leaveCounts[countKey]}</span>
              <span className={styles.cardLabel}>{label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.leaveTabsContainer}>
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            className={`${styles.leaveTab} ${activeTab === id ? styles.activeTab : ''}`}
            onClick={() => setActiveTab(id)}
          >
            {label}
          </button>
        ))}
      </div>

      <DataTable
        columns={columns}
        data={getLeavesForActiveTab()}
        heading={`List of ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Leaves`}
        loading={false}
      />
    </div>
  );
};

export default TeacherLeave;
