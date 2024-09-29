import React, { useState } from 'react';
import "./ShowStudents.css";
import CommonInputField from '../../../../CommonFields/Input/CommonInputField';
import DataTable from '../../../../CommonFields/DataTable/DataTable';

const columns = [
  { Header: "Name", accessor: "name" },
  { Header: "Roll Number", accessor: "rollNumber" }
];

const studentData = [
  { id: 1, rollNumber: 1, name: 'John Doe', class: 'LKG', section: 'A' },
  { id: 2, rollNumber: 2, name: 'Sarah Blue', class: 'LKG', section: 'A' },
  { id: 3, rollNumber: 1, name: 'Jane Smith', class: 'LKG', section: 'B' },
  { id: 4, rollNumber: 2, name: 'David Black', class: 'LKG', section: 'B' }
];

function ShowStudents() {
  const classOptions = ["LKG", "UKG", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  const sectionOptions = ["A", "B", "C"];
  
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);

  const filterStudents = () => {
    const filtered = studentData.filter(
      student => student.class === selectedClass && student.section === selectedSection
    );
    setFilteredStudents(filtered);
  };

  return (
    <>
      <div className="student-container">
        <h1 className='h1-head'>Show Students Class and Section Wise</h1>
        <div className="studentfeedbackform">
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

        <button className="ShowButton1" onClick={filterStudents}>
          Show Students
        </button>

        {filteredStudents.length > 0 && (
          <div className="student-list">
            <h3>
              Students in {selectedClass} - {selectedSection}:
            </h3>

            <DataTable
              columns={columns}
              data={filteredStudents}
            />
          </div>
        )}
      </div>
      </div>
    </>
  );
}

export default ShowStudents;
