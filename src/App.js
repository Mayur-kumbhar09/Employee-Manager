import React from "react";
import HomeComp from "./component/HomeComp"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmpForm from "./component/EmpForm"
import UpdateForm from "./component/UpdateForm"
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <BrowserRouter>
    <MainRoutes />
      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/addEmployee" element={<EmpForm />} />
        <Route path="/updateEmployee/:id" element={<UpdateForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
