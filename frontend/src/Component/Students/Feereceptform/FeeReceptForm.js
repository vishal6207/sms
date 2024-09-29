import React, { useState } from 'react';
import styles from './FeeReceptForm.module.css';

const FeeReceptForm = () => {
    const [formData, setFormData] = useState({
        receiptNo: '912',
        cardNo: '',
        partPayment: false,
        date: '2017-04-26',
        admNo: '1591',
        class: '12th',
        rollNo: '1',
        student: 'Rohit Panchal',
        month: '1',
        totalFee: '1500',
        prevDue: '0',
        concession: '0',
        lateFee: '0',
        netTotal: '1500',
        paid: '1500',
        chequeNo: '0',
        balance: '0',
        mode: 'cash',
        bankName: '',
        ddDate: '2017-04-26',
        accounts: 'CASH A/c',
        remark: '',
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleCreateFee = () => {
        // This is where you'd add the logic to create the fee, e.g., making an API call
        console.log('Creating Student Fee:', formData);
        alert('Student fee created successfully!');
    };

    return (
        <div className={styles.feeReceiptContainer}>
            <h2 className={styles.title}>Fee receipt form:</h2>
            <div className={styles.feeFormContainer}>
                <div className={styles.feeFormGroupReceiptNo}>
                    <label>Receipt No:</label>
                    <input
                        type="text"
                        name="receiptNo"
                        value={formData.receiptNo}
                        onChange={handleInputChange}
                        className={styles.feeFormInput}
                    />
                </div>
                <div className={styles.feeFormGroupCardNo}>
                    <label>Card No:</label>
                    <input
                        type="text"
                        name="cardNo"
                        value={formData.cardNo}
                        onChange={handleInputChange}
                        className={styles.feeFormInput}
                    />
                </div>
                <div className={styles.feeFormGroupPartPayment}>
                    <label>Part Payment:</label>
                    <input
                        type="checkbox"
                        name="partPayment"
                        checked={formData.partPayment}
                        onChange={handleInputChange}
                        className={styles.feeFormCheckbox}
                    />
                </div>
                <div className={styles.feeFormGroupDate}>
                    <label>Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className={styles.feeFormInput}
                    />
                </div>
                <div className={styles.feeFormGroupAdmNo}>
                    <label>Adm. No:</label>
                    <input
                        type="text"
                        name="admNo"
                        value={formData.admNo}
                        onChange={handleInputChange}
                        className={styles.feeFormInput}
                    />
                </div>
                <div className={styles.feeFormGroupClass}>
                    <label>Class:</label>
                    <input
                        type="text"
                        name="class"
                        value={formData.class}
                        onChange={handleInputChange}
                        className={styles.feeFormInput}
                    />
                </div>
                <div className={styles.feeFormGroupRollNo}>
                    <label>Roll No:</label>
                    <input
                        type="text"
                        name="rollNo"
                        value={formData.rollNo}
                        onChange={handleInputChange}
                        className={styles.feeFormInput}
                    />
                </div>
                <div className={styles.feeFormGroupStudent}>
                    <label>Student:</label>
                    <input
                        type="text"
                        name="student"
                        value={formData.student}
                        onChange={handleInputChange}
                        className={styles.feeFormInput}
                    />
                </div>
                <div className={styles.feeFormGroupMonth}>
                    <label>Month:</label>
                    <input
                        type="text"
                        name="month"
                        value={formData.month}
                        onChange={handleInputChange}
                        className={styles.feeFormInput}
                    />
                </div>
                <div className={styles.feeFormGroupTotalFee}>
                    <label>Total Fee:</label>
                    <input
                        type="text"
                        name="totalFee"
                        value={formData.totalFee}
                        onChange={handleInputChange}
                        className={styles.feeFormInput}
                    />
                </div>
                <div className={styles.feeFormGroupPrevDue}>
                    <label>Prev. Due:</label>
                    <input
                        type="text"
                        name="prevDue"
                        value={formData.prevDue}
                        onChange={handleInputChange}
                        className={styles.feeFormInput}
                    />
                </div>
                <div className={styles.feeFormGroupConcession}>
                    <label>Concession:</label>
                    <input
                        type="text"
                        name="concession"
                        value={formData.concession}
                        onChange={handleInputChange}
                        className={styles.feeFormInput}
                    />
                </div>
                <div className={styles.feeFormGroupLateFee}>
                    <label>Late Fee:</label>
                    <input
                        type="text"
                        name="lateFee"
                        value={formData.lateFee}
                        onChange={handleInputChange}
                        className={styles.feeFormInput}
                    />
                </div>
                <div className={styles.feeFormGroupNetTotal}>
                    <label>Net Total:</label>
                    <input
                        type="text"
                        name="netTotal"
                        value={formData.netTotal}
                        onChange={handleInputChange}
                        className={styles.feeFormInput}
                    />
                </div>
                <div className={styles.feeFormGroupPaid}>
                    <label>Paid:</label>
                    <input
                        type="text"
                        name="paid"
                        value={formData.paid}
                        onChange={handleInputChange}
                        className={styles.feeFormInput}
                    />
                </div>
                <div className={styles.feeFormGroupChequeNo}>
                    <label>Cheque/DD No:</label>
                    <input
                        type="text"
                        name="chequeNo"
                        value={formData.chequeNo}
                        onChange={handleInputChange}
                        className={styles.feeFormInput}
                    />
                </div>
                <div className={styles.feeFormGroupBalance}>
                    <label>Balance:</label>
                    <input
                        type="text"
                        name="balance"
                        value={formData.balance}
                        onChange={handleInputChange}
                        className={styles.feeFormInput}
                    />
                </div>
                <div className={styles.feeFormGroupMode}>
                    <label>Mode:</label>
                    <input
                        type="text"
                        name="mode"
                        value={formData.mode}
                        onChange={handleInputChange}
                        className={styles.feeFormInput}
                    />
                </div>
                <div className={styles.feeFormGroupBankName}>
                    <label>Bank Name:</label>
                    <select
                        name="bankName"
                        value={formData.bankName}
                        onChange={handleInputChange}
                        className={styles.feeFormSelect}
                    >
                        <option value="">Select...</option>
                        <option value="Bank A">Bank A</option>
                        <option value="Bank B">Bank B</option>
                        <option value="Bank C">Bank C</option>
                    </select>
                </div>
                <div className={styles.feeFormGroupDdDate}>
                    <label>DD Date:</label>
                    <input
                        type="date"
                        name="ddDate"
                        value={formData.ddDate}
                        onChange={handleInputChange}
                        className={styles.feeFormInput}
                    />
                </div>
                <div className={styles.feeFormGroupAccounts}>
                    <label>Accounts:</label>
                    <input
                        type="text"
                        name="accounts"
                        value={formData.accounts}
                        onChange={handleInputChange}
                        className={styles.feeFormInput}
                    />
                </div>
                <div className={styles.feeFormGroupRemark}>
                    <label>Remark:</label>
                    <input
                        type="text"
                        name="remark"
                        value={formData.remark}
                        onChange={handleInputChange}
                        className={styles.feeFormInput}
                    />
                </div>
            </div>
            <div className={styles.feeButtonGroup}>
                <button onClick={handleCreateFee} className={styles.feeButtonCreate}>Create Student Fee</button>
                <button className={styles.feeButtonAddTransport}>Add Transport</button>
            </div>

            <div className={styles.feeTableContainer}>
                <h3 className={styles.feeTableTitle}>Student Fee Receipt</h3>
                <table className={styles.feeTable}>
                    <thead>
                        <tr className={styles.feeTableHeaderRow}>
                            <th className={styles.feeTableHeader}>APR</th>
                            <th className={styles.feeTableHeader}>MAY</th>
                            <th className={styles.feeTableHeader}>JUN</th>
                            <th className={styles.feeTableHeader}>JUL</th>
                            <th className={styles.feeTableHeader}>AUG</th>
                            <th className={styles.feeTableHeader}>SEP</th>
                            <th className={styles.feeTableHeader}>OCT</th>
                            <th className={styles.feeTableHeader}>NOV</th>
                            <th className={styles.feeTableHeader}>DEC</th>
                            <th className={styles.feeTableHeader}>JAN</th>
                            <th className={styles.feeTableHeader}>FEB</th>
                            <th className={styles.feeTableHeader}>MAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={styles.feeTableRow}>
                            <td className={styles.feeTableCell}>910</td>
                            <td className={styles.feeTableCell}>911</td>
                            <td className={styles.feeTableCell}>912</td>
                            <td className={styles.feeTableCell}>0</td>
                            <td className={styles.feeTableCell}>0</td>
                            <td className={styles.feeTableCell}>0</td>
                            <td className={styles.feeTableCell}>0</td>
                            <td className={styles.feeTableCell}>0</td>
                            <td className={styles.feeTableCell}>0</td>
                            <td className={styles.feeTableCell}>0</td>
                            <td className={styles.feeTableCell}>0</td>
                            <td className={styles.feeTableCell}>0</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className={styles.feeTableContainer}>
                <h3 className={styles.feeTableTitle}>Student Fee Ledger</h3>
                <table className={styles.feeTable}>
                    <thead>
                        <tr className={styles.feeTableHeaderRow}>
                            <th className={styles.feeTableHeader}>Receipt</th>
                            <th className={styles.feeTableHeader}>Date</th>
                            <th className={styles.feeTableHeader}>Month</th>
                            <th className={styles.feeTableHeader}>Prev. Dues</th>
                            <th className={styles.feeTableHeader}>Total Fee</th>
                            <th className={styles.feeTableHeader}>Late Fine</th>
                            <th className={styles.feeTableHeader}>Concession</th>
                            <th className={styles.feeTableHeader}>Paid</th>
                            <th className={styles.feeTableHeader}>Balance</th>
                            <th className={styles.feeTableHeader}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={styles.feeTableRow}>
                            <td className={styles.feeTableCell}>910</td>
                            <td className={styles.feeTableCell}>11-08-2016</td>
                            <td className={styles.feeTableCell}>1</td>
                            <td className={styles.feeTableCell}>0</td>
                            <td className={styles.feeTableCell}>11500</td>
                            <td className={styles.feeTableCell}>0</td>
                            <td className={styles.feeTableCell}>0</td>
                            <td className={styles.feeTableCell}>11500</td>
                            <td className={styles.feeTableCell}>0</td>
                            <td className={styles.feeTableCell}>Paid</td>
                        </tr>
                        <tr className={styles.feeTableRow}>
                            <td className={styles.feeTableCell}>911</td>
                            <td className={styles.feeTableCell}>17-08-2016</td>
                            <td className={styles.feeTableCell}>1</td>
                            <td className={styles.feeTableCell}>0</td>
                            <td className={styles.feeTableCell}>1500</td>
                            <td className={styles.feeTableCell}>0</td>
                            <td className={styles.feeTableCell}>0</td>
                            <td className={styles.feeTableCell}>1500</td>
                            <td className={styles.feeTableCell}>0</td>
                            <td className={styles.feeTableCell}>Paid</td>
                        </tr>
                        <tr className={styles.feeTableRow}>
                            <td className={styles.feeTableCell}>912</td>
                            <td className={styles.feeTableCell}>17-08-2016</td>
                            <td className={styles.feeTableCell}>1</td>
                            <td className={styles.feeTableCell}>0</td>
                            <td className={styles.feeTableCell}>1500</td>
                            <td className={styles.feeTableCell}>0</td>
                            <td className={styles.feeTableCell}>0</td>
                            <td className={styles.feeTableCell}>1500</td>
                            <td className={styles.feeTableCell}>0</td>
                            <td className={styles.feeTableCell}>Paid</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className={styles.feeActionButtons}>
                <button className={styles.feeActionButtonCreate}>Create</button>
                <button className={styles.feeActionButtonCancelled}>Cancelled</button>
                <button className={styles.feeActionButtonPrint}>Print</button>
                <button className={styles.feeActionButtonCancel}>Cancel</button>
                <button className={styles.feeActionButtonClose}>Close</button>
            </div>
        </div>
    );
};

export default FeeReceptForm;
