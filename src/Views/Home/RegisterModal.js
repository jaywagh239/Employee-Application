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
  return (
    <SimpleModal
      onClose={onClose}
      show={show}
      enableFooter
      //   setShow={setShow}
      enableHeader={true}
      title={"Add New Employee"}
      classes="explore-modal"
    >
      <form className="form-horizontal">
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input
            type="text"
            class="form-control"
            id="firstName"
            aria-describedby="emailHelp"
            placeholder="Enter first name"
          />
        </div>
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input
            style={{ marginTop: "10px" }}
            type="text"
            class="form-control"
            id="lastName"
            aria-describedby="emailHelp"
            placeholder="Enter last name"
          />
        </div>

        <div class="form-group">
          <label for="emailAddress">Email address</label>
          <input
            style={{ marginTop: "10px" }}
            type="email"
            class="form-control"
            id="emailAddress"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <label for="mobileNumber">Mobile Number</label>
          <input
            style={{ marginTop: "10px" }}
            type="number"
            class="form-control"
            id="mobileNumber"
            aria-describedby="emailHelp"
            placeholder="Enter mobile number"
          />
        </div>
      </form>
    </SimpleModal>
  );
};

export default RegisterModal;
