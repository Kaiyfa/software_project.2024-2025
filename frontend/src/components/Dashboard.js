// import React, { useEffect, useState } from 'react';
// import { getManufacturers } from '../api';

// const Dashboard = ({ token }) => {
//     const [manufacturers, setManufacturers] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const data = await getManufacturers(token);
//                 setManufacturers(data);
//             } catch (error) {
//                 console.error('Failed to fetch manufacturers:', error);
//             }
//         };
//         fetchData();
//     }, [token]);
   
    

//     return (
//         <div>
//             <h1>Dashboard</h1>
//             <ul>
//                 {manufacturers.map((manufacturer) => (
//                     <li key={manufacturer.ManufacturerID}>{manufacturer.Name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };
// export default Dashboard;



// code from openA

import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [manufacturers, setManufacturers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("access");

    fetch("http://127.0.0.1:8000/api/manufacturers/", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(response => response.json())
      .then(data => {
        console.log("Fetched Data:", data); // Debugging
        setManufacturers(data);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      {manufacturers.length > 0 ? (
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Country</th>
              <th>Contact</th>
              <th>Year Established</th>
              <th>Certification</th>
            </tr>
          </thead>
          <tbody>
            {manufacturers.map(manufacturer => (
              <tr key={manufacturer.ManufacturerID}>
                <td>{manufacturer.ManufacturerID}</td>
                <td>{manufacturer.Name}</td>
                <td>{manufacturer.Country}</td>
                <td>{manufacturer.ContactDetails}</td>
                <td>{manufacturer.YearEstablished}</td>
                <td>{manufacturer.CertificationLevel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No manufacturers found.</p>
      )}
    </div>
  );
};

export default Dashboard;

// code from openA