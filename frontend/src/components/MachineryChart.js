// frontend/src/components/MachineryChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const MachineryChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: 'Performance',
        data: data.map(item => item.performance),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default MachineryChart;