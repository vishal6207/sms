import React, { useState } from 'react';
import styles from './FeeExempted.module.css';
import DataTable from '../../../CommonFields/DataTable/DataTable';

const FeeExempted = () => {
    const [data, setData] = useState([
        { Fee: 'TUITION FEE', Amount: 1500 },
        { Fee: 'ANNUAL FEE', Amount: 3500 },
    ]);

    const columns = [
        { Header: "Fee", accessor: "Fee" },
        { Header: "Amount", accessor: "Amount" },
    ];

    const handleUpdate = () => {
       
        const updatedData = data.map(item => ({
            ...item,
            Amount: item.Amount + 250,
        }));
        setData(updatedData);
    };

    return (
        <div className={styles.container}>
            <h1>Fee Exempted</h1>
            <DataTable  
                columns={columns}
                data={data}
                heading="Exempted Fee Table" 
                loading={false}
            />
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={handleUpdate}>Update</button>
            </div>
        </div>
    );
};

export default FeeExempted;
