import React from "react";
import "./App.css";
import Details from "./component/Details/Details";
import Login from "./component/auth/Login";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./component/auth/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/details"
          element={
            <PrivateRoute>
              <Details />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
