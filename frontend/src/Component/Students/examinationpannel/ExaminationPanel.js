import React, { useState } from "react";
import "./ExaminationPanel.css";
import ExamData from "./ExamData";

const ExaminationPanel = () => {
  const student = ExamData();
  const [showDetails, setShowDetails] = useState(null);
  const [selectedYear, setSelectedYear] = useState("2024");

  const filteredTests = student.tests.filter(
    (test) => test.year.toString() === selectedYear
  );

  const handleToggleDetails = (category) => {
    setShowDetails(showDetails === category ? null : category);
  };

  const obtainGrade = (percentage) => {
    if (percentage >= 0.9) return "A+";
    if (percentage >= 0.8) return "A";
    if (percentage >= 0.7) return "B+";
    if (percentage >= 0.6) return "B";
    return "C";
  };

  const renderSummary = (category) => {
    const { totalMarks, obtainedMarks, subjects } = category;
    const status = obtainedMarks >= 0.5 * totalMarks ? "Pass" : "Fail";
    const grade = obtainGrade(obtainedMarks / totalMarks);
    const percentage = ((obtainedMarks / totalMarks) * 100).toFixed(2);

    return (
      <>
        <div className={`result-summary ${category.className}`}>
          <div className="result-header">
            <h2>{category.category}</h2>
            <div className="result-info">
              <span>Total Marks: {totalMarks}</span>
              <span>Obtained Marks: {obtainedMarks}</span>
              <div className="status-container">
                <span>Percentage: {percentage}%</span>
                <span>Status: {status}</span>
              </div>
              <span>Grade: {grade}</span>
            </div>
            <div className="result-buttons">
              <button
                className="view-btn"
                onClick={() => handleToggleDetails(category.category)}
              >
                {showDetails === category.category
                  ? "Hide Details"
                  : "View Details"}
              </button>
              <button
                className="download-btn"
                onClick={() => printResult(category)}
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  const printResult = (category) => {
    const printContent = document.createElement("div");

    // Get the styles from the existing page
    const styles = Array.from(document.styleSheets)
      .map((styleSheet) => {
        try {
          return Array.from(styleSheet.cssRules)
            .map((rule) => rule.cssText)
            .join("");
        } catch (e) {
          console.warn("Could not access stylesheet", styleSheet, e);
          return "";
        }
      })
      .join("");

    printContent.innerHTML = `
      <html>
        <head>
          <style>
            ${styles}
          </style>
        </head>
        <body>
          <div class="examination-panel">
            <div class="student-header">
              <h1 class="student-name">${student.name}</h1>
              <h2 class="student-info">
                Mother: ${student.motherName} | Father: ${student.fatherName}
              </h2>
            </div>
            <div class="result-summary ${category.className}">
              <div class="result-header">
                <h2>${category.category}</h2>
                <div class="result-info">
                  <span>Total Marks: ${category.totalMarks}</span>
                  <span>Obtained Marks: ${category.obtainedMarks}</span>
                  <div class="status-container">
                    <span>Percentage: ${(
                      (category.obtainedMarks / category.totalMarks) *
                      100
                    ).toFixed(2)}%</span>
                    <span>Status: ${
                      category.obtainedMarks >= 0.5 * category.totalMarks
                        ? "Pass"
                        : "Fail"
                    }</span>
                  </div>
                  <span>Grade: ${obtainGrade(
                    category.obtainedMarks / category.totalMarks
                  )}</span>
                </div>
              </div>
              ${
                category.subjects.length > 0
                  ? `<table class="details-table">
                      <thead>
                        <tr>
                          <th>Test Name</th>
                          <th>Total Marks</th>
                          <th>Obtained Marks</th>
                          <th>Grade</th>
                          <th>Status</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${category.subjects
                          .map(
                            (subject) => `
                              <tr>
                                <td>${subject.name}</td>
                                <td>${subject.totalMarks}</td>
                                <td>${subject.obtainedMarks}</td>
                                <td>${subject.grade}</td>
                                <td>${subject.status}</td>
                                <td>${subject.date}</td>
                              </tr>`
                          )
                          .join("")}
                      </tbody>
                    </table>`
                  : `<p>No tests available for this category.</p>`
              }
            </div>
          </div>
        </body>
      </html>
    `;

    const printWindow = window.open("", "", "width=800,height=600");
    printWindow.document.write(printContent.innerHTML);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };

  return (
    <>
      <div className="examination-panel">
        <div className="student-header">
          <h1 className="student-name">{student.name}</h1>
          <h2 className="student-info">
            Mother: {student.motherName} | Father: {student.fatherName} |
            Address: {student.address}
          </h2>
        </div>

        <div className="year-selector">
          {["2024", "2025", "2026", "2027", "2028"].map((year) => (
            <button
              key={year}
              className={`year-btn ${selectedYear === year ? "active" : ""}`}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </button>
          ))}
        </div>

        {filteredTests.map((category, index) => (
          <div key={index} id={`category-${category.category}`}>
            {renderSummary(category)}
            {showDetails === category.category && (
              <div className="details-section">
                <table className="details-table">
                  <thead>
                    <tr>
                      <th>Test Name</th>
                      <th>Total Marks</th>
                      <th>Obtained Marks</th>
                      <th>Grade</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.subjects.length > 0 ? (
                      category.subjects.map((test, testIndex) => (
                        <tr key={testIndex}>
                          <td>{test.name}</td>
                          <td>{test.totalMarks}</td>
                          <td>{test.obtainedMarks}</td>
                          <td>{test.grade}</td>
                          <td>{test.status}</td>
                          <td>{test.date}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6">
                          No tests available for this category.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ExaminationPanel;
