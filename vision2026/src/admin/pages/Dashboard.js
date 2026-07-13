import '../components/Ad.css';
import React from 'react';
import { useEffect, useState } from "react";




function Dashboard() {
  const [userdata, setData] = useState([]);

  useEffect(() => {
    Fetchapi();
  }, []);

  // function Fetchapi() {
  //   fetch('http://localhost:7000/api/userdata', {
     
  //   })
  //     .then(res => res.json())
  //     .then(data => setData(data.record))
     
  // }
  function Fetchapi() {
  const token = localStorage.getItem("token");

  console.log("Token:", token);

  fetch("http://localhost:7000/api/userdata", {
    method: "GET",
    headers: {
      Authorization: token,
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('token', data.token); 

      if (data.record) {
        setData(data.record);
      } else {
        alert(data.error);
      }
    })
    .catch(err => console.log(err));
} 
  
  return (


    <div className="dashboard-container">
      <h1>Dashboard</h1>
      {userdata.map((u, index) => (
        <>
          <p>{u.username}</p>
          <p>{u.email}</p>
          <p>{u.Role}</p>
        </>
      ))}

    </div>

  );
  
}






export default Dashboard;