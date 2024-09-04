import React, { useState } from "react";
import styles from "./Workspace.module.css";
import Navbar from "../Navbar/Navbar";

const Workspace = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const tableData = [
    {
      subject: "Hindi",
      title: "Hindi Homework",
      date: "19-06-2024",
      downloadLink: "#",
    },
    {
      subject: "Math",
      title: "Algebra Worksheet",
      date: "20-06-2024",
      downloadLink: "#",
    },
    {
      subject: "Science",
      title: "Physics Lab Report",
      date: "21-06-2024",
      downloadLink: "#",
    },
    {
      subject: "English",
      title: "Essay on Environment",
      date: "22-06-2024",
      downloadLink: "#",
    },
    {
      subject: "Geography",
      title: "Map Work",
      date: "23-06-2024",
      downloadLink: "#",
    },
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredData = tableData.filter(
    (item) =>
      item.subject.toLowerCase().includes(searchTerm) ||
      item.title.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      <Navbar />
      <div className="card">
        <div className={styles.workspaceTableContainer}>
          <input
            type="text"
            placeholder="Search for Subject or Title"
            value={searchTerm}
            onChange={handleSearchChange}
            className={styles.workspaceSearchInput}
          />
          <table className={styles.workspaceTable}>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Title</th>
                <th>Downloads</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.subject}</td>
                    <td>{item.title}</td>
                    <td>
                      <a
                        href={item.downloadLink}
                        className={styles.workspaceDownloadButton}
                      >
                        Download
                      </a>
                    </td>
                    <td>{item.date}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No results found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Workspace;
