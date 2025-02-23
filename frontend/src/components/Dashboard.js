import React, { useEffect, useState } from 'react';
import { getManufacturers } from '../api';

const Dashboard = ({ token }) => {
    const [manufacturers, setManufacturers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getManufacturers(token);
                setManufacturers(data);
            } catch (error) {
                console.error('Failed to fetch manufacturers:', error);
            }
        };
        fetchData();
    }, [token]);

    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
                {manufacturers.map((manufacturer) => (
                    <li key={manufacturer.ManufacturerID}>{manufacturer.Name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;