import React from "react";
import HomeComp from "./component/HomeComp"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmpForm from "./component/EmpForm"
import UpdateForm from "./component/UpdateForm"
import HomePage from "./component/HomePage"
// import DisplayPage from "./component/DisplayPage";


function App() {
  return (
    <BrowserRouter>
      <HomePage />
      <Routes>
        {/* <Route path="/" element={<DisplayPage />} /> */}
        <Route path="/" element={<HomeComp />} />
        <Route path="/addEmployee" element={<EmpForm />} />
        <Route path="/updateEmployee/:id" element={<UpdateForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
