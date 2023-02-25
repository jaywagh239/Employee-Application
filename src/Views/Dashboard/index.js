import React from "react";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
import "./dashboard.scss";
import Widget from "../../Components/Widget";
import Table from "../../Components/Table";
import Chart from "../../Components/Chart";
import Featured from "../../Components/Featured";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../../reducres/auth";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.auth);
  let { user, isAuthenticated } = userLogin;

  const [showSidebar, setshowSidebar] = useState(true);
  const handleSidebarClick = () => {
    setshowSidebar(!showSidebar);
  };

  const logoutUser = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div className="home">
      {showSidebar && <Sidebar />}
      <div className="homeContainer">
        <Navbar
          handleSidebarClick={handleSidebarClick}
          onLogout={logoutUser}
          user={user}
        />
        <div className="widgets">
          <Widget />
          <Widget />
          <Widget />
        </div>
        <div className="charts">
          <Chart />
          <Featured />
        </div>
        <div className="listContainer">
          <div className="listHead">
            <div className="listTitle">
              4 active integrations for this organisation
            </div>
            <button className="button" onClick={() => navigate("/home")}>
              Add Integration
            </button>
          </div>

          <Table />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
