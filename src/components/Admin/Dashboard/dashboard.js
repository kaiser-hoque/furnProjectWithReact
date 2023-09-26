import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Dashboard() {
  const userLogged = JSON.parse(localStorage.getItem("userdata"));
  return (
    <div>
      <h1>This is dashboard</h1>
      <h1>Hi {userLogged.name},</h1>
      <img
        src={`http://localhost/furn/api/${userLogged.image}`}
        alt=""
        style={{ width: "200px" }}
      />
    </div>
  );
}

export default Dashboard;
