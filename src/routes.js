import { Route, Routes } from "react-router";
import Home from "./Views/Home";
import Login from "./Views/Login";
import Dashboard from "./Views/Dashboard";

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default RouterComponent;
