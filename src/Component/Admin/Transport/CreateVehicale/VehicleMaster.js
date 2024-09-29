import React, { useState } from 'react';
import { Table, Button, Form, Row, Col, Container } from 'react-bootstrap';
import styles from './VehicleMaster.module.css';

const VehicleMaster = () => {
  const [vehicleList, setVehicleList] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [vehiclePhoto, setVehiclePhoto] = useState(null);
  const [driverPhoto, setDriverPhoto] = useState(null);
  const [formData, setFormData] = useState({
    vehicleNo: '',
    vehicleType: 'Bus',
    vehicleMake: '',
    vehicleModelYear: '',
    fuelType: 'Diesel',
    seatingCapacity: '',
    chassisNo: '',
    engineNo: '',
    driverName: '',
    vehicleStatus: 'Own',
  });
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const handleImageChange = (e, setImage) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = (setImage) => {
    setImage(null);
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.vehicleNo) errors.vehicleNo = 'Vehicle number is required';
    if (!formData.vehicleMake) errors.vehicleMake = 'Vehicle make is required';
    if (!formData.vehicleModelYear) errors.vehicleModelYear = 'Vehicle model year is required';
    if (!formData.seatingCapacity) errors.seatingCapacity = 'Seating capacity is required';
    if (!formData.chassisNo) errors.chassisNo = 'Chassis number is required';
    if (!formData.engineNo) errors.engineNo = 'Engine number is required';
    if (!formData.driverName) errors.driverName = 'Driver name is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleRegister = () => {
    if (validateForm()) {
      setVehicleList([...vehicleList, { ...formData, vehiclePhoto, driverPhoto }]);
      clearForm();
    }
  };

  const handleUpdate = () => {
    if (validateForm()) {
      const updatedList = vehicleList.map((vehicle, index) =>
        index === selectedVehicle ? { ...formData, vehiclePhoto, driverPhoto } : vehicle
      );
      setVehicleList(updatedList);
      clearForm();
    }
  };

  const handleDelete = (index) => {
    setVehicleList(vehicleList.filter((_, i) => i !== index));
    clearForm(); // Clear form on deletion
  };

  const clearForm = () => {
    setFormData({
      vehicleNo: '',
      vehicleType: 'Bus',
      vehicleMake: '',
      vehicleModelYear: '',
      fuelType: 'Diesel',
      seatingCapacity: '',
      chassisNo: '',
      engineNo: '',
      driverName: '',
      vehicleStatus: 'Own',
    });
    setVehiclePhoto(null);
    setDriverPhoto(null);
    setSelectedVehicle(null);
    setFormErrors({});
  };

  const handleEdit = (index) => {
    const vehicle = vehicleList[index];
    setFormData(vehicle);
    setVehiclePhoto(vehicle.vehiclePhoto);
    setDriverPhoto(vehicle.driverPhoto);
    setSelectedVehicle(index);
  };

  return (
    <div className={styles.vehicleMasterContainer}>
      <h2 className={styles.vehicleMasterHeader}>Vehicle Registration </h2>
      <Form className={styles.vehicleForm}>
        <Row>
          <Col md={8}>
            {/* Form Rows */}
            <Row className={styles.formRow}>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Vehicle No :</Form.Label>
                  <Form.Control
                    type="text"
                    name="vehicleNo"
                    value={formData.vehicleNo}
                    onChange={handleInputChange}
                    placeholder="Enter vehicle number"
                    isInvalid={!!formErrors.vehicleNo}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.vehicleNo}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Vehicle Type :</Form.Label>
                  <Form.Control
                    as="select"
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleInputChange}
                    required
                  >
                    <option>Bus</option>
                    <option>Car</option>
                    <option>Truck</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row className={styles.formRow}>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Vehicle Make :</Form.Label>
                  <Form.Control
                    type="text"
                    name="vehicleMake"
                    value={formData.vehicleMake}
                    onChange={handleInputChange}
                    placeholder="Enter vehicle make"
                    isInvalid={!!formErrors.vehicleMake}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.vehicleMake}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Vehicle Model Year :</Form.Label>
                  <Form.Control
                    type="text"
                    name="vehicleModelYear"
                    value={formData.vehicleModelYear}
                    onChange={handleInputChange}
                    placeholder="Enter model year"
                    isInvalid={!!formErrors.vehicleModelYear}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.vehicleModelYear}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row className={styles.formRow}>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Fuel Type :</Form.Label>
                  <Form.Control
                    as="select"
                    name="fuelType"
                    value={formData.fuelType}
                    onChange={handleInputChange}
                    required
                  >
                    <option>Diesel</option>
                    <option>Petrol</option>
                    <option>LPG/CNG</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Seating Capacity :</Form.Label>
                  <Form.Control
                    type="number"
                    name="seatingCapacity"
                    value={formData.seatingCapacity}
                    onChange={handleInputChange}
                    placeholder="Enter seating capacity"
                    isInvalid={!!formErrors.seatingCapacity}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.seatingCapacity}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row className={styles.formRow}>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Chassis No :</Form.Label>
                  <Form.Control
                    type="text"
                    name="chassisNo"
                    value={formData.chassisNo}
                    onChange={handleInputChange}
                    placeholder="Enter chassis number"
                    isInvalid={!!formErrors.chassisNo}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.chassisNo}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Engine No :</Form.Label>
                  <Form.Control
                    type="text"
                    name="engineNo"
                    value={formData.engineNo}
                    onChange={handleInputChange}
                    placeholder="Enter engine number"
                    isInvalid={!!formErrors.engineNo}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.engineNo}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row className={styles.formRow}>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Driver Name :</Form.Label>
                  <Form.Control
                    type="text"
                    name="driverName"
                    value={formData.driverName}
                    onChange={handleInputChange}
                    placeholder="Enter driver name"
                    isInvalid={!!formErrors.driverName}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.driverName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Vehicle Status :</Form.Label>
                  <Form.Control
                    as="select"
                    name="vehicleStatus"
                    value={formData.vehicleStatus}
                    onChange={handleInputChange}
                    required
                  >
                    <option>Own</option>
                    <option>Leased</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
          </Col>
          <Col md={4} className={styles.imageSection}>
            <div className={styles.imagePreview}>

              {vehiclePhoto ? (
                <img src={vehiclePhoto} alt="Vehicle" className={styles.previewImage} />
              ) : (
                <div className={styles.placeholderImage}>Vehicle Image</div>
              )}
              <Form.Group className="mt-2 ">
              <Form.Label>Vehicle Photo :</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, setVehiclePhoto)}
              />
            </Form.Group>
              <Button
                variant="secondary"
                onClick={() => handleDeleteImage(setVehiclePhoto)}
                className="mt-2 "
                disabled={!vehiclePhoto}
              >
                Delete Image
                
              </Button>
              
            </div>
            <div className={styles.imagePreview}>
              {driverPhoto ? (
                <img src={driverPhoto} alt="Driver" className={styles.previewImage} />
              ) : (
                <div className={styles.placeholderImage}>Driver Image</div>
              )}
              <Form.Group className="mt-2 ms-3">
              <Form.Label>Driver Photo :</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, setDriverPhoto)}
              />
            </Form.Group>
              <Button
                variant="secondary"
                onClick={() => handleDeleteImage(setDriverPhoto)}
                className="mt-2"
                disabled={!driverPhoto}
              >
                Delete Image
              </Button>
              
            </div>
            
            
          </Col>
        </Row>
      </Form>

      <Table responsive className={`border-rounded mt-4 ${styles.tableCustom}`}>
        <thead>
          <tr>
            <th>Vehicle ID</th>
            <th>Vehicle No</th>
            <th>Vehicle Make</th>
            <th>Fuel Type</th>
            <th>Chassis No</th>
            <th>Engine No</th>
            <th>Owner</th>
            <th>Driver</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicleList.map((vehicle, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{vehicle.vehicleNo}</td>
              <td>{vehicle.vehicleMake}</td>
              <td>{vehicle.fuelType}</td>
              <td>{vehicle.chassisNo}</td>
              <td>{vehicle.engineNo}</td>
              <td>{vehicle.vehicleStatus}</td>
              <td>{vehicle.driverName}</td>
              <td>
                <Button
                  variant="info"
                  onClick={() => handleEdit(index)}
                  className={`${styles.actionButton} mr-2`}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(index)}
                  className={styles.actionButton}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="9">
              <div className={`d-flex justify-content-between ${styles.buttonContainer}`}>
                <Button
                  variant="primary"
                  onClick={selectedVehicle !== null ? handleUpdate : handleRegister}
                  className={styles.submitButton}
                >
                  {selectedVehicle !== null ? 'Update' : 'Register'}
                </Button>
                <Button
                  variant="secondary"
                  onClick={clearForm}
                  className={`${styles.cancelButton} ms-2`}
                >
                  Cancel
                </Button>
                <Button variant="danger" className={`${styles.closeButton} ms-2`}>
                  Close
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default VehicleMaster;
