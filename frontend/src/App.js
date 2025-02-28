// import logo from './logo.svg';
// import './App.css';
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';

// const App = () => {
//     const [token, setToken] = useState(localStorage.getItem('accessToken') || null);

//     return (
//         <Router>
//             <Routes>
//                 <Route path="/login" element={<Login setToken={setToken} />} />
//                 <Route path="/dashboard" element={<Dashboard token={token} />} />
//                 <Route path="/" element={<Login setToken={setToken} />} />
//             </Routes>
//         </Router>
//     );
// };

// export default App;


// deepseekkkkkkk code 


// frontend/src/App.js
// import React, { useState, useEffect } from 'react';
// import AdminDashboard from './components/dashboards/AdminDashboard';
// import MaintenanceDashboard from './components/dashboards/MaintenanceDashboard';
// import SecurityDashboard from './components/dashboards/SecurityDashboard';
// import OperatorDashboard from './components/dashboards/OperatorDashboard';
// import axios from 'axios';

// function App() {
//   const [userRole, setUserRole] = useState(null);

//   useEffect(() => {
//     // Fetch user role from backend
//     axios.get('http://localhost:8000/api/user/role/') // Use the correct URL
//       .then(response => {
//         console.log('User role:', response.data.role); // Debug log
//         setUserRole(response.data.role);
//       })
//       .catch(error => {
//         console.error('Error fetching user role:', error);
//       });
//   }, []);
//   const renderDashboard = () => {
//     switch (userRole) {
//       case 'admin':
//         return <AdminDashboard />;
//       case 'maintenance':
//         return <MaintenanceDashboard />;
//       case 'security':
//         return <SecurityDashboard />;
//       case 'operator':
//         return <OperatorDashboard />;
//       default:
//         return <p>Loading...</p>;
//     }
//   };

//   return (
//     <div>
//       {renderDashboard()}
//     </div>
//   );
// }

// export default App;




// deepseekkkkkkk code 

// frontend/src/App.js
import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Simulate login logic (replace with actual API call)
    if (username === 'admin' && password === 'soulmate12') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <div>Admin Dashboard (to be implemented)</div>
      )}
    </div>
  );
}

export default App;