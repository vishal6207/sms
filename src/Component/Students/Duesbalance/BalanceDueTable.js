import React, { useState , useEffect, useRef} from 'react';
import DataTable from '../../../CommonFields/DataTable/DataTable'; // Adjust the path if needed
import styles from './BalanceDueTable.module.css';


const columns = [
    {
        Header: 'Selected',
        accessor: 'id',
        Cell: ({ row }) => (
            <input
                type="checkbox"
                checked={row.isSelected}
                onChange={() => row.toggleRowSelected()}
            />
        ),
    },
    {
        Header: 'Admission No',
        accessor: 'admission_no',
    },
    {
        Header: 'Student Name',
        accessor: 'student_name',
    },
    {
        Header: 'Class',
        accessor: 'class',
    },
    {
        Header: 'Roll No',
        accessor: 'roll_no',
    },
    {
        Header: 'Father Name',
        accessor: 'father_name',
    },
    {
        Header: 'Contact No',
        accessor: 'contact_no',
    },
    {
        Header: 'Balance Dues',
        accessor: 'balance_dues',
    },
];
const data = [
    { id: 1, admission_no: 1545, student_name: 'AADITYA RAGHUVANSHI', class: 'II A', roll_no: 1, father_name: 'MR/GAJENDRA SINGH', contact_no: '874300774', balance_dues: 0 },
    { id: 2, admission_no: 538, student_name: 'AKSHARA TEOTIA', class: 'II A', roll_no: 2, father_name: 'MR/SURESH SINGH', contact_no: '874300774', balance_dues: 3300 },
    { id: 3, admission_no: 1316, student_name: 'AKSH TYAGI', class: 'II A', roll_no: 3, father_name: 'MR/DEEPAK', contact_no: '874300774', balance_dues: 0 },
    { id: 4, admission_no: 1519, student_name: 'ANAS', class: 'II A', roll_no: 4, father_name: 'MR/IMRAN', contact_no: '874300774', balance_dues: 0 },
    { id: 5, admission_no: 1429, student_name: 'ANI CHAUDHARY', class: 'II A', roll_no: 5, father_name: 'MR/JITENDRA KUMAR', contact_no: '874300774', balance_dues: 5050 },
    { id: 6, admission_no: 1229, student_name: 'ANIKET CHAUDHARY', class: 'II A', roll_no: 6, father_name: 'MR/SURAJPAL', contact_no: '874300774', balance_dues: 5050 },
    { id: 7, admission_no: 1421, student_name: 'ANJALI SINGH', class: 'II A', roll_no: 7, father_name: 'MR/RAM LAKHAN SI...', contact_no: '874300774', balance_dues: 5050 },
    { id: 8, admission_no: 1100, student_name: 'ARAV', class: 'II A', roll_no: 8, father_name: 'MR/ARUN KUMAR S...', contact_no: '874300774', balance_dues: 5050 },
    { id: 9, admission_no: 1291, student_name: 'ARYA SHARMA', class: 'II A', roll_no: 9, father_name: 'MR/SANJAY SHARMA', contact_no: '874300774', balance_dues: 5050 },
    { id: 10, admission_no: 658, student_name: 'ARYAN DANGI', class: 'II A', roll_no: 10, father_name: 'MR/PRAVINDRA KU...', contact_no: '874300774', balance_dues: 0 },
    { id: 11, admission_no: 1424, student_name: 'AVISHKAR', class: 'II A', roll_no: 11, father_name: 'MR/RAJENDRA PRA...', contact_no: '874300774', balance_dues: 5050 },
    { id: 12, admission_no: 1111, student_name: 'AYUSH MISHRA', class: 'II A', roll_no: 12, father_name: 'MR/VINOD KUMAR', contact_no: '874300774', balance_dues: 0 },
    { id: 13, admission_no: 1590, student_name: 'CHIRAG BHARADWAJ', class: 'II A', roll_no: 13, father_name: 'MR/INDRESH KUMA...', contact_no: '874300774', balance_dues: 3500 },
    { id: 14, admission_no: 533, student_name: 'DARSHIT TYAGI', class: 'II A', roll_no: 14, father_name: 'MR/PUSHPENDRA T...', contact_no: '874300774', balance_dues: 5050 },
    { id: 15, admission_no: 858, student_name: 'GEETIKA YADAV', class: 'II A', roll_no: 15, father_name: 'MR/JAINENDRA SIN...', contact_no: '874300774', balance_dues: 5050 },
    { id: 16, admission_no: 1344, student_name: 'ΚΑΝΙΚΑ ΚΑΡOOR', class: 'II A', roll_no: 16, father_name: 'MR/NARENDRA KAP...', contact_no: '874300774', balance_dues: 4300 },
    { id: 17, admission_no: 990, student_name: 'KANISHKA RAJ', class: 'II A', roll_no: 17, father_name: 'MR/SANJAY KUMAR...', contact_no: '874300774', balance_dues: 505}]
const BalanceDueTable = () => {
      
    const [DueBalance, setDueBalance] = useState(0);
    useEffect(() => {
        const totalDueBalance = data.reduce((acc, item) => acc + item.balance_dues, 0);
        setDueBalance(totalDueBalance);
    }, []);
    const printRef = useRef();

    
    const handlePrint = () => {
        const printContent = printRef.current.innerHTML;
        const originalContent = document.body.innerHTML;

        document.body.innerHTML = printContent;
        window.print();
        document.body.innerHTML = originalContent;
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Dues Balance of Fee:</h2>
            <p className={styles.totalDue}>
    Total Dues Balance: <h1>{DueBalance}</h1>
</p>    <div ref={printRef}>  

            <DataTable
                columns={columns}
                data={data}
                opendetail={false}
                details={null}
                heading="Balance Due Table"
                loading={false}
            />
            </div>
            <div className={styles.buttonContainer}>
                <button onClick={handlePrint} className={styles.actionButton}>Print</button>
                
            </div> 
        </div>
    );
};

export default BalanceDueTable;
