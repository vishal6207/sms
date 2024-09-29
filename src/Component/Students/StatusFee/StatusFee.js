import React, { useState } from "react";
import "./StatusFee.css";

const StatusFee = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const generateFeeData = () => {
    const classes = Array.from({ length: 10 }, (_, i) => `Class ${i + 1}`);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const years = ["2024", "2025", "2026"];
    const feeTypes = ["Transport Fee", "Library Fee", "Tuition Fee"];

    return classes.flatMap(className =>
      Array.from({ length: 8 }, (_, i) => {
        const feeType = feeTypes[i % feeTypes.length];
        const feeAmount = 1000 * (i % 3 + 1); // Example fee amount
        return {
          admNo: 1000 + i,
          studentName: `Student ${i + 1}`,
          class: className,
          rollNo: i + 1,
          fatherName: `Father ${i + 1}`,
          phone: `90000000${i}`,
          address: `Address ${i + 1}`,
          month: months[i % months.length],
          year: years[i % years.length],
          paid: i % 2 === 0,
          feeType: feeType,
          feeAmount: feeAmount // Example fee amount
        };
      })
    );
  };

  const feeData = generateFeeData();

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handlePaymentStatusChange = (e) => {
    setPaymentStatus(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleViewDetails = (student) => {
    setSelectedStudent({
      ...student,
      fees: feeData.filter(fee => fee.studentName === student.studentName)
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStudent(null);
  };

  const filteredData = feeData.filter((record) => {
    const matchesSearchTerm =
      record.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.admNo.toString().includes(searchTerm);

    return (
      matchesSearchTerm &&
      (selectedClass ? record.class === selectedClass : true) &&
      (selectedMonth ? record.month === selectedMonth : true) &&
      (selectedYear ? record.year === selectedYear : true) &&
      (paymentStatus ? (paymentStatus === "Paid" ? record.paid : !record.paid) : true)
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="data-fee-module">
      <div className="data-filters">
        <select onChange={handleClassChange} value={selectedClass}>
          <option value="">Select Class</option>
          {Array.from({ length: 10 }, (_, i) => (
            <option key={i} value={`Class ${i + 1}`}>{`Class ${i + 1}`}</option>
          ))}
        </select>
        <select onChange={handleMonthChange} value={selectedMonth}>
          <option value="">Select Month</option>
          {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month) => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>
        <select onChange={handleYearChange} value={selectedYear}>
          <option value="">Select Year</option>
          {["2024", "2025", "2026"].map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
        <select onChange={handlePaymentStatusChange} value={paymentStatus}>
          <option value="">Select Payment Status</option>
          <option value="Paid">Paid</option>
          <option value="Unpaid">Unpaid</option>
        </select>
        <input
          type="text"
          placeholder="Search by Name or Adm No"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="data-table-container">
        <div className="data-table-header">
          <span>Total No Of Record: {filteredData.length}</span>
        </div>
        <table className="data-fee-table">
          <thead>
            <tr>
              <th>Adm No</th>
              <th>Student Name</th>
              <th>Class</th>
              <th>Roll No</th>
              <th>Father Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Month</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((record, index) => (
              <tr key={index}>
                <td>{record.admNo}</td>
                <td>{record.studentName}</td>
                <td>{record.class}</td>
                <td>{record.rollNo}</td>
                <td>{record.fatherName}</td>
                <td>{record.phone}</td>
                <td>{record.address}</td>
                <td>{record.month}</td>
                <td>{record.paid ? "Paid" : "Unpaid"}</td>
                <td>
                  <button className="view-button" onClick={() => handleViewDetails(record)}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`pagination-button ${currentPage === index + 1 ? "active" : ""}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {isModalOpen && selectedStudent && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={handleCloseModal}>×</button>
            <h2>{selectedStudent.studentName} - Fee Details</h2>
            <p><strong>Admission No:</strong> {selectedStudent.admNo}</p>
            <p><strong>Class:</strong> {selectedStudent.class}</p>
            <p><strong>Roll No:</strong> {selectedStudent.rollNo}</p>
            <p><strong>Father's Name:</strong> {selectedStudent.fatherName}</p>
            <p><strong>Phone:</strong> {selectedStudent.phone}</p>
            <p><strong>Address:</strong> {selectedStudent.address}</p>
            <p><strong>Year:</strong> {selectedStudent.year}</p>
            <p><strong>Month:</strong> {selectedStudent.month}</p>

            <h3>Fee Details:</h3>
            <div className="modal-table-container">
              <table className="modal-fee-table">
                <thead>
                  <tr>
                    <th>Fee Type</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Month</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedStudent.fees.map((fee, index) => (
                    <tr key={index}>
                      <td>{fee.feeType}</td>
                      <td>{fee.feeAmount}</td>
                      <td>{fee.paid ? "Paid" : "Unpaid"}</td>
                      <td>{fee.month}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button className="download-button" onClick={() => {/* Add your download logic here */}}>Download PDF</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatusFee;
