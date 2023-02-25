import SimpleModal from "./SimpleModal";
import React, { useEffect, useState } from "react";
import { FormGroup, FormControl, Button } from "react-bootstrap";

// import { Form, FormGroup, Input } from "reactstrap";
import "./employeeform.css";

const RegisterModal = ({
  show,
  //   setShow,
  title,
  editMode,
  row,
  //   handleUpdate,
  onClose,
  onSubmit,
  updateEmp,
}) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    mobile: "",
    designation: "",
    department: "",
  });

  useEffect(() => {
    if (editMode && row !== null) {
      var obj = {
        id: row.id,
        name: row.name,
        email: row.email,
        mobile: row.mobile,
        designation: row.designation,
        department: row.department,
      };
      setFormData({ ...obj });
    } else {
      var obj = {
        id: "",
        name: "",
        email: "",
        mobile: "",
        designation: "",
        department: "",
      };
      setFormData({ ...obj });
    }
  }, [editMode, row]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("final data", { ...formData });
  };

  return (
    <SimpleModal
      onClose={onClose}
      show={show}
      // enableFooter
      //   setShow={setShow}
      enableHeader={true}
      title={"Add New Employee"}
      className="explore-modal"
    >
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="firstName">First Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="firstName"
            aria-describedby="emailHelp"
            placeholder="Enter first name"
            value={formData.name}
            onChange={changeHandler}
          />
        </div>
        {/* <div className="form-group">
          <label for="lastName">Last Name</label>
          <input
            style={{ marginTop: "10px" }}
            type="text"
            className="form-control"
            id="lastName"
            aria-describedby="emailHelp"
            placeholder="Enter last name"
          />
        </div> */}
        <div className="form-group">
          <label for="emailAddress">Email address</label>
          <input
            style={{ marginTop: "10px" }}
            type="email"
            name="email"
            className="form-control"
            id="emailAddress"
            value={formData.email}
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label for="mobileNumber">Mobile Number</label>
          <input
            style={{ marginTop: "10px" }}
            type="number"
            name="mobile"
            className="form-control"
            id="mobileNumber"
            value={formData.mobile}
            aria-describedby="emailHelp"
            placeholder="Enter mobile number"
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label for="mobileNumber">Enter Designation</label>
          <input
            style={{ marginTop: "10px" }}
            type="text"
            name="designation"
            className="form-control"
            id="mobileNumber"
            value={formData.designation}
            aria-describedby="emailHelp"
            placeholder="Enter designation"
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label for="mobileNumber">Enter department</label>
          <input
            style={{ marginTop: "10px" }}
            type="text"
            name="department"
            className="form-control"
            value={formData.department}
            id="mobileNumber"
            aria-describedby="emailHelp"
            placeholder="Enter department"
            onChange={changeHandler}
          />
        </div>

        <div className="modalFooter">
          <Button
            className="btn btn-success"
            onClick={() =>
              editMode ? updateEmp(formData) : onSubmit(formData)
            }
          >
            {editMode ? "Update" : "Save"}
          </Button>
          {"      "}
          <Button className="btn btn-danger" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </form>
    </SimpleModal>
  );
};

export default RegisterModal;
