import { useState, React } from 'react';
import styles from './Roles.module.css';
import CommonInputField from '../../../../CommonFields/Input/CommonInputField';
import DataTable from '../../../../CommonFields/DataTable/DataTable';

const columns = [
  { Header: "Id", accessor: "id" },
  { Header: "Role", accessor: "role" },
  { Header: "Action", accessor: "action" },
];

function Subjects() {
  const [selectedClass, setSelectedClass] = useState('');
  const [role, setRole] = useState('');
  const [classRoles, setClassRoles] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

     

  const getTableData = () => {
    return classRoles[selectedClass]?.map((roleItem, index) => ({
      id: index + 1,
      role: roleItem.role,
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

  const handleAddRole = () => {
    if (role.trim() && selectedClass) {
      const updatedClassRoles = {
        ...classRoles,
        [selectedClass]: [
          ...(classRoles[selectedClass] || []),
          { role }
        ]
      };

      setClassRoles(updatedClassRoles);
      setRole('');
    }
  };

  const handleDelete = (className, index) => {
    const updatedRoles = classRoles[className].filter((_, i) => i !== index);
    setClassRoles({ ...classRoles, [className]: updatedRoles });
  };

  const handleEdit = (className, index) => {
    setIsEditing(true);
    setRole(classRoles[className][index].role);
    setEditIndex(index);
  };

  const handleSaveEdit = () => {
    const updatedRoles = classRoles[selectedClass].map((roleItem, index) =>
      index === editIndex ? { role } : roleItem
    );

    setClassRoles({
      ...classRoles,
      [selectedClass]: updatedRoles
    });

    setIsEditing(false);
    setEditIndex(null);
    setRole('');
  };



  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Roles</h2>

      <div className={styles.formGroup}>
        <CommonInputField
          field="input"
          label="Role"
          name="roleInput"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Enter role"
          inputclass="form-control"
        />
      </div>

      <div className={styles.formGroup}>
        {isEditing ? (
          <button onClick={handleSaveEdit} className={styles.addButton}>Save</button>
        ) : (
          <button onClick={handleAddRole} className={styles.addButton}>Add</button>
        )}
      </div>

      <div className={styles.tableContainer}>
        {selectedClass && classRoles[selectedClass]?.length > 0 ? (
          <DataTable
            columns={columns}
            data={getTableData()}
            opendetail={() => {}}
            details={null}
            selectedrowShowButtonText="Delete"
            selectedrowFxn={(selectedRows) => console.log(selectedRows)}
            loading={false}
          />
        ) : (
          <p className={styles.noRoles}>
           
          </p>
        )}
      </div>
    </div>
  );
}

export default Subjects;
