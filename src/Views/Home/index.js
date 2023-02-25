import React, { useEffect, useState } from "react";
import RegisterModal from "./RegisterModal";
import "./explore.css";
import { useGetAllEmployeeQuery } from "../../api/employeeApi";
import axios from "axios";
const Home = () => {
  const [closeAddModal, setCloseAddModal] = useState(false);
  const [employee, setEmployee] = useState([]);
  let tableArr = [1, 2, 3, 4, 5, 6, 7, 8];

  useEffect(() => {
    async function getAllStudent() {
      try {
        const students = await axios.get("http://localhost:4000/employees");
        setEmployee(students.data);
      } catch (error) {
        console.log("Something is Wrong");
      }
    }
    getAllStudent();
  }, []);

  // const deleteEmployee = (data) => {
  //   console.log("delete data", data);
  // };

  const deleteEmployee = async (id) => {
    await axios.delete(`http://localhost:4000/employees/${id}`);
    var newstudent = employee?.filter((item) => {
      // console.log(item);
      return item.id !== id;
    });
    setEmployee(newstudent);
  };

  return (
    <div>
      <div style={{}} className="mainContainer">
        <div className="tophead">
          <h1 style={{ textAlign: "center" }}>Employees List</h1>
        </div>

        <div className="mainBody">
          <div style={{ marginTop: "10px" }}>
            <button
              className="btn btn-success"
              onClick={() => setCloseAddModal(!closeAddModal)}
            >
              {" "}
              {"Add Employee +"}
            </button>
          </div>

          <div style={{ marginTop: "25px", width: "100%" }}>
            <table className="rwd-table">
              <tr>
                <th style={{ width: "5%" }}>ID</th>
                <th style={{ width: "25%" }}>First Name</th>
                <th style={{ width: "25%" }}>Email</th>
                <th style={{ width: "15%" }}>Mobile no</th>
                <th style={{}}>Action</th>
              </tr>
              {employee.map((item, index) => {
                let backgroundColor = "";
                return (
                  <tr style={{}} key={index + "_emp"}>
                    <td style={{ width: "30px" }} data-th="Movie Title">
                      {item?.id}
                    </td>
                    <td style={{ width: "130px" }} data-th="Genre">
                      {item?.name}
                    </td>
                    <td style={{ width: "230px" }} data-th="Year">
                      {item?.email}
                    </td>
                    <td style={{ width: "100px" }} data-th="Gross">
                      {item?.mobile}
                    </td>
                    <td
                      style={{ width: "30px", justifyContent: "center" }}
                      data-th="Year"
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <span style={{ marginRight: "50px" }}>
                          <button className="btn btn-warning"> {"Edit"}</button>
                        </span>
                        <span style={{ marginRight: "20px" }}>
                          <button
                            className="btn btn-danger"
                            onClick={() => deleteEmployee(item.id)}
                          >
                            {" "}
                            {"Delete"}
                          </button>
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
      <RegisterModal
        onClose={() => setCloseAddModal(!closeAddModal)}
        show={closeAddModal}
        // setShow={setShow}
        // editMode={editMode}
        // row={singleRowData}
        // handleUpdate={handleUpdate}
      />
    </div>
  );
};
export default Home;
