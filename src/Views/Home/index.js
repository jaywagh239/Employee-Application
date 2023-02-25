import React, { useEffect, useState } from "react";
import RegisterModal from "./RegisterModal";
import "./explore.css";
import { useGetAllEmployeeQuery } from "../../api/employeeApi";
import axios from "axios";
const Home = () => {
  const [closeAddModal, setCloseAddModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [employee, setEmployee] = useState([]);
  const [singleRowData, setSingleRowData] = useState(null);

  useEffect(() => {
    async function getAllEmployee() {
      try {
        const employee = await axios.get("http://localhost:4000/employees");
        setEmployee(employee.data);
      } catch (error) {
        console.log("Something is Wrong");
      }
    }
    getAllEmployee();
  }, []);

  const deleteEmployee = async (id) => {
    await axios.delete(`http://localhost:4000/employees/${id}`);
    var newEmployee = employee?.filter((item) => {
      // console.log(item);
      return item.id !== id;
    });
    setEmployee(newEmployee);
  };

  const createEmp = async (data) => {
    setCloseAddModal(!closeAddModal);
    setEditMode(false);
    setSingleRowData(null);
    console.log(data);
    try {
      const newemployee = await axios.post(
        `http://localhost:4000/employees`,
        data
      );
      if (newemployee.status === 201) {
        getEmp();
      }
      console.log(newemployee);
    } catch (error) {
      console.log("Something is Wrong");
    }
  };

  const updateEmp = async (data) => {
    setCloseAddModal(!closeAddModal);
    setEditMode(false);
    setSingleRowData(null);
    try {
      const updateemployee = await axios.put(
        `http://localhost:4000/employees/${data.id}`,
        data
      );
      if (updateemployee.status === 200) {
        getEmp();
      }
    } catch (error) {
      console.log("Something is Wrong");
    }
  };

  const getEmp = async () => {
    try {
      const employee = await axios.get("http://localhost:4000/employees");
      setEmployee(employee.data);
    } catch (error) {
      console.log("Something is Wrong");
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Employee Application
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>

      <main role="main">
        <div className="jumbotron">
          <div className="container">
            <h3 className="display-3">Employee List</h3>
            <p>
              List of Employees where you can add / edit / delete employees or
              search sort list.
            </p>
            <hr />
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>
                <button
                  className="btn btn-primary"
                  onClick={() => setCloseAddModal(!closeAddModal)}
                >
                  Add Employee
                </button>
              </p>

              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th style={{ width: "5%" }}>ID</th>
                    <th style={{ width: "15%" }}>Name</th>
                    <th style={{ width: "20%" }}>Email</th>
                    <th style={{ width: "10%" }}>Mobile Number</th>
                    <th style={{ width: "15%" }}>Designation</th>
                    <th style={{ width: "10%" }}>Department</th>
                    <th style={{ width: "20%" }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {employee.map((item, index) => {
                    let backgroundColor = "";
                    return (
                      <tr key={index + "_emp"}>
                        <td style={{ width: "30px" }} data-th="Movie Title">
                          {item?.id}
                        </td>
                        <td style={{ width: "130px" }} data-th="Genre">
                          {item?.name} {item?.lastName}
                        </td>
                        <td style={{ width: "230px" }} data-th="Year">
                          {item?.email}
                        </td>
                        <td style={{ width: "100px" }} data-th="Gross">
                          {item?.mobile}
                        </td>
                        <td style={{ width: "100px" }} data-th="Gross">
                          {item?.designation}
                        </td>
                        <td style={{ width: "100px" }} data-th="Gross">
                          {item?.department}
                        </td>
                        <td
                          style={{ width: "30px", justifyContent: "center" }}
                          data-th="Year"
                        >
                          <button
                            className="btn btn-warning btn-sm btn-action"
                            onClick={() => {
                              setCloseAddModal(!closeAddModal);
                              setEditMode(true);
                              setSingleRowData(item);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger btn-sm btn-action"
                            onClick={() => deleteEmployee(item.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </main>
      <RegisterModal
        onClose={() => {
          setCloseAddModal(!closeAddModal);
          setEditMode(false);
          setSingleRowData(null);
        }}
        show={closeAddModal}
        onSubmit={(data) => createEmp(data)}
        // setShow={setShow}
        editMode={editMode}
        row={singleRowData}
        updateEmp={(data) => updateEmp(data)}
        // handleUpdate={handleUpdate}
      />
    </div>
  );
};
export default Home;
