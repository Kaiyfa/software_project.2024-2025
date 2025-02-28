// frontend/src/components/dashboards/AdminDashboard.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminDashboard = () => {
  // Sample data for the chart
  const chartData = {
    labels: ['Excavator 1', 'Drill 2', 'Loader 3'],
    datasets: [
      {
        label: 'Performance (%)',
        data: [85, 60, 90],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Full access to system controls.</p>

      <h2>Machinery Performance</h2>
      <div style={{ width: '50%', margin: '0 auto' }}>
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default AdminDashboard;