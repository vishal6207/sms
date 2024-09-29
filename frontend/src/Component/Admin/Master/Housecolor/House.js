import { useState, React } from 'react';
import styles from './House.module.css';
import CommonInputField from '../../../../CommonFields/Input/CommonInputField';
import DataTable from '../../../../CommonFields/DataTable/DataTable';

const columns = [
  { Header: "Id", accessor: "id" },
  { Header: "Address", accessor: "address" },
  { Header: "Description", accessor: "description" },
  { Header: "Action", accessor: "action" },
];

function Subjects() {
  const [selectedClass, setSelectedClass] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [classSubjects, setClassSubjects] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const getTableData = () => {
    console.log(classSubjects[selectedClass]); // Debugging
    return classSubjects[selectedClass]?.map((subj, index) => ({
      id: index + 1,
      address: subj.address,
      description: subj.description,
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
    if (address.trim() && description.trim() && selectedClass) {
      const updatedClassSubjects = {
        ...classSubjects,
        [selectedClass]: [
          ...(classSubjects[selectedClass] || []),
          { address, description }
        ]
      };

      setClassSubjects(updatedClassSubjects);
      setAddress('');
      setDescription('');
    }
  };

  const handleDelete = (className, index) => {
    const updatedSubjects = classSubjects[className].filter((_, i) => i !== index);
    setClassSubjects({ ...classSubjects, [className]: updatedSubjects });
  };

  const handleEdit = (className, index) => {
    setIsEditing(true);
    setAddress(classSubjects[className][index].address);
    setDescription(classSubjects[className][index].description);
    setEditIndex(index);
  };

  const handleSaveEdit = () => {
    const updatedSubjects = classSubjects[selectedClass].map((subj, index) =>
      index === editIndex ? { address, description } : subj
    );

    setClassSubjects({
      ...classSubjects,
      [selectedClass]: updatedSubjects
    });

    setIsEditing(false);
    setEditIndex(null);
    setAddress('');
    setDescription('');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>House</h2>

     

      <div className={styles.formGroup}>
        <CommonInputField
          field="input"
          label="Address"
          name="addressInput"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter address"
          inputclass="form-control"
        />
      </div>

      <div className={styles.formGroup}>
        <CommonInputField
          field="input"
          label="Description"
          name="descriptionInput"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
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

      <div className={styles.tableContainer}>
        {selectedClass && classSubjects[selectedClass]?.length > 0 ? (
          <DataTable
            columns={columns}
            data={getTableData()}
            loading={false}
          />
        ) : (
          <p className={styles.noSubjects}>
            <span><i className="fa-solid fa-temperature-empty"></i></span>
          </p>
        )}
      </div>
    </div>
  );
}

export default Subjects;
