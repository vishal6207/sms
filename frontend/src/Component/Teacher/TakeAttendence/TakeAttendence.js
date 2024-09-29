import React, { useState } from 'react';
import "./TakeAttendence.css"
import CommonInputField from '../../../CommonFields/Input/CommonInputField';
import DataTable from '../../../CommonFields/DataTable/DataTable';

const columns = [
  { Header: "Name", accessor: "name" },
  { Header: "Roll Number", accessor: "rollNumber" },
  { Header: "Action", accessor: "action" }
];

const studentData = [
  { id: 1, rollNumber: 1, name: 'John Doe', class: 'LKG', section: 'A' },
  { id: 2, rollNumber: 2, name: 'Sarah Blue', class: 'LKG', section: 'A' },
  { id: 3, rollNumber: 1, name: 'Jane Smith', class: 'LKG', section: 'B' },
  { id: 4, rollNumber: 2, name: 'David Black', class: 'LKG', section: 'B' },
  
];

function TakeAttendence() {
  const classOptions = ["LKG", "UKG", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  const sectionOptions = ["A", "B", "C"];
  
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [selectAll, setSelectAll] = useState(false);

  const filterStudents = () => {
    const filtered = studentData.filter(
      student => student.class === selectedClass && student.section === selectedSection
    );
    setFilteredStudents(filtered);
  };

  const handleToggleAttendance = (studentId) => {
    setAttendance(prevAttendance => ({
      ...prevAttendance,
      [studentId]: !prevAttendance[studentId]
    }));
  };

  const handleSelectAll = () => {
    const newAttendance = {};
    filteredStudents.forEach(student => {
      newAttendance[student.id] = !selectAll;
    });
    setAttendance(newAttendance);
    setSelectAll(!selectAll);
  };

  const handleSubmitAttendance = () => {
    console.log('Submitted Attendance:', attendance);
  };

  return (
    <>
      <div className="attendance-container">
        <h1 className='h1-head'>Take Attendance Class and section wise</h1>
        <CommonInputField
          field="select"
          label="Select Class"
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          option={classOptions}
          defaultoption="Select Class"
          inputclass="form-control"
        />

        <CommonInputField
          field="select"
          label="Select Section"
          value={selectedSection}
          onChange={(e) => setSelectedSection(e.target.value)}
          option={sectionOptions}
          defaultoption="Select Section"
          inputclass="form-control"
        />

        <button className="showStudent" onClick={filterStudents}>
          Show Students
        </button>

        {filteredStudents.length > 0 && (
          <div className="student-list">
            <h3>
              Students in {selectedClass} - {selectedSection}:
            </h3>
            <div className="select-all-container">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
              <label>Select All</label>
            </div>

            <DataTable
              columns={columns}
              data={filteredStudents.map(student => ({
                ...student,
                action: (
                  <div>
                    <input
                      type="checkbox"
                      checked={attendance[student.id] || false}
                      onChange={() => handleToggleAttendance(student.id)}
                    />
                    <label>{attendance[student.id] ? 'Present' : 'Absent'}</label>
                  </div>
                )
              }))}
            />

            <button className="btn btn-success" onClick={handleSubmitAttendance}>
              Submit Attendance
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default TakeAttendence;
