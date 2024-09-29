import React from 'react';
import styles from './FeeRecieptSummery.module.css';

const FeeReceiptSummary = () => {
    const receiptData = [
        {
            recNo: 848,
            admNo: 1534,
            studentName: 'SAKSHAM BALYAN',
            classSec: 'PREP I A',
            rollNo: 19,
            month: 'APR',
            prevDues: 0,
            feeAmount: 5000,
            lateFine: 0,
            concession: 0,
            paidAmt: 1500,
            balance: 3500,
            status: 'Paid'
        },
        {
            recNo: 848,
            admNo: 1534,
            studentName: 'SAKSHAM BALYAN',
            classSec: 'PREP I A',
            rollNo: 19,
            month: 'APR',
            prevDues: 0,
            feeAmount: 5000,
            lateFine: 0,
            concession: 0,
            paidAmt: 1500,
            balance: 3500,
            status: 'Paid'
        },
        {
            recNo: 848,
            admNo: 1534,
            studentName: 'SAKSHAM BALYAN',
            classSec: 'PREP I A',
            rollNo: 19,
            month: 'APR',
            prevDues: 0,
            feeAmount: 5000,
            lateFine: 0,
            concession: 0,
            paidAmt: 1500,
            balance: 3500,
            status: 'Paid'
        },
        {
            recNo: 848,
            admNo: 1534,
            studentName: 'SAKSHAM BALYAN',
            classSec: 'PREP I A',
            rollNo: 19,
            month: 'APR',
            prevDues: 0,
            feeAmount: 5000,
            lateFine: 0,
            concession: 0,
            paidAmt: 1500,
            balance: 3500,
            status: 'Paid'
        },
        {
            recNo: 848,
            admNo: 1534,
            studentName: 'SAKSHAM BALYAN',
            classSec: 'PREP I A',
            rollNo: 19,
            month: 'APR',
            prevDues: 0,
            feeAmount: 5000,
            lateFine: 0,
            concession: 0,
            paidAmt: 1500,
            balance: 3500,
            status: 'Paid'
        },
        {
            recNo: 848,
            admNo: 1534,
            studentName: 'SAKSHAM BALYAN',
            classSec: 'PREP I A',
            rollNo: 19,
            month: 'APR',
            prevDues: 0,
            feeAmount: 5000,
            lateFine: 0,
            concession: 0,
            paidAmt: 1500,
            balance: 3500,
            status: 'Paid'
        },
        
         
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>School Management System</h1>
                <p>Pari Chowk, Greater Noida, G.B. Nagar</p>
                <h2>Fee Receipt Summary Report:</h2>
                <p>Receipt Summary From Date: <strong>26/04/2016</strong> To <strong>26/04/2017</strong></p>
            </header>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Rec. No</th>
                        <th>Adm. No</th>
                        <th>Student Name</th>
                        <th>Class/Sec</th>
                        <th>Roll No</th>
                        <th>Month</th>
                        <th>Prev. Dues</th>
                        <th>Fee Amount</th>
                        <th>Late Fine</th>
                        <th>Concession</th>
                        <th>Paid Amt</th>
                        <th>Balance</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {receiptData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.recNo}</td>
                            <td>{item.admNo}</td>
                            <td>{item.studentName}</td>
                            <td>{item.classSec}</td>
                            <td>{item.rollNo}</td>
                            <td>{item.month}</td>
                            <td>{item.prevDues}</td>
                            <td>{item.feeAmount}</td>
                            <td>{item.lateFine}</td>
                            <td>{item.concession}</td>
                            <td>{item.paidAmt}</td>
                            <td>{item.balance}</td>
                            <td>{item.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FeeReceiptSummary;
