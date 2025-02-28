import React, { useState } from 'react';
import { FaWrench, FaLock, FaBars } from 'react-icons/fa';
import axios from 'axios';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await axios.post('http://localhost:8000/api/login/', {
                username,
                password,
            });

            if (response.data.success) {
                onLogin(username, password);
            } else {
                setError(response.data.error || 'Invalid credentials');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Navbar expand="lg" className="navbar-dark" style={{ backgroundColor: '#000', padding: '10px' }}>
                <Container>
                    <Navbar.Brand href="/" className="text-warning fw-bold" style={{ color: '#DAA520' }}>
                        <FaWrench className="me-2" /> Mining System
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <FaBars color="white" />
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavDropdown title="Menu" id="nav-dropdown" style={{ color: '#DAA520' }}>
                                <NavDropdown.Item href="#login">Login</NavDropdown.Item>
                                <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            {/* Login Form */}
            <div
                className="d-flex flex-column justify-content-center align-items-center vh-100"
                style={{
                    background: 'linear-gradient(to bottom, #000, #333)',
                    color: 'white',
                }}
            >
                <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px', backgroundColor: '#222' }}>
                    <div className="text-center mb-4">
                        <FaWrench size={50} color="#FFD700" />
                        <h1 className="mt-3 text-warning">Mining System</h1>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label text-white">
                                <FaLock /> Username
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label text-white">
                                <FaLock /> Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {error && <div className="alert" style={{ backgroundColor: '#C00000', color: 'white' }}>{error}</div>}

                        <button
                            type="submit"
                            className="btn"
                            style={{ backgroundColor: '#E6AC00', color: 'black' }} // Darker Yellow, better contrast
                            disabled={isLoading}
                        >
                            {isLoading ? 'Logging in...' : 'Login'}
                        </button>

                    </form>
                </div>

                {/* Footer (Contact Section) */}
                <footer id="contact" className="mt-4 text-center">
                    <p className="text-warning">© 2024 Mining System. Developed by [S267941].</p>
                    <p className="text-light">Contact: S267941@uos.ac.uk | +447554935538 | Ipswich-UK_IP4-1LN</p>
                </footer>
            </div>
        </>
    );
};

export default LoginPage;


// const LoginPage = ({ onLogin }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsLoading(true);
//         setError('');
      
//         try {
//           const response = await axios.post('http://localhost:8000/api/login/', {
//             username,
//             password,
//           });
      
//           // Check the success field in the response
//           if (response.data.success) {
//             onLogin(username, password);  // Call the onLogin function
//           } else {
//             setError(response.data.error || 'Invalid credentials');  // Display error message
//           }
//         } catch (err) {
//           setError('An error occurred. Please try again.');  // Handle network errors
//         } finally {
//           setIsLoading(false);  // Stop loading state
//         }
//       };
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
//         <div className="container-fluid">
//             <a className="navbar-brand" href="/">
//                 <FaWrench /> Mining System
//             </a>
//             <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#navbarNav"
//                 aria-controls="navbarNav"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//             >
//                 <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNav">
//                 <ul className="navbar-nav ms-auto">
//                     <li className="nav-item">
//                         <a className="nav-link" href="/">
//                             About the App
//                         </a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="/">
//                             Developer Info
//                         </a>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     </nav>



//     return (

//         <div
//             className="d-flex flex-column justify-content-center align-items-center vh-100"
//             style={{
//                 background: 'linear-gradient(to bottom, #1e3c72, #2a5298)',
//                 color: 'white',
//             }}
//         >
//             <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
//                 <div className="text-center mb-4">
//                     <FaWrench size={50} color="#FFD700" /> {/* Yellow wrench icon */}
//                     <h1 className="mt-3">Mining System</h1>
//                 </div>

//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <label htmlFor="username" className="form-label">
//                             <FaLock /> Username
//                         </label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="username"
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                             required
//                         />
//                     </div>

//                     <div className="mb-3">
//                         <label htmlFor="password" className="form-label">
//                             <FaLock /> Password
//                         </label>
//                         <input
//                             type="password"
//                             className="form-control"
//                             id="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                     </div>

//                     {error && <div className="alert alert-danger">{error}</div>}

//                     <button
//                         type="submit"
//                         className="btn btn-primary w-100"
//                         disabled={isLoading}
//                     >
//                         {isLoading ? 'Logging in...' : 'Login'}
//                     </button>
//                 </form>
//             </div>

//             <footer className="mt-4 text-center">
//                 <p>© 2024 Mining System. Developed by [Your Name].</p>
//                 <p>Contact: [Your Email] | [Your Phone] | [Your Address]</p>
//             </footer>
//         </div>
//     );
// };

// export default LoginPage;