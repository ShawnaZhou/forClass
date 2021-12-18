import React from "react";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Error from "./pages/Error";
import Upload from "./pages/Upload";
import Check from "./components/Check";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Check />} />
      <Route path="home" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="upload" element={<Upload />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
