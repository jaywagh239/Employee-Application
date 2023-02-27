import React, { useEffect, useState } from "react";
import RegisterModal from "./RegisterModal";
import Skeleton from "../../Components/Skeleton";
import Pagination from "../../Components/Pagination";

import "./explore.scss";
import { useGetAllEmployeeQuery } from "../../api/employeeApi";
import axios from "axios";
const Home = () => {
  const [closeAddModal, setCloseAddModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [employeeList, setemployeeList] = useState([]);
  const [singleRowData, setSingleRowData] = useState(null);

  const [pageSize, setpageSize] = useState(5);
  const [currentPage, setcurrentPage] = useState(1);
  const [sortColumn, setsortColumn] = useState({ path: "name", order: "asc" });

  // searchQuery: ""

  useEffect(() => {
    async function getAllEmployee() {
      try {
        const employee = await axios.get("http://localhost:4000/employees");
        setemployeeList(employee.data);
      } catch (error) {
        console.log("Something is Wrong");
      }
    }
    getAllEmployee();
  }, []);

  const deleteEmployee = async (id) => {
    await axios.delete(`http://localhost:4000/employees/${id}`);
    const newEmployeeList = employeeList?.filter((item) => {
      // console.log(item);
      return item.id !== id;
    });
    setemployeeList(newEmployeeList);
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
      setemployeeList(employee.data);
    } catch (error) {
      console.log("Something is Wrong");
    }
  };
  const handlePageChange = (page) => {
    setcurrentPage(page);
  };

  const sortByColumn = (path) => {
    const newsortColumn = { ...sortColumn };
    if (sortColumn.path === path) {
      newsortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      newsortColumn.path = path;
      newsortColumn.order = "asc";
    }
    setsortColumn(newsortColumn);
  };

  const getPagedData = () => {
    // let filtered = employeeList;
    // if(searchQuery)
    //     filtered = allMovies.filter(m => (m.title.toLowerCase().startsWith(searchQuery.toLowerCase())));

    let sortedList = employeeList;
    if (sortColumn.order == "asc") {
      sortedList = employeeList.sort((a, b) =>
        a[sortColumn.path] > b[sortColumn.path]
          ? 1
          : b[sortColumn.path] > a[sortColumn.path]
          ? -1
          : 0
      );
    } else {
      sortedList = employeeList.sort((a, b) =>
        a[sortColumn.path] > b[sortColumn.path]
          ? -1
          : b[sortColumn.path] > a[sortColumn.path]
          ? 1
          : 0
      );
    }

    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    const paginatedItems = sortedList.slice(start, end);
    return { totalCount: employeeList.length, data: paginatedItems };
  };

  const { totalCount, data: paginatedItems } = getPagedData();

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
              List of Employees where you can add / edit / delete employees.
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
              {paginatedItems.length > 0 ? (
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th
                        className="sort-head"
                        style={{ width: "5%" }}
                        onClick={() => sortByColumn("id")}
                      >
                        ID
                      </th>
                      <th
                        className="sort-head"
                        style={{ width: "15%" }}
                        onClick={() => sortByColumn("name")}
                      >
                        Name
                      </th>
                      <th
                        className="sort-head"
                        style={{ width: "20%" }}
                        onClick={() => sortByColumn("email")}
                      >
                        Email
                      </th>
                      <th
                        className="sort-head"
                        style={{ width: "10%" }}
                        onClick={() => sortByColumn("mobile")}
                      >
                        Mobile Number
                      </th>
                      <th
                        className="sort-head"
                        style={{ width: "15%" }}
                        onClick={() => sortByColumn("designation")}
                      >
                        Designation
                      </th>
                      <th
                        className="sort-head"
                        style={{ width: "10%" }}
                        onClick={() => sortByColumn("department")}
                      >
                        Department
                      </th>
                      <th className="sort-head" style={{ width: "20%" }}>
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedItems.map((item, index) => {
                      return (
                        <tr key={index + "_emp"}>
                          <td style={{ width: "30px" }}>{item?.id}</td>
                          <td style={{ width: "130px" }}>{item?.name}</td>
                          <td style={{ width: "230px" }}>{item?.email}</td>
                          <td style={{ width: "100px" }}>{item?.mobile}</td>
                          <td style={{ width: "100px" }}>
                            {item?.designation}
                          </td>
                          <td style={{ width: "100px" }}>{item?.department}</td>
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
              ) : (
                <Skeleton numRows={5} />
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <Pagination
                itemsCount={totalCount}
                pageSize={pageSize}
                onPageChange={handlePageChange}
                currentPage={currentPage}
              />
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
