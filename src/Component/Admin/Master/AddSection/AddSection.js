import { useState } from 'react';
import styles from "./AddSection.module.css";
import CommonInputField from "../../../../CommonFields/Input/CommonInputField";
import DataTable from '../../../../CommonFields/DataTable/DataTable';

const columns = [
  { Header: "Id", accessor: "id" },
  { Header: "Name", accessor: "name" },
  { Header: "NickName", accessor: "nickname" },
  { Header: "SchoolClass", accessor: "schoolclass" },
  { Header: "Teacher", accessor: "teacher" },
  { Header: "Action", accessor: "action" },
];

const classOptions = [
  "LKG", "UKG", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"
];

function AddSection() {
  const [selectedClass, setSelectedClass] = useState('');
  const [subject, setSubject] = useState('');
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [teacher, setTeacher] = useState('');
  const [classSubjects, setClassSubjects] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [showTable, setShowTable] = useState(false); // New state to manage table visibility

  const getTableData = () => {
    return classSubjects[selectedClass]?.map((subj, index) => ({
      id: index + 1,
      name: subj.name,
      nickname: subj.nickname,
      schoolclass: selectedClass,
      teacher: subj.teacher,
      action: (
        <div>
          <button onClick={() => handleEdit(selectedClass, index)} className={styles.editButton}>
            Edit
          </button>
          <button onClick={() => handleDelete(selectedClass, index)} className={styles.deleteButton}>
            Delete
          </button>
        </div>
      ), 
    })) || [];
  };

  const handleAddSubject = () => {
    if (subject.trim() && name.trim() && nickname.trim() && teacher.trim() && selectedClass) {
      const newEntry = { subject, name, nickname, teacher };
      const updatedClassSubjects = {
        ...classSubjects,
        [selectedClass]: [...(classSubjects[selectedClass] || []), newEntry],
      };

      setClassSubjects(updatedClassSubjects);
      setSubject('');
      setName('');
      setNickname('');           
      setTeacher('');

      // Show table after adding subject
      setShowTable(true);
    }
  };

  const handleDelete = (className, index) => {
    const updatedSubjects = classSubjects[className].filter((_, i) => i !== index);
    setClassSubjects({ ...classSubjects, [className]: updatedSubjects });

    // Hide table if no subjects left for the class
    if (updatedSubjects.length === 0) {
      setShowTable(false);
    }
  };

  const handleEdit = (className, index) => {
    const subjectToEdit = classSubjects[className][index];
    setIsEditing(true);
    setSubject(subjectToEdit.subject);
    setName(subjectToEdit.name);
    setNickname(subjectToEdit.nickname);
    setTeacher(subjectToEdit.teacher);
    setEditIndex(index);
  };

  const handleSaveEdit = () => {
    const updatedSubjects = classSubjects[selectedClass].map((subj, index) =>
      index === editIndex
        ? { subject, name, nickname, teacher }
        : subj
    );

    setClassSubjects({
      ...classSubjects,
      [selectedClass]: updatedSubjects,
    });

    setIsEditing(false);
    setEditIndex(null);
    setSubject('');
    setName('');
    setNickname('');
    setTeacher('');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Section</h2>
      <div className={styles.formGroup}>
        <CommonInputField
          field="select"
          label="SchoolClass"
          name="classSelect"
          value={selectedClass}
          onChange={(e) => {
            setSelectedClass(e.target.value);
            setShowTable(classSubjects[e.target.value]?.length > 0); // Show table if data exists for the selected class
          }}
          option={classOptions}
          defaultoption="Select Class"
          inputclass="form-control"
        />
      </div>
      
      <div className={styles.formGroup}>
        <CommonInputField
          field="input"
          label="Name"
          name="nameInput"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          inputclass="form-control"
        />
      </div>
      <div className={styles.formGroup}>
        <CommonInputField
          field="input"
          label="Nickname"
          name="nicknameInput"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Enter nickname"
          inputclass="form-control"
        />
      </div>

      <div className={styles.formGroup}>
        <CommonInputField
          field="input"
          label="Teacher"
          name="teacherInput"
          value={teacher}
          onChange={(e) => setTeacher(e.target.value)}
          placeholder="Enter teacher"
          inputclass="form-control"
        />
      </div>
      <div className={styles.formGroup}>
        {isEditing ? (
          <button onClick={handleSaveEdit} className={styles.addButton}>Save</button>
        ) : (
          <button onClick={handleAddSubject} className={styles.addButton}>Add</button>
        )}
      </div>

      {/* Table Section */}
      {showTable && selectedClass && classSubjects[selectedClass]?.length > 0 ? (
        <div className={styles.tableContainer}>
          <DataTable
            columns={columns}
            data={getTableData()}
            opendetail={() => {}}
            details={null}
            selectedrowShowButtonText="Delete"
            selectedrowFxn={(selectedRows) => console.log(selectedRows)}
            heading={`Subjects for Class ${selectedClass}`}
            loading={false}
          />
        </div>
      ) : (
        <p className={styles.noSubjects}>
          <span><i className="fa-solid fa-temperature-empty"></i></span> No Section added for Class {selectedClass} yet.
        </p>
      )}
    </div>
  );
}

export default AddSection;
