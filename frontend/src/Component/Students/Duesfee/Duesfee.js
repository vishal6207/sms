import React, { useRef } from 'react';
import styles from './Duesfee.module.css';
import DataTable from '../../../CommonFields/DataTable/DataTable';

const Duesfee = () => {
    const printRef = useRef();
    const handlePrint = () => {
        const printContent = printRef.current.innerHTML;
        const originalContent = document.body.innerHTML;

        document.body.innerHTML = printContent;
        window.print();
        document.body.innerHTML = originalContent;
    };

    const columns = [
        { Header: "adm_no", accessor: "adm_no" },
        { Header: "name", accessor: "name" },
        { Header: "roll_no", accessor: "roll_no" },
        { Header: "dues", accessor: "dues" },
    ];

    const data = [
        { adm_no: '1591', name: 'AARAV CHIKARA', roll_no: '1', dues: '0' },
        { adm_no: '1514', name: 'ARUSH SRIVASTAVA', roll_no: '2', dues: '0' },
        { adm_no: '1491', name: 'AYUSH CHAUDHARY', roll_no: '3', dues: '10000' },
        { adm_no: '1513', name: 'ANANYA KASHYAP', roll_no: '4', dues: '10000' },
        { adm_no: '1495', name: 'ANKIT SINGH', roll_no: '5', dues: '0' }
    ];

    return (
        <div className={styles.feeContainer}>
            <div ref={printRef}>
                <h2 className={styles.feeTitle}>Student old due fee:</h2>
                <p className={styles.feeDescription}>Class wise, admno wise,</p>

                <DataTable 
                    columns={columns}
                    data={data}  
                    heading="Dues Fee Table" 
                />
            </div>

            <div className={styles.buttonContainer}>
                <button className={styles.btn} onClick={handlePrint}>Print</button>
            </div>
        </div>
    );
};

export default Duesfee;
