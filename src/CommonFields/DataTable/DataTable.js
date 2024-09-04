import React, { useEffect, useState } from 'react';
// import SearchEmptyImage from "../../Media/Images/User/images.png"
import "./DataTable.css"
import Loader from '../Loader/Loader';



const DataTable = ({ columns, data, opendetail, details, selectedrowShowButtonText, selectedrowFxn, heading, loading }) => {

    const [searchValue, setsearchValue] = useState("")
    const [filterValue, setFilterValue] = useState("All");
    const [filteredData, setFilteredData] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [noResults, setNoResults] = useState(false);
    useEffect(() => {
        // ===================search ===============

        const updatedFilteredData = data?.filter((val) => {
            const isSearchMatch = columns?.some((column) => {
                const cellValue = String(val[column.accessor]).toLowerCase();
                return cellValue.includes(searchValue.toLowerCase());
            });


            return isSearchMatch;
        });
        setFilteredData(updatedFilteredData);
        setNoResults(filteredData?.length === 0);
    }, [searchValue, data, columns, filteredData?.length]);

    const handleSearchChange = (e) => {
        setsearchValue(e.target.value);
    };
    const handleFilterChange = (value) => {
        setFilterValue(value);
        setsearchValue("")
        filterafterfilterhange(value);

    }
    const filterafterfilterhange = (value) => {
        const updatedData = data?.filter((val) => {
            if (value === "All") {
                return val;
            } else if (value?.toLowerCase() === "paid") {
                console.log("paid jjj", val.paid);
                return val.paid === true;
            } else if (value?.toLowerCase() === "unpaid") {
                console.log("paid jjj", val.paid);
                return val.paid === false;
            }
            return val
        });
        setFilteredData(updatedData);
    }
    const handleCheckboxChange = (id) => {
        const updatedSelectedRows = [...selectedRows];
        const index = updatedSelectedRows.indexOf(id);
        if (index === -1) {
            updatedSelectedRows.push(id);
        } else {
            updatedSelectedRows.splice(index, 1);
        }
        setSelectedRows(updatedSelectedRows);
    };

    const handleSelectAllChange = () => {
        if (selectAll) {
            setSelectedRows([]);
        } else {
            const allRowIds = filteredData?.map((row) => row.id);
            setSelectedRows(allRowIds);
        }
        setSelectAll(!selectAll);
    };


    return (
        <div className='acs-dyn-table'>
            {heading && (
                <h1 className='heading-h1'>{heading}</h1>
            )}

            <div className='d-flex justify-content-between align-items-center filter-search-section' style={{ flexWrap: 'wrap' }}>
                <div class="input-group mb-3" style={{ maxWidth: "fit-content" }}>
                    <span class="input-group-text bg-white border border-end-0" id="basic-addon1"><i class="fa-solid fa-magnifying-glass"></i></span>
                    <input type="text" class="form-control border border-start-0" value={searchValue} onChange={handleSearchChange} placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                {selectedRows?.length > 0 && (
                    <button onClick={() => selectedrowFxn(selectedRows)} className='acs-btn-select-row border-0 text-light rounded p-1 mb-2'><i class="fa-solid fa-trash-can"></i>{selectedRows?.length > 1 ? selectedrowShowButtonText + " Seleted Row" : selectedrowShowButtonText}</button>
                )}
                <div class="dropdown mb-3" >
                    <button class="btn border  btn-sm dropdown-toggle d-flex justify-content-between align-items-center" style={{ minWidth: "120px" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Filter: {filterValue}
                    </button>
                    <ul class="dropdown-menu">
                        <li>
                            <button class="dropdown-item" onClick={() => handleFilterChange('All')}>
                                All
                            </button>
                        </li>

                        <li>
                            <button class="dropdown-item" onClick={() => handleFilterChange('Paid')}>
                                Paid
                            </button>
                        </li>
                        <li>
                            <button class="dropdown-item" onClick={() => handleFilterChange('Unpaid')}>
                                Unpaid
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

           {noResults ? (
                loading ? (
                    <Loader />
                ) :(
                    <div className='d-flex flex-column text-center border-top'>
                        <img src=''alt='Empty result' style={{ maxWidth: '250px', margin: 'auto' }} />
                        <span>No result found for <b>{searchValue}</b>.</span>
                    </div>
                )

            ) : (
                <div className='data-table-section'>
                    <table className="table table-bordered custom-style-table">
                        <thead>
                            <tr>
                                <th>
                                    <input type="checkbox" checked={selectAll} onChange={handleSelectAllChange} />
                                </th>
                                {columns?.map((column) => (
                                    <th key={column.accessor} scope="col">
                                        {column.Header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData?.map((row, index) => (
                                <tr key={index}>
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={selectedRows.includes(row.id)}
                                            onChange={() => handleCheckboxChange(row.id)}
                                        />
                                    </td>
                                    {columns?.map((column) => (
                                        <td key={column.accessor} className={`${column.accessor === "video" ? "video-sec-width" : ""}`}>
                                            {typeof row[column.accessor] === 'boolean' && (
                                                row[column.accessor] ? column.boolvalue[1] : column.boolvalue[0]
                                            )}
                                            {Array.isArray(column.accessor) && (
                                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", flexWrap: "nowrap" }}>
                                                    {column?.accessor?.map((res, index) => (
                                                        <button className='border-0 rounded  text-light acs-btn-action ' onClick={() => res.fxn(row?.id)}>
                                                            {res.name === "Send" && (
                                                                <i class="fa-solid fa-file-import"></i>
                                                            )}
                                                            {res.name === "Edit" && (
                                                                <i class="fa-solid fa-pen-to-square"></i>
                                                            )}
                                                            {res.name === "Delete" && (
                                                                <i class="fa-solid fa-trash-can"></i>
                                                            )}
                                                            {res.name === "Detail" && (
                                                                <i class="fa-solid fa-circle-info"></i>
                                                            )}

                                                            {res.name}
                                                        </button>

                                                    ))}
                                                </div>
                                            )}


                                            {column.accessor === "video" ? (
                                                <iframe
                                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                                    title="Video"
                                                    allowFullScreen
                                                ></iframe>

                                            )
                                                : (
                                                    row[column.accessor] !== undefined
                                                        ? row[column.accessor]
                                                        : 'N/A'
                                                )}

                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )
            }
        </div >
    );
};

export default DataTable;