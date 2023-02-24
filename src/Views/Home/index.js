import React, { useEffect, useState } from "react";
import RegisterModal from "./RegisterModal";
import "./explore.css";
import { useGetAllEmployeeQuery } from "../../api/employeeApi";
const Home = () => {
  const [closeAddModal, setCloseAddModal] = useState(false);
  let tableArr = [1, 2, 3, 4, 5, 6, 7, 8];

  // const { data, isLoading, error } = useGetAllEmployeeQuery();
  // console.log("/////////data", data);
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
              {tableArr.map((item, index) => {
                let backgroundColor = "";
                return (
                  <tr style={{}}>
                    <td style={{ width: "30px" }} data-th="Movie Title">
                      {index + 1}
                    </td>
                    <td style={{ width: "130px" }} data-th="Genre">
                      {"Jayesh wagh"}
                    </td>
                    <td style={{ width: "230px" }} data-th="Year">
                      {"jayeshwagh@gmail.com"}
                    </td>
                    <td style={{ width: "100px" }} data-th="Gross">
                      {"1234567890"}
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
                          <button className="btn btn-danger">
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
