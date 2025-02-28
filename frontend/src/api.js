import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

// Function to get access token
export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/token/`, { username, password });
        console.log("Login successful:", response.data); // Debugging
        return response.data;
    } catch (error) {
        console.error("Login error:", error.response ? error.response.data : error.message);
        throw error;
    }
};
// Function to refresh access token
export const refreshToken = async (refreshToken) => {
    const response = await axios.post(`${API_BASE_URL}/token/refresh/`, { refresh: refreshToken });
    return response.data;
};

// Function to fetch manufacturers
export const getManufacturers = async (accessToken) => {
    const response = await axios.get(`${API_BASE_URL}/manufacturers/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
    });
    return response.data;
};
