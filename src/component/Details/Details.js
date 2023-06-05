import React from "react";
import { useNavigate } from "react-router-dom";
import storage from "redux-persist/es/storage";

export default function Details() {
  const navigate = useNavigate();
  const handleLogOut = () => {
    try {
      storage.removeItem("persist:root");
      navigate("/");
    } catch (e) {
      console.error("Error: logout", e);
    }
  };
  return (
    <>
      <div>Details</div>
      <button onClick={handleLogOut}>Logout</button>
    </>
  );
}
