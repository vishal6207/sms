import React, { useState } from 'react';
import styles from './Feehead.module.css';

const Feehead = () => {
    const [open, setOpen] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);
    const [formData, setFormData] = useState({
        description: '',
        period: '',
        refund: '',
        account: '',
        feeType: '',
    });
    const [feeHeads, setFeeHeads] = useState([
        { description: 'ANNUAL FEE', period: 'Yearly', refund: 'N', account: 'Cash A/c', feeType: 'Regular' },
    ]);

    const handleOpen = (index = null) => {
        if (index !== null) {
            setFormData(feeHeads[index]);
            setEditingIndex(index);
        } else {
            setFormData({
                description: '',
                period: '',
                refund: '',
                account: '',
                feeType: '',
            });
            setEditingIndex(null);
        }
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setEditingIndex(null);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCreateOrUpdate = () => {
        if (editingIndex !== null) {
            const updatedFeeHeads = feeHeads.map((fee, index) =>
                index === editingIndex ? formData : fee
            );
            setFeeHeads(updatedFeeHeads);
        } else {
            setFeeHeads([...feeHeads, formData]);
        }
        handleClose();
    };

    const handleDelete = (index) => {
        const updatedFeeHeads = feeHeads.filter((_, i) => i !== index);
        setFeeHeads(updatedFeeHeads);
    };

    return (
        <div className={styles.feeheadContainer}>
            <table className={styles.feeheadTable}>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Period</th>
                        <th>Refund</th>
                        <th>Acc. Name</th>
                        <th>Fee Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {feeHeads.map((fee, index) => (
                        <tr key={index}>
                            <td data-label="Description">{fee.description}</td>
                            <td data-label="Period">{fee.period}</td>
                            <td data-label="Refund">{fee.refund}</td>
                            <td data-label="Acc. Name">{fee.account}</td>
                            <td data-label="Fee Type">{fee.feeType}</td>
                            <td>
                                <button
                                    className={styles.feeheadEditButton}
                                    onClick={() => handleOpen(index)}
                                >
                                    Edit
                                </button>
                                <button
                                    className={styles.feeheadDeleteButton}
                                    onClick={() => handleDelete(index)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button className={styles.feeheadButton} onClick={() => handleOpen()}>Create</button>

            {open && (
                <div className={styles.feeheadModalOverlay}>
                    <div className={styles.feeheadModal}>
                        <h2>{editingIndex !== null ? 'Update' : 'Create'} Fee Head</h2>
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={formData.description}
                            onChange={handleChange}
                            className={styles.feeheadInput}
                            required={editingIndex === null}   
                        />
                        <input
                            type="text"
                            name="period"
                            placeholder="Period"
                            value={formData.period}
                            onChange={handleChange}
                            className={styles.feeheadInput}
                            required={editingIndex === null} 
                        />
                        <input
                            type="text"
                            name="refund"
                            placeholder="Refund"
                            value={formData.refund}
                            onChange={handleChange}
                            className={styles.feeheadInput}
                            required={editingIndex === null}
                        />
                        <input
                            type="text"
                            name="account"
                            placeholder="Acc. Name"
                            value={formData.account}
                            onChange={handleChange}
                            className={styles.feeheadInput}
                            required={editingIndex === null} 
                        />
                        <input
                            type="text"
                            name="feeType"
                            placeholder="Fee Type"
                            value={formData.feeType}
                            onChange={handleChange}
                            className={styles.feeheadInput}
                            required={editingIndex === null}
                        />
                        <button onClick={handleCreateOrUpdate} className={styles.feeheadModalButton}>
                            {editingIndex !== null ? 'Update' : 'Create'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Feehead;
