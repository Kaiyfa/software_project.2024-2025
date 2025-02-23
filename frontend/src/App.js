import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
const App = () => {
  const [token, setToken] = useState(localStorage.getItem('accessToken') || '');

  return (
      <Router>
          <Routes>
              <Route path="/login" element={<Login setToken={setToken} />} />
              <Route path="/dashboard" element={<Dashboard token={token} />} />
              <Route path="/" element={<Login setToken={setToken} />} />
          </Routes>
      </Router>
  );
};

export default App;
