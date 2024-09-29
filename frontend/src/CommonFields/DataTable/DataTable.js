import React, { useEffect, useState } from 'react';
import "./DataTable.css";
import Loader from '../Loader/Loader';

const DataTable = ({ columns, data, opendetail, details, heading, loading }) => {
    const [searchValue, setsearchValue] = useState("");
    const [filterValue, setFilterValue] = useState("All");
    const [filteredData, setFilteredData] = useState([]);
    const [noResults, setNoResults] = useState(false);

    useEffect(() => {
        const updatedFilteredData = data?.filter((val) => {
            const isSearchMatch = columns?.some((column) => {
                const cellValue = String(val[column.accessor]).toLowerCase();
                return cellValue.includes(searchValue.toLowerCase());
            });
            return isSearchMatch;
        });
        setFilteredData(updatedFilteredData);
        setNoResults(updatedFilteredData?.length === 0);
    }, [searchValue, data, columns]);

    const handleSearchChange = (e) => {
        setsearchValue(e.target.value);
    };

    const handleFilterChange = (value) => {
        setFilterValue(value);
        setsearchValue("");
        filterafterfilterhange(value);
    };

    const filterafterfilterhange = (value) => {
        const updatedData = data?.filter((val) => {
            if (value === "All") {
                return val;
            } else if (value?.toLowerCase() === "paid") {
                return val.paid === true;
            } else if (value?.toLowerCase() === "unpaid") {
                return val.paid === false;
            }
            return val;
        });
        setFilteredData(updatedData);
    };

    return (
        <div className='acs-dyn-table'>
            {heading && (
                <h1 className='heading-h1'>{heading}</h1>
            )}

            <div className='d-flex justify-content-between align-items-center filter-search-section' style={{ flexWrap: 'wrap' }}>
                <div className="input-group mb-3" style={{ maxWidth: "fit-content" }}>
                    <span className="input-group-text bg-white border border-end-0" id="basic-addon1">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <input type="text" className="form-control border border-start-0" value={searchValue} onChange={handleSearchChange} placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="dropdown mb-3">
                    <button className="btn border btn-sm dropdown-toggle d-flex justify-content-between align-items-center" style={{ minWidth: "120px" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Filter: {filterValue}
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <button className="dropdown-item" onClick={() => handleFilterChange('All')}>
                                All
                            </button>
                        </li>
                        <li>
                            <button className="dropdown-item" onClick={() => handleFilterChange('Paid')}>
                                Paid
                            </button>
                        </li>
                        <li>
                            <button className="dropdown-item" onClick={() => handleFilterChange('Unpaid')}>
                                Unpaid
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            {noResults ? (
                loading ? (
                    <Loader />
                ) : (
                    <div className='d-flex flex-column text-center border-top'>
                        <img src='' alt='Empty result' style={{ maxWidth: '250px', margin: 'auto' }} />
                        <span>No result found for <b>{searchValue}</b>.</span>
                    </div>
                )
            ) : (
                <div className='data-table-section'>
                    <table className="table table-bordered custom-style-table">
                        <thead>
                            <tr>
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
                                    {columns?.map((column) => (
                                        <td key={column.accessor} className={`${column.accessor === "video" ? "video-sec-width" : ""}`}>
                                            {typeof row[column.accessor] === 'boolean' && (
                                                row[column.accessor] ? column.boolvalue[1] : column.boolvalue[0]
                                            )}
                                            {Array.isArray(column.accessor) && (
                                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", flexWrap: "nowrap" }}>
                                                    {column?.accessor?.map((res, index) => (
                                                        <button className='border-0 rounded text-light acs-btn-action' onClick={() => res.fxn(row?.id)}>
                                                            {res.name === "Send" && (
                                                                <i className="fa-solid fa-file-import"></i>
                                                            )}
                                                            {res.name === "Edit" && (
                                                                <i className="fa-solid fa-pen-to-square"></i>
                                                            )}
                                                            {res.name === "Detail" && (
                                                                <i className="fa-solid fa-circle-info"></i>
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
                                            ) : (
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
            )}
        </div>
    );
};

export default DataTable;
