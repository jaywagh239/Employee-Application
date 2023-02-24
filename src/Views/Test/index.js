import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Test = () => {
  const opentoast = () => {
    toast.success("Section updated Successfully");
  };

  return (
    <>
      <button onClick={opentoast} className="btn btn-primary">
        notify
      </button>
      <ToastContainer />
    </>
  );
};

export default Test;
