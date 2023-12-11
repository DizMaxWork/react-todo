import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main/Main";
import Test from "./components/Test/Test";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/:id' element={<Test />} />
      </Routes>
    </>
  );
}
export default App;
