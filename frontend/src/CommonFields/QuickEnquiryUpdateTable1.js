import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
// import { demoApi } from '../../../../Service/ApiServices';
 import DataTable from './DataTable/DataTable';


function  QuickEnquiryUpdateTable1() {
    const [detaildata, setDetailData] = useState([])
    const [opendetailbox, setOpenDetailBox] = useState(false)
    const [Data, setData] = useState([])
    const updateddata = (id,) => {
        let i = 0;
        console.log(i, id)
        i++;
    }
    const DetailShow = (id) => {
        let i = 0;
        console.log(i, id)
        i++;
    }
    const columns = [
        { Header: 'Name', accessor: 'name.firstname' },
        { Header: 'UserName', accessor: 'username' },
        { Header: 'Password', accessor: 'password' },
        // { Header: 'Status', accessor: 'paid', boolvalue: ['Unpaid', 'Paid'] },
        { Header: 'Action', accessor: [{ name: "Send", fxn: updateddata }, { name: "Edit", fxn: updateddata }, { name: "Delete", fxn: updateddata }, { name: "Detail", fxn: DetailShow }] },
    ];

    // useEffect(() => {
    //     demoApi().then(res => {
    //         if (res.status) {
    //             setData(res?.response?.data);
    //             console.log(res?.response?.data)
    //         }
    //     })
    // }, []);
    const handleSelectedrow = (data) => {
        console.log(data)
    }

    return (
        <div className='quicktable1' >
            <DataTable columns={columns} heading={"Quick Enquiry Update"} data={Data} opendetail={setOpenDetailBox} details={setDetailData} selectedrowFxn={handleSelectedrow} selectedrowShowButtonText="Delete1" />
            <Modal
                show={opendetailbox}
                onHide={() => setOpenDetailBox(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div className=''>
                            <h4 class="title ps-3">Account Details</h4>
                            {detaildata.map((res, index) => (
                                { res }
                            ))}
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>

                    </div>


                </Modal.Body>

            </Modal>
        </div>
    )
}

export default QuickEnquiryUpdateTable1