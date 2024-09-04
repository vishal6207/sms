import React, { useState } from "react";
import "./FeePanel.css";  
import Navbar from "../Navbar/Navbar";
import FeeTable from "../../Admin/feeTable/FeeTable";
import SingleStudentFee from "../../Admin/singleStudentFee/SingleStudentFee";
import Feehead from "../../Admin/FeeHead/Feehead";
const FeePanel = () => {
  const [fees, setFees] = useState([
    { id: 1, name: "Tuition Fee", amount: 1000, status: "Pending" },
    { id: 2, name: "Library Fee", amount: 200, status: "Pending" },
    { id: 3, name: "Bus Fee", amount: 300, status: "Pending" },
  ]);

  const handlePayment = (id) => {
    setFees(
      fees.map((fee) => (fee.id === id ? { ...fee, status: "Paid" } : fee))
    );
    alert("Payment successful!");
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="fee-panel">
        <h2 className="fee-panel-title">Student Fee Panel</h2>
        <div className="fee-table-container">
          {fees.map((fee) => (
            <div
              key={fee.id}
              className={`fee-card ${
                fee.status === "Paid" ? "paid" : "pending"
              }`}
            >
              <div className="fee-info">
                <h3 className="fee-name">{fee.name}</h3>
                <p className="fee-amount">${fee.amount}</p>
                <span className={`status-badge ${fee.status.toLowerCase()}`}>
                  {fee.status}
                </span>
              </div>
              {fee.status === "Pending" && (
                <button
                  className="pay-button"
                  onClick={() => handlePayment(fee.id)}
                >
                  Pay Now
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <Feehead/>
      <SingleStudentFee/> 
      <FeeTable/>
      
    </>
  );
};

export default FeePanel;
