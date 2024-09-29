import React, { useState } from 'react';
import './sylabus.css';
import { RiDeleteBin6Line } from "react-icons/ri";
 
const Syllabus = () => {
  const [selectedClass, setSelectedClass] = useState('12 (Commerce)');
  const [syllabusData, setSyllabusData] = useState([
    { id: 1, subject: 'Hindi', class: '12 (Commerce)' },
    { id: 2, subject: 'English', class: '12 (Commerce)' },
    { id: 3, subject: 'Commerce', class: '12 (Commerce)' },
    { id: 4, subject: 'Biology', class: '12 (Commerce)' },
    { id: 5, subject: 'Pip', class: '12 (Commerce)' }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newSyllabus, setNewSyllabus] = useState({ class: '', subject: '' });
  const [isFileUploadModalOpen, setIsFileUploadModalOpen] = useState(false);
  const [file, setFile] = useState(null);

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSyllabus((prev) => ({ ...prev, [name]: value }));
  };

  const handleUploadSyllabus = () => {
    setSyllabusData([...syllabusData, { id: syllabusData.length + 1, ...newSyllabus }]);
    setIsModalOpen(false);
  };

  const handleFileUpload = () => {
    setIsFileUploadModalOpen(true);
  };

  const handleFileSelect = (e) => {
    setFile(e.target.files[0]); // Capture selected file
  };

  const handleFileUploadSave = () => {
    if (file) {
      console.log('File saved:', file);
      // Implement any file upload logic here (e.g., uploading the file to a server)
    } else {
      alert('Please select a file.');
    }
    setIsFileUploadModalOpen(false); // Close the modal after saving
  };

  const handleDelete = (id) => {
    const updatedSyllabus = syllabusData.filter((item) => item.id !== id);
    setSyllabusData(updatedSyllabus);
  };

  const filteredSyllabus = syllabusData.filter((item) => item.class === selectedClass);

  const WithoutPopupClass = [
     "12 (Commerce)",
     "11 (Commerce)",
     "10 (Science)",
     "9 (Arts)",
     "8",
     "7",
     "6",
     "5",
     "4",
     "3",
     "2",
     "1",
     "nursery",
     "kg",
     "ukg"
  ];

  return (
    <div className="syllabusContainer">
      <h1 className="heading">Syllabus</h1>
      <div className="topBar">
        <div>
          <label htmlFor="class">Class </label>
          <select id="class" value={selectedClass} onChange={handleClassChange}>
            <option value="12 (Commerce)">12 (Commerce)</option>
            {WithoutPopupClass.map((items, index) => (
              <option key={index} value={items}>
                {items}
              </option>
            ))}
          </select>
        </div>
        <button className="uploadButton" onClick={() => setIsModalOpen(true)}>
          Upload Syllabus
        </button>
      </div>

      <table className="syllabusTable">
        <thead>
          <tr>
            <th>#</th>
            <th>Subject</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredSyllabus.length > 0 ? (
            filteredSyllabus.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.subject}</td>
                <td className='tableRow'>
                  <div>
                  <button className="downloadButton">Download</button>
                  <button className="uploadButton" onClick={handleFileUpload}>
                    Upload
                  </button>
                  </div>
 
                  <button
                    className="deleteButton"
                    onClick={() => handleDelete(item.id)}
                     
                  >
                    <RiDeleteBin6Line />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No syllabus found for selected class</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal for uploading syllabus */}
      {isModalOpen && (
        <div className="modalBackground">
          <div className="modalContent">
            <h2>Upload Syllabus</h2>
            <label>Class</label>
            <select name="class" value={newSyllabus.class} onChange={handleInputChange}>
              {WithoutPopupClass.map((items, index) => (
                <option key={index} value={items}>
                  {items}
                </option>
              ))}
            </select>

            <label>Subject</label>
            <select name="subject" value={newSyllabus.subject} onChange={handleInputChange}>
              <option value="">--select--</option>
              <option value="English">English</option>
              <option value="Biology">Biology</option>
              <option value="Math">Math</option>
            </select>

            <label>Upload PDF file (max-size 200MB)</label>
            <input type="file" />

            <button className="submitButton" onClick={handleUploadSyllabus}>
              Upload
            </button>

             
            <button className="closeButton" onClick={() => setIsModalOpen(false)}>
              Close
            </button>



          </div>
        </div>
      )}

      {/* Modal for selecting file */}
      {isFileUploadModalOpen && (
        <div className="modalBackground">
          <div className="modalContent">
            <h2>Select a File</h2>
            <input type="file" onChange={handleFileSelect} />
            <button className="closeButton" onClick={() => setIsFileUploadModalOpen(false)}>
              Close
            </button>
            <button className="saveButton" onClick={handleFileUploadSave}>
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Syllabus;
