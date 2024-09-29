import { useState, React } from 'react';
import styles from './Subjects.module.css';
import CommonInputField from '../../../CommonFields/Input/CommonInputField';
import DataTable from '../../../CommonFields/DataTable/DataTable';

const columns = [
  {Header : "Id" , accessor : "id"},
  {Header : "Subject" , accessor : "subject"},
  {Header : "Action" , accessor : "action"},

]

const classOptions = [
  "LKG", "UKG", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"
];

function Subjects() {
  const [selectedClass, setSelectedClass] = useState('');
  const [subject, setSubject] = useState('');
  const [classSubjects, setClassSubjects] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  

  const getTableData = () => {
    return classSubjects[selectedClass]?.map((subj, index) => ({
      id: index + 1,
      subject: subj,
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
    if (subject.trim() && selectedClass) {
      const updatedClassSubjects = {
        ...classSubjects,
        [selectedClass]: [...(classSubjects[selectedClass] || []), subject]
      };

      setClassSubjects(updatedClassSubjects);
      setSubject('');
    }
  };
  console.log(classSubjects)
  const handleDelete = (className, index) => {
    const updatedSubjects = classSubjects[className].filter((_, i) => i !== index);
    setClassSubjects({ ...classSubjects, [className]: updatedSubjects });
  };

  const handleEdit = (className, index) => {
    setIsEditing(true);
    setSubject(classSubjects[className][index]); 
    setEditIndex(index);
  };

  const handleSaveEdit = () => {
    const updatedSubjects = classSubjects[selectedClass].map((subj, index) =>
      index === editIndex ? subject : subj
    );

    setClassSubjects({
      ...classSubjects,
      [selectedClass]: updatedSubjects
    });

    setIsEditing(false);
    setEditIndex(null);
    setSubject('');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Subjects</h2>
      <div className={styles.formGroup}>
        <CommonInputField
          field="select" 
          label="Class" 
          name="classSelect"
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          option={classOptions} 
          defaultoption="Select Class"
          inputclass="form-control"
        />
      </div>
      <div className={styles.formGroup}>
       <CommonInputField
         
         field="input" 
         label="Subject"
         name="subjectInput"
         value={subject}
         onChange={(e) => setSubject(e.target.value)} 
         placeholder="Enter subject"
         inputclass="form-control" 
       />
        {isEditing ? (
          <button onClick={handleSaveEdit} className={styles.addButton}>Save</button>
        ) : (
          <button onClick={handleAddSubject} className={styles.addButton}>Add</button>
        )}
      </div>
      <div className={styles.tableContainer}>

         {selectedClass &&   classSubjects[selectedClass]?.length > 0 ? (
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
        ) :
        (
          <p  className={styles.noSubjects}> <span><i class="fa-solid fa-temperature-empty"></i></span> No subjects added for Class {selectedClass} yet.</p>
          
        )}
      </div>
    </div>
  );
}

export default Subjects;
