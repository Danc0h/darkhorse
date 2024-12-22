import React from "react";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import ProgressEditPage from "./components/pages/ProgressEditPage";
import RunningEditPage from "./components/pages/RunningEditPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SigninPage from "./components/pages/SigninPage";
import SignupPage from "./components/pages/SignupPage";
import AdminRoute from "./components/pages/AdminRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<SigninPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route
            path='/admin/progressedit'
            element={
              <AdminRoute>
                <ProgressEditPage />
              </AdminRoute>
            }
          ></Route>
          <Route
            path='/admin/runningedit'
            element={
              <AdminRoute>
                <RunningEditPage />
              </AdminRoute>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
