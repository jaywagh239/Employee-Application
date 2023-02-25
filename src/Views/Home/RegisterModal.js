import SimpleModal from "./SimpleModal";
import React, { useEffect, useState } from "react";
import { FormGroup, FormControl, Button } from "react-bootstrap";

// import { Form, FormGroup, Input } from "reactstrap";
import "./employeeform.css";

const RegisterModal = ({
  show,
  //   setShow,
  title,
  //   editMode,
  //   row,
  //   handleUpdate,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

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
      enableFooter
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
            aria-describedby="emailHelp"
            placeholder="Enter mobile number"
            onChange={changeHandler}
          />
        </div>
      </form>
    </SimpleModal>
  );
};

export default RegisterModal;
