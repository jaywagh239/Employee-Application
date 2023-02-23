import { Route, Routes } from "react-router";
import Home from "./Component/Home";
import Login from "./Component/Login";

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default RouterComponent;
